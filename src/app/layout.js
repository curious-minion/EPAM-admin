import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Адмін панель сторінки кафедри “Кібернетика та штучний інтелект”",
  description: "Модератор може переглядати, редагувати та створювати публікації",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
