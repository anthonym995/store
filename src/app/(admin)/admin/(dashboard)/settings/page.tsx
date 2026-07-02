'use client';

import { useState } from 'react';

// Mock data for admin users
const initialAdmins = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@evbrassware.com',
    role: 'Super Admin',
    status: 'Active',
    lastLogin: 'Just now',
  },
  {
    id: '2',
    name: 'Sarah Manager',
    email: 'sarah@evbrassware.com',
    role: 'Catalog Editor',
    status: 'Active',
    lastLogin: '2 hours ago',
  },
  {
    id: '3',
    name: 'Alex Pending',
    email: 'alex@evbrassware.com',
    role: 'Order Manager',
    status: 'Pending',
    lastLogin: 'Never',
  },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'team'>('profile');
  const [admins, setAdmins] = useState(initialAdmins);
  const [isAdding, setIsAdding] = useState(false);
  const [newAdmin, setNewAdmin] = useState({ username: '', email: '', password: '', confirmPassword: '' });

  const handleAddAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAdmin.password !== newAdmin.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (newAdmin.username && newAdmin.email && newAdmin.password) {
      setAdmins([
        ...admins,
        {
          id: Date.now().toString(),
          name: newAdmin.username,
          email: newAdmin.email,
          role: 'Admin',
          status: 'Pending',
          lastLogin: 'Never',
        },
      ]);
      setNewAdmin({ username: '', email: '', password: '', confirmPassword: '' });
      setIsAdding(false);
    }
  };

  const handleRemoveAdmin = (id: string) => {
    if (confirm('Are you sure you want to revoke access for this user?')) {
      setAdmins(admins.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 space-y-6 duration-700">
      <div className="px-2">
        <h2 className="font-display text-navy text-3xl font-bold tracking-tight">System Settings</h2>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 px-2">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('profile')}
            className={`border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'profile'
                ? 'border-navy text-navy font-bold'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Account Profile
          </button>
          <button
            onClick={() => setActiveTab('team')}
            className={`border-b-2 px-1 py-4 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === 'team'
                ? 'border-navy text-navy font-bold'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            }`}
          >
            Team Management
          </button>
        </nav>
      </div>

      <div className="px-2">
        {activeTab === 'profile' && (
          <div className="animate-in fade-in space-y-6 duration-500">
            {/* Profile Form */}
            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="border-b border-gray-50 px-6 py-5">
                <h3 className="font-display text-navy text-lg font-bold">Personal Information</h3>
                <p className="mt-1 text-sm text-gray-500">Update your account details and public profile.</p>
              </div>
              <div className="p-6 sm:p-8">
                <form className="max-w-2xl space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="col-span-2">
                      <label className="mb-1 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Admin User"
                        className="focus:border-navy focus:ring-navy w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:ring-1 focus:outline-none"
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="mb-1 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        defaultValue="admin@evbrassware.com"
                        className="focus:border-navy focus:ring-navy w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:ring-1 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      className="bg-navy hover:bg-navy-light rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Password Form */}
            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="border-b border-gray-50 px-6 py-5">
                <h3 className="font-display text-navy text-lg font-bold">Security</h3>
                <p className="mt-1 text-sm text-gray-500">Update your password to keep your account secure.</p>
              </div>
              <div className="p-6 sm:p-8">
                <form className="max-w-2xl space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="mb-1 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="focus:border-navy focus:ring-navy w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:ring-1 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                        New Password
                      </label>
                      <input
                        type="password"
                        className="focus:border-navy focus:ring-navy w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:ring-1 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="focus:border-navy focus:ring-navy w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:ring-1 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-bold text-gray-700 shadow-sm transition-all hover:bg-gray-50"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="animate-in fade-in duration-500">
            <div className="flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              <div className="flex items-center justify-between border-b border-gray-50 px-6 py-5">
                <div>
                  <h3 className="font-display text-navy text-lg font-bold">Authorized Users</h3>
                  <p className="mt-1 text-sm text-gray-500">Manage who has access to the admin portal.</p>
                </div>
                <button
                  onClick={() => setIsAdding(true)}
                  className="group bg-navy hover:bg-navy-light flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <svg
                    className="h-4 w-4 transition-transform group-hover:rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Add User
                </button>
              </div>

              <div className="custom-scrollbar h-[300px] overflow-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="text-navy border-b border-gray-50 bg-gray-50/50 text-xs font-bold tracking-widest uppercase">
                    <tr>
                      <th className="px-6 py-5">User</th>
                      <th className="px-6 py-5">Role</th>
                      <th className="px-6 py-5">Status</th>
                      <th className="px-6 py-5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {admins.map((admin) => (
                      <tr key={admin.id} className="group hover:bg-cream-dark/10 transition-colors">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="from-navy to-navy-light flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br text-sm font-bold text-white shadow-sm">
                              {admin.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-navy font-bold">{admin.name}</div>
                              <div className="text-xs text-gray-500">{admin.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className="font-medium text-gray-600">{admin.role}</span>
                        </td>
                        <td className="px-6 py-5">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase ${
                              admin.status === 'Active'
                                ? 'border border-green-100 bg-green-50 text-green-600'
                                : 'bg-gold/10 text-gold-dark border-gold/30 border'
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${admin.status === 'Active' ? 'bg-green-500' : 'bg-gold-dark'}`}
                            ></span>
                            {admin.status}
                          </span>
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex justify-end">
                            <button
                              onClick={() => handleRemoveAdmin(admin.id)}
                              disabled={admin.id === '1'}
                              className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                                admin.id === '1'
                                  ? 'cursor-not-allowed text-gray-300'
                                  : 'hover:bg-brand-red/10 hover:text-brand-red text-gray-400'
                              }`}
                              title={admin.id === '1' ? 'Cannot remove yourself' : 'Revoke Access'}
                            >
                              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                />
                              </svg>
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

      {/* Modal Popup for Adding User */}
      {isAdding && (
        <div className="bg-navy/80 animate-in fade-in fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm duration-300">
          <div className="animate-in zoom-in-95 w-full max-w-2xl rounded-[2rem] bg-white shadow-2xl duration-300">
            <div className="flex items-center justify-between border-b border-gray-100 p-6 sm:px-8">
              <h4 className="font-display text-navy text-xl font-bold">Invite New Administrator</h4>
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleAddAdmin} className="space-y-6 p-6 sm:p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-1 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                    Username
                  </label>
                  <input
                    type="text"
                    required
                    value={newAdmin.username}
                    onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
                    className="focus:border-navy focus:ring-navy w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:ring-1 focus:outline-none"
                    placeholder="e.g. johndoe"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={newAdmin.email}
                    onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                    className="focus:border-navy focus:ring-navy w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:ring-1 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={newAdmin.password}
                    onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
                    className="focus:border-navy focus:ring-navy w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:ring-1 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    required
                    value={newAdmin.confirmPassword}
                    onChange={(e) => setNewAdmin({ ...newAdmin, confirmPassword: e.target.value })}
                    className="focus:border-navy focus:ring-navy w-full rounded-xl border border-gray-200 px-4 py-3 text-sm transition-all focus:ring-1 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="rounded-xl px-6 py-3 text-sm font-bold text-gray-500 transition-colors hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-maroon hover:bg-maroon-dark rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5"
                >
                  Send Invitation
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
