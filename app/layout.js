import Header from './components/Header';
import Footer from './components/Footer';
import './globals.scss';

export const metadata = {
  title: 'MyTools - Online Utility Tools',
  description: 'A collection of useful online tools like age calculator, salary calculator, and more.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex-layout">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}