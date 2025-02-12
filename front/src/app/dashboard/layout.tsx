import Link from "next/link";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <section className="p-6">
    <header className="flex space-x-4 mb-6">
        <Link href="/dashboard">
          <button className="btn-primary px-4 py-2 rounded-lg">Dashboard</button>
        </Link>
        <Link href="/dashboard/orders">
          <button className="btn-primary px-4 py-2 rounded-lg">Orders</button>
        </Link>
    </header>
    <main>{children}</main>
   </section>
  );
}