import Navbar from '@/components/Navbar';
import MajorNews from '@/components/MajorNews';
import News from '@/components/News';

import elonMusk from '@/public/elonMusk.png';

const booleanArray: boolean[] = [true, false];

const genRandomBoolean = () => {
  return booleanArray[Math.floor(Math.random()*2)];
};

const newsArray = [
  {
    headline: "Elon Musk threatens exit if he doesn't get his Trillion Dollar payday.",
    summary: 'The billionaire CEO threatens to leave Tesla if Tesla board members do not vote for his wishes in the upcoming shareholders vote...',
    imgSrc: elonMusk,
    imgAlt: 'picture of Elon Musk',
    imgLeft: genRandomBoolean(),
  },

  {
    headline: "Elon Musk threatens exit if he doesn't get his Trillion Dollar payday.",
    summary: 'The billionaire CEO threatens to leave Tesla if Tesla board members do not vote for his wishes in the upcoming shareholders vote.',
    imgSrc: elonMusk,
    imgAlt: 'picture of Elon Musk',
    imgLeft: genRandomBoolean(),
  },

  {
    headline: '"To Hell with Trump!" says Nigerian President Tinubu',
    summary: 'The billionaire CEO threatens to leave Tesla if Tesla board members do not vote for his wishes in the upcoming shareholders vote.',
    imgSrc: elonMusk,
    imgAlt: 'picture of Elon Musk',
    imgLeft: genRandomBoolean(),
  },

  {
    headline: "Elon Musk threatens exit if he doesn't get his Trillion Dollar payday.",
    summary: 'The billionaire CEO threatens to leave Tesla if Tesla board members do not vote for his wishes in the upcoming shareholders vote.',
    imgSrc: elonMusk,
    imgAlt: 'picture of Elon Musk',
    imgLeft: genRandomBoolean(),
  },

  {
    headline: "Elon Musk threatens exit if he doesn't get his Trillion Dollar payday.",
    summary: 'The billionaire CEO threatens to leave Tesla if Tesla board members do not vote for his wishes in the upcoming shareholders vote.',
    imgSrc: elonMusk,
    imgAlt: 'picture of Elon Musk',
    imgLeft: genRandomBoolean(),
  },
]

export default function Home() {
  return (
    <>
      <header className='w-full'>
        <Navbar />
        <div className='mt-2 w-full h-9 bg-linear-to-r from-black to-gray-900'></div>
      </header>

      <main>
        <MajorNews/>

        {newsArray.map((news) => <News key={news.summary} headline={news.headline} summary={news.summary} imgSrc={news.imgSrc} imgAlt={news.imgAlt} imgLeft={news.imgLeft} />)}
      </main>

      <footer>Footer</footer>
    </>
  );
}
