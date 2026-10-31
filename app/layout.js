// Root layout for the entire app
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThemeRegistry from './ThemeRegistry';

export const metadata = {
  title: 'My Next.js App',
  description: 'A Next.js app using the App Router',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
