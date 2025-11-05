import Image from "next/image";
import Navbar from '@/components/Navbar';
import MajorNews from '@/components/MajorNews'

export default function Home() {
  return (
    <>
      <header className='w-full'>
        <Navbar />
        <div className='mt-2 w-full h-9 border-t border-b border-white'></div>
      </header>

      <main>
        <MajorNews/>
      </main>

      <footer>Footer</footer>
    </>
  );
}
