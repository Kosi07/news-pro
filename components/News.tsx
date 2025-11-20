import Image, { StaticImageData } from "next/image"

const News = ({ headline, summary, imgSrc, imgAlt, imgLeft } 
  :
  {headline: String,
    summary: String, 
    imgSrc:StaticImageData, 
    imgAlt: string, 
    imgLeft: Boolean }
) => {
  return (
    <section className='px-2 py-6 border-t'>
        <h2 className='text-white text-2xl sm:text-3xl font-serif mb-2'>{headline}</h2>
        <div className='flow-root'>
            <Image 
                src={imgSrc}
                alt={imgAlt}
                className={`min-w-50 w-4/10 h-auto rounded-lg ${imgLeft? 'float-left mr-2' : 'float-right ml-2'}`}
            />
            <article className='sm:text-xl lg:text-2xl'>
              {summary}
            </article>
        </div>
    </section>
  )
}

export default News;