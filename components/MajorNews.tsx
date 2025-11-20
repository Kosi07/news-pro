import Image from "next/image";
import LFCvsRMA from '@/public/LFCvsRMA.jpg'
import LFCwinRMA from '@/public/LFCwinRMA.jpg'

const MajorNews = () => {
  return (
    <section id='Major News' className='flex flex-col gap-2 pb-8'>
        <h2 className='font-extrabold text-white text-3xl sm:text-5xl lg:text-6xl'>
            LIVERPOOL SWEEPS THE FLOOR WITH REAL MADRID!
        </h2>
        <Image 
            src={LFCvsRMA}
            alt='Florian Wirtz dribbling Arder Guler.'
            className='w-full h-auto rounded-lg'
            loading='eager'
        />
        <div className=''>
            <Image 
                src={LFCwinRMA}
                alt='Hugo Ekitike celebrating with goal scorer Alexis Mac Allister'
                className='min-w-50 w-4/10 h-auto rounded-lg float-left mr-2'
            />
            <article className='sm:text-2xl lg:text-3xl'>
                <div className='mb-3 md:mb-8'>Tuesday, November 4th, the men in red host, and beat, Real Madrid at Anfield.</div>
                <span>"<span className='text-white'>We were better and deserved to win</span>"&nbsp;- says winning goal scorer, Alexis Mac Allister after Liverpool's 1-0 victory.</span>
                <div className='text-blue-400'>See more...</div>
            </article>
        </div>
    </section>
  )
}

export default MajorNews;