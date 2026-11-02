// Root layout for the entire app
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeRegistry from './ThemeRegistry';

export const metadata = {
  title: 'Finvibes - Money Matters',
  description: 'Finvibes Financial Services Private Limited',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>
          <Header />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
