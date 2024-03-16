import "@/styles/globals.css";
import MainNavigation from "@/components/organisms/navs/MainNavigation";
import MainFooter from "@/components/organisms/footers/MainFooter";
export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body
        className=""
        style={{
          backgroundImage: "url(/media/mainbg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <MainNavigation />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
