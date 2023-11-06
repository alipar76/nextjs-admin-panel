import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
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
                    <Sidebar />
                    <main className="main">
                        <Header />
                        {children}
                        <Footer />
                    </main>
                </div>
            </body>
        </html>
    );
}
