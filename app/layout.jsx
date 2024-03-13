import "@/styles/globals.css";
import MainNavigation from "@/components/templates/MainNavigation";
import MainFooter from "@/components/templates/MainFooter";
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
