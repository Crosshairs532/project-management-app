import BitechxProvider from "@/lib/Provider/BitechxProvider";
import "./globals.css";
import StoreProvider from "./storeProvider";
export const metadata = {
  title: "BitechX",
  description: "bitechX Job Task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`} suppressHydrationWarning={true}>
        <BitechxProvider>
          <StoreProvider>{children}</StoreProvider>
        </BitechxProvider>
      </body>
    </html>
  );
}
