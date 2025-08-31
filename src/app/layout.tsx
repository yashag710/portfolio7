import type { Metadata } from 'next';
import { Cabin } from 'next/font/google';
import './globals.css';
import CustomCursor from './components/ui/CustomCursor';
import { Toaster } from 'react-hot-toast';

const cabin = Cabin({
  subsets: ['latin'],
  variable: '--font-cabin',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yash Agarwal - Full Stack Developer',
  description: 'Portfolio website showcasing my work as a full stack developer and blockchain engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cabin.className}>
        <CustomCursor />
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}