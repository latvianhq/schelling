import { Acquiring } from '@/app/(main)/_components/acquiring';

export default function Home() {
  return (
    <div className='flex-1 md:grid md:[grid-template-columns:1fr_1fr]'>
      <Acquiring />
      <div>chart</div>
    </div>
  );
}
