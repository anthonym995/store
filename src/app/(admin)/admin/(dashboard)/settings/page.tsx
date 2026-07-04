'use client';

import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Modal } from '@/components/ui/Modal';
import { User, AdminRole } from '@/lib/types';
import { TextField, Button } from '@/components/form';
import { PencilIcon } from '@/components/ui/Icons';

const currentUser: User = {
  id: '1',
  fullName: 'Super Admin',
  email: 'admin@evbrassware.com',
  role: 'superadmin',
  status: 'active',
  lastLogin: 'Today at 09:42 AM',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const initialAdmins: User[] = [
  currentUser,
  {
    id: '2',
    fullName: 'Sarah Staff',
    email: 'sarah@evbrassware.com',
    role: 'admin',
    status: 'active',
    lastLogin: '2 hours ago',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '3',
    fullName: 'Alex Pending',
    email: 'alex@evbrassware.com',
    role: 'admin',
    status: 'pending',
    lastLogin: 'Never',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

type ProfileFormValues = {
  fullName: string;
  email: string;
};

type UserModalFormValues = {
  fullName: string;
  email: string;
  password?: string;
  role: AdminRole;
};

type PasswordFormValues = {
  currentPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'team'>('profile');
  const [admins, setAdmins] = useState<User[]>(initialAdmins);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUserId, setEditingUserId] = useState<string | null>(null);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  // Forms
  const profileMethods = useForm<ProfileFormValues>({
    defaultValues: { fullName: currentUser.fullName, email: currentUser.email },
  });

  const userModalMethods = useForm<UserModalFormValues>({
    defaultValues: { fullName: '', email: '', password: '', role: 'admin' },
  });

  const passwordMethods = useForm<PasswordFormValues>({
    defaultValues: { currentPassword: '', newPassword: '', confirmPassword: '' },
  });

  const openAddModal = () => {
    setEditingUserId(null);
    userModalMethods.reset({ fullName: '', email: '', password: '', role: 'admin' });
    setIsModalOpen(true);
  };

  const openEditModal = (user: User) => {
    setEditingUserId(user.id);
    userModalMethods.reset({ fullName: user.fullName, email: user.email, password: '', role: user.role });
    setIsModalOpen(true);
  };

  const handleSaveUser = (data: UserModalFormValues) => {
    if (data.fullName && data.email) {
      if (editingUserId) {
        setAdmins(
          admins.map((a) =>
            a.id === editingUserId ? { ...a, fullName: data.fullName, email: data.email, role: data.role } : a
          )
        );
      } else if (data.password) {
        setAdmins([
          ...admins,
          {
            id: Date.now().toString(),
            fullName: data.fullName,
            email: data.email,
            role: data.role,
            status: 'pending',
            lastLogin: 'Never',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      }
      setIsModalOpen(false);
    }
  };

  const handleSuspendAdmin = (id: string) => {
    if (confirm('Are you sure you want to suspend this user? They will immediately lose access.')) {
      setAdmins(admins.map((a) => (a.id === id ? { ...a, status: 'suspended' } : a)));
    }
  };

  const handleSaveProfile = (data: ProfileFormValues) => {
    // Save profile logic
    setIsProfileModalOpen(false);
  };

  const handleSavePassword = (data: PasswordFormValues) => {
    // Save password logic
    passwordMethods.reset();
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 space-y-4 duration-700">
      <div className="px-2">
        <h2 className="font-display text-navy text-3xl font-bold tracking-tight">System Settings</h2>
      </div>

      {/* Elegant Tabs */}
      <div className="border-b border-gray-200 px-2">
        <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('profile')}
            className={`border-b-2 px-1 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'profile'
                ? 'border-navy text-navy font-bold'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Account Profile
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`border-b-2 px-1 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'security'
                ? 'border-navy text-navy font-bold'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Security
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`border-b-2 px-1 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'team'
                ? 'border-navy text-navy font-bold'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Team & Access Control
          </button>
        </nav>
      </div>

      <div className="px-2">
        {/* ======================= PROFILE TAB ======================= */}
        {activeTab === 'profile' && (
          <div className="animate-in fade-in space-y-4 duration-500">
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex items-center justify-between border-b border-gray-50 px-4 py-3 sm:px-6">
                <h3 className="font-display text-navy text-base font-bold">Personal Information</h3>
                <button
                  onClick={() => setIsProfileModalOpen(true)}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50"
                >
                  <PencilIcon className="h-3 w-3" />
                  Edit Profile
                </button>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="from-navy to-navy-light flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl font-bold text-white shadow-md">
                    {currentUser.fullName.charAt(0)}
                  </div>

                  <div className="grid flex-1 grid-cols-1 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                      <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">Display Name</p>
                      <p className="text-navy mt-1 text-sm font-bold">{currentUser.fullName}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">Email Address</p>
                      <p className="text-navy mt-1 text-sm font-medium">{currentUser.email}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">Assigned Role</p>
                      <span
                        className={`mt-1.5 inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-bold uppercase ${
                          currentUser.role === 'superadmin' ? 'bg-maroon/10 text-maroon' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {currentUser.role}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">Account Status</p>
                      <span className="mt-1.5 inline-flex items-center gap-1 rounded-full border border-green-100 bg-green-50 px-2 py-0.5 text-[10px] font-bold tracking-widest text-green-600 uppercase">
                        <span className="h-1 w-1 rounded-full bg-green-500"></span>
                        {currentUser.status}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">Last Login</p>
                      <p className="mt-1 text-xs font-medium text-gray-600">{String(currentUser.lastLogin)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================= SECURITY TAB ======================= */}
        {activeTab === 'security' && (
          <div className="animate-in fade-in space-y-3 duration-500">
            <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="border-b border-gray-50 px-4 pt-3 sm:px-6">
                <h3 className="font-display text-navy text-base font-bold">Change Password</h3>
                <p className="mt-0.5 text-xs text-gray-500">
                  Ensure your account is using a long, random password to stay secure.
                </p>
              </div>
              <div className="p-4 sm:p-6">
                <FormProvider {...passwordMethods}>
                  <form onSubmit={passwordMethods.handleSubmit(handleSavePassword)} className="max-w-xl space-y-4">
                    <div className="space-y-3">
                      <TextField name="currentPassword" label="Current Password" type="password" />

                      <TextField name="newPassword" label="New Password" type="password" />

                      <TextField name="confirmPassword" label="Confirm New Password" type="password" />
                    </div>
                    <div className="flex justify-end pt-2">
                      <Button type="submit">Update Password</Button>
                    </div>
                  </form>
                </FormProvider>
              </div>
            </div>
          </div>
        )}

        {/* ======================= TEAM TAB ======================= */}
        {activeTab === 'team' && (
          <div className="animate-in fade-in duration-500">
            <div className="flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex items-center justify-between border-b border-gray-50 px-4 py-3 sm:px-6">
                <div>
                  <h3 className="font-display text-navy text-base font-bold">Authorized Users</h3>
                  <p className="mt-0.5 text-xs text-gray-500">Only Super Admins can add or suspend users.</p>
                </div>
                <Button onClick={openAddModal}>Manual Add User</Button>
              </div>
              <div className="custom-scrollbar h-[350px] overflow-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="text-navy border-b border-gray-50 bg-gray-50/50 text-xs font-bold tracking-widest uppercase">
                    <tr>
                      <th className="px-6 py-4 sm:px-8">User</th>
                      <th className="px-6 py-4 sm:px-8">Role Access</th>
                      <th className="px-6 py-4 sm:px-8">Status</th>
                      <th className="px-6 py-4 text-right sm:px-8">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {admins.map((admin) => (
                      <tr key={admin.id} className="group hover:bg-cream-dark/10 transition-colors">
                        <td className="px-6 py-4 sm:px-8">
                          <div className="flex items-center gap-4">
                            <div className="from-navy to-navy-light flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-sm">
                              {admin.fullName.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div className="text-navy text-sm font-bold">{admin.fullName}</div>
                              <div className="text-xs text-gray-500">{admin.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 sm:px-8">
                          <span
                            className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold uppercase ${
                              admin.role === 'superadmin' ? 'bg-maroon/10 text-maroon' : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {admin.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 sm:px-8">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold tracking-widest uppercase ${
                              admin.status === 'active'
                                ? 'border border-green-100 bg-green-50 text-green-600'
                                : admin.status === 'suspended'
                                  ? 'border border-red-100 bg-red-50 text-red-600'
                                  : 'bg-gold/10 text-gold-dark border-gold/30 border'
                            }`}
                          >
                            <span
                              className={`h-1 w-1 rounded-full ${
                                admin.status === 'active'
                                  ? 'bg-green-500'
                                  : admin.status === 'suspended'
                                    ? 'bg-red-500'
                                    : 'bg-gold-dark'
                              }`}
                            ></span>
                            {admin.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 sm:px-8">
                          <div className="flex justify-end gap-3">
                            <button
                              onClick={() => openEditModal(admin)}
                              className="hover:bg-navy/10 text-navy rounded-lg border border-transparent px-3 py-1.5 text-xs font-bold transition-colors"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleSuspendAdmin(admin.id)}
                              disabled={admin.role === 'superadmin' || admin.status === 'suspended'}
                              className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${
                                admin.role === 'superadmin' || admin.status === 'suspended'
                                  ? 'cursor-not-allowed text-gray-300'
                                  : 'hover:bg-brand-red/10 text-brand-red hover:border-brand-red/20 border border-transparent'
                              }`}
                              title={admin.role === 'superadmin' ? 'Cannot suspend Super Admin' : 'Suspend Access'}
                            >
                              Suspend
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ======================= PROFILE EDIT MODAL ======================= */}
      <Modal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        title="Edit Profile"
        description="Update your personal information."
        maxWidth="max-w-xl"
      >
        <FormProvider {...profileMethods}>
          <form onSubmit={profileMethods.handleSubmit(handleSaveProfile)} className="space-y-4 p-4 sm:p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="col-span-2">
                <TextField name="fullName" label="Display Name" />
              </div>
              <div className="col-span-2">
                <TextField name="email" label="Email Address" type="email" readOnly disabled />
                <p className="mt-1 text-[10px] text-gray-400">Email addresses cannot be changed once set.</p>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2 border-t border-gray-100 pt-4">
              <Button type="button" variant="ghost" onClick={() => setIsProfileModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </FormProvider>
      </Modal>

      {/* ======================= ADD/EDIT USER MODAL ======================= */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingUserId ? 'Edit User' : 'Manual User Creation'}
        description={
          editingUserId
            ? "Modify the user's details and role."
            : 'Create an account directly. The user must change this password on first login.'
        }
        maxWidth="max-w-xl"
      >
        <FormProvider {...userModalMethods}>
          <form onSubmit={userModalMethods.handleSubmit(handleSaveUser)} className="space-y-4 p-4 sm:p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <TextField name="fullName" label="Full Name" placeholder="e.g. John Doe" required />
              </div>
              <div>
                <TextField
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="john@evbrassware.com"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                  Assign Role Level
                </label>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <label
                    className={`relative flex cursor-pointer rounded-xl border p-3 transition-all ${userModalMethods.watch('role') === 'admin' ? 'border-navy bg-navy/5' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <input type="radio" value="admin" {...userModalMethods.register('role')} className="sr-only" />
                    <div>
                      <span className="text-navy block text-sm font-bold">Standard Admin</span>
                      <span className="mt-0.5 block text-[10px] leading-snug text-gray-500">
                        Can add & edit products. Cannot delete items or manage users.
                      </span>
                    </div>
                  </label>

                  <label
                    className={`relative flex cursor-pointer rounded-xl border p-3 transition-all ${userModalMethods.watch('role') === 'superadmin' ? 'border-maroon bg-maroon/5' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <input type="radio" value="superadmin" {...userModalMethods.register('role')} className="sr-only" />
                    <div>
                      <span className="text-maroon block text-sm font-bold">Super Admin</span>
                      <span className="mt-0.5 block text-[10px] leading-snug text-gray-500">
                        Full system access. Can delete items and manage team.
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {!editingUserId && (
                <div className="md:col-span-2">
                  <TextField
                    name="password"
                    label="Temporary Password"
                    type="text"
                    placeholder="Enter a secure temporary password"
                    required
                  />
                  <p className="mt-2 rounded border border-amber-100 bg-amber-50 p-2 text-[10px] font-medium text-amber-600">
                    Share this password with the user manually. They will be forced to change it on their first login.
                  </p>
                </div>
              )}
            </div>
            <div className="mt-4 flex justify-end gap-2 border-t border-gray-100 pt-4">
              <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">{editingUserId ? 'Save Changes' : 'Create User'}</Button>
            </div>
          </form>
        </FormProvider>
      </Modal>
    </div>
  );
}
