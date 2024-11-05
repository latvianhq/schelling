import { Header } from '@/components/layout/header';

export default function SecondaryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className='container flex flex-1 pb-[50px] pt-[54px] md:pb-[100px] md:pt-[134px]'>{children}</main>
    </>
  );
}
