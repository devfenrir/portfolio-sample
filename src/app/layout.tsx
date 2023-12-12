import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ 
    subsets: ["latin"], 
    weight: ["400", "700"] 
});

export const metadata: Metadata = {
    title: "Maxtigon's page",
    description: "Maxtigon's portfolio and infos page.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={montserrat.className}>{children}</body>
        </html>
    );
}
