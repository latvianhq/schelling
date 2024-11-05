import { Header } from '@/components/layout/header';

export default function SecondaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className='container'>{children}</main>
    </>
  );
}
