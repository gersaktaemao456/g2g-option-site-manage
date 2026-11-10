import "./globals.css";

export const metadata = {
  title: "G2G OPTION | Official",
  description: "G2G OPTION — Official website",
  metadataBase: new URL("https://g2g-option-site-manage.vercel.app")
};

export default function RootLayout({ children }) {
  return <html lang="th"><body>{children}</body></html>;
}