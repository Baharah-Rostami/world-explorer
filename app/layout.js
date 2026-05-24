import "./globals.css";

export const metadata = {
  title: "World Explorer",
  description: "A multi-page country explorer website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-100 text-zinc-900">
        <main>{children}</main>
      </body>
    </html>
  );
}