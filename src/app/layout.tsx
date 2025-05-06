import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'BuyMore Dashboard',
  description: 'Fashion eCommerce UI built with Next.js',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
