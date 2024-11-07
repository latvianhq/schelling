import { Acquiring } from '@/app/(main)/_components/acquiring';
import { Chart } from '@/app/(main)/_components/chart';

export default function Home() {
  return (
    <div className='flex-1 gap-5 md:grid md:[grid-template-columns:1fr_1fr]'>
      <Acquiring />
      <Chart />
    </div>
  );
}
