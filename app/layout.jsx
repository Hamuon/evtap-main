import "@/styles/globals.css";
import MainNavigation from "@/components/templates/MainNavigation";
import MainFooter from "@/components/templates/MainFooter";
export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className="">
        <MainNavigation />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
