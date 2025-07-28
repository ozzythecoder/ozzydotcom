import type { Metadata } from "next";
import "./globals.css";
import { Anonymous_Pro, Kode_Mono, Overpass_Mono } from "next/font/google";
import { ReactNode } from "react";
import { Header } from "@/components/header";

const anonymousPro = Anonymous_Pro({
    weight: ["400", "700"],
    variable: "--font-anonymous-pro",
    subsets: ["latin", "latin-ext"],
});

const kodeMono = Kode_Mono({
    weight: ["400", "500", "600", "700"],
    variable: "--font-kode-mono",
    subsets: ["latin", "latin-ext"],
});

const overPassMono = Overpass_Mono({
    variable: "--font-overpass-mono",
    display: "swap",
    subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
    title: "ozzy the painter",
    description: "artist website and tip of the centrifuge",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <body
                className={`relative min-h-dvh ${anonymousPro.variable} ${kodeMono.variable} ${overPassMono.variable} antialiased`}>
                <Header />
                <main>
                    {children}
                </main>
                <div
                    className={'-z-10 absolute bottom-0 left-0 h-48 w-screen bg-gradient-to-t from-background-light to-transparent'} />
            </body>
        </html>
    );
}
