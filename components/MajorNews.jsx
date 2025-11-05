import Image from "next/image";
import LFCvsRMA from '@/public/LFCvsRMA.jpg'
import LFCwinRMA from '@/public/LFCwinRMA.jpg'

const MajorNews = () => {
  return (
    <section className='flex flex-col gap-2'>
        <h2 className='font-extrabold text-3xl'>
            LIVERPOOL SWEEPS THE FLOOR WITH REAL MADRID!
        </h2>
        <Image 
            src={LFCvsRMA}
            alt=''
            width={1000}
            height={1000}
            className='w-full h-auto rounded-lg'
        />
        <div className='flex flex-row gap-3'>
            <Image 
                src={LFCwinRMA}
                alt=''
                width={500}
                height={500}
                className='w-4/10 h-auto rounded-lg'
            />
            <article className='flex flex-col gap-5'>
                <span>Tuesday, November 4th, the men in red host, and beat, Real Madrid at Anfield.</span>
                <span>'We were better and deserved to win' - says winning goal scorer, Alexis Mac Allister.</span>
            </article>
        </div>
    </section>
  )
}

export default MajorNews;