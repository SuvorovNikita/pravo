import '@/styles/globals.scss';
import { Nunito_Sans } from 'next/font/google';

const fontNunitoSans = Nunito_Sans({
  weight: ['200', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-nunito-sans',
});

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>Правозащитник</title>
        <link rel="shortcut icon" href="" />
      </head>
      <body className={fontNunitoSans.variable}>{children}</body>
    </html>
  );
}
