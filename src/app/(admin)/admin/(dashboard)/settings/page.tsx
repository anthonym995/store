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
  const [admins, setAdmins] = useState(initialAdmins);
  const [isAdding, setIsAdding] = useState(false);
  const [newAdmin, setNewAdmin] = useState({ name: '', email: '', role: 'Catalog Editor' });

  const handleAddAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newAdmin.name && newAdmin.email) {
      setAdmins([
        ...admins,
        {
          id: Date.now().toString(),
          name: newAdmin.name,
          email: newAdmin.email,
          role: newAdmin.role,
          status: 'Pending',
          lastLogin: 'Never',
        },
      ]);
      setNewAdmin({ name: '', email: '', role: 'Catalog Editor' });
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
      <div className="flex flex-col justify-between gap-4 px-2 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-navy text-3xl font-bold tracking-tight">System Settings</h2>
          <p className="mt-2 text-sm font-medium text-gray-500">
            Manage your account and administrative access for the portal.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <div className="flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="bg-navy relative h-32 w-full overflow-hidden">
            <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/10 blur-2xl"></div>
          </div>
          <div className="relative px-6 pb-6 text-center">
            <div className="from-maroon to-maroon-light mx-auto -mt-12 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br text-3xl font-bold text-white shadow-xl ring-4 ring-white">
              EV
            </div>
            <h3 className="text-navy font-display mt-4 text-xl font-bold">Admin User</h3>
            <p className="text-sm font-medium text-gray-500">admin@evbrassware.com</p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-2">
              <span className="flex h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
              <span className="text-navy text-xs font-bold tracking-widest uppercase">Super Admin</span>
            </div>
          </div>
        </div>

        {/* Access Management */}
        <div className="flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:col-span-2">
          <div className="flex items-center justify-between border-b border-gray-50 px-6 py-5">
            <h3 className="font-display text-navy text-lg font-bold">Authorized Users</h3>
            {!isAdding && (
              <button
                onClick={() => setIsAdding(true)}
                className="group bg-navy hover:bg-navy-light flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold text-white transition-all"
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
            )}
          </div>

          {isAdding ? (
            <div className="bg-gray-50/50 p-6">
              <form
                onSubmit={handleAddAdmin}
                className="space-y-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-navy font-bold">Invite New Administrator</h4>
                  <button
                    type="button"
                    onClick={() => setIsAdding(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-bold tracking-widest text-gray-500 uppercase">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newAdmin.name}
                      onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
                      className="focus:border-navy focus:ring-navy w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:ring-1 focus:outline-none"
                      placeholder="e.g. John Doe"
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
                      className="focus:border-navy focus:ring-navy w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:ring-1 focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="mb-1 block text-xs font-bold tracking-widest text-gray-500 uppercase">Role</label>
                    <select
                      value={newAdmin.role}
                      onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
                      className="focus:border-navy focus:ring-navy w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm focus:ring-1 focus:outline-none"
                    >
                      <option value="Super Admin">Super Admin (Full Access)</option>
                      <option value="Catalog Editor">Catalog Editor (Products & Categories)</option>
                      <option value="Order Manager">Order Manager (Inquiries Only)</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    className="bg-maroon hover:bg-maroon-dark rounded-xl px-6 py-2.5 text-sm font-bold text-white transition-all hover:shadow-lg"
                  >
                    Send Invitation
                  </button>
                </div>
              </form>
            </div>
          ) : null}

          <div className="custom-scrollbar overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="text-navy border-b border-gray-50 bg-gray-50/50 text-xs font-bold tracking-widest uppercase">
                <tr>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {admins.map((admin) => (
                  <tr key={admin.id} className="group hover:bg-cream-dark/10 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-navy font-bold">{admin.name}</div>
                      <div className="text-xs text-gray-500">{admin.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-medium text-gray-600">{admin.role}</span>
                    </td>
                    <td className="px-6 py-4">
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
                    <td className="px-6 py-4">
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
    </div>
  );
}
