import AdminSidebar from './AdminSidebar';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50/50 font-sans md:flex-row">
      {/* Trendy Flush Collapsible Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="custom-scrollbar flex flex-1 flex-col overflow-y-auto px-4 pt-4 sm:p-6">
        <main className="flex-1">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
