import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/navigation/Navbar";

const dm_sans = DM_Sans({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "One Click Web",
    description: "Create your own website for any purposes",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={dm_sans.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
