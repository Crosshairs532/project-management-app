import "./globals.css";
export const metadata = {
  title: "BitechX",
  description: "bitechX Job Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
