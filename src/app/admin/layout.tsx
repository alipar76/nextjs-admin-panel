import Sidebar from "@/components/shared/sidebar";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <div className="app">
                    <Sidebar/>
                    <main>{children}</main>
                </div>
            </body>
        </html>
    );
}
