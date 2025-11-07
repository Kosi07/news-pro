import Image from "next/image"

const News = ({ headline, summary, imgSrc, imgAlt, imgLeft }) => {
  return (
    <section className='px-2 py-6 border-t'>
        <h2 className='text-white text-2xl font-serif mb-2'>{headline}</h2>
        <div className='flow-root'>
            <Image 
                src={imgSrc}
                alt={imgAlt}
                className={`min-w-50 w-4/10 h-auto rounded-lg object-contain ${imgLeft? 'float-left mr-2' : 'float-right ml-2'}`}
            />
            <article>{summary}</article>
        </div>
    </section>
  )
}

export default News