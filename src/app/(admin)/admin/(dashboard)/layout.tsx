import AdminSidebar from './AdminSidebar';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50/50 font-sans">
      {/* Trendy Flush Collapsible Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="custom-scrollbar flex flex-1 flex-col overflow-y-auto p-4 sm:p-6 lg:p-8">
        <main className="flex-1 pb-2">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
