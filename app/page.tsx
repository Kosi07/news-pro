import MajorNews from '@/components/MajorNews';
import News from '@/components/News';

import elonMusk from '@/public/elonMusk.png';
import Header from '@/components/Header';

const booleanArray: boolean[] = [true, false];

const genRandomBoolean = () => {
  return booleanArray[Math.floor(Math.random()*2)];
};

const newsArray = [
  {
    id: 1,
    headline: "Elon Musk threatens exit if he doesn't get his Trillion Dollar payday.",
    summary: 'The billionaire CEO threatens to leave Tesla if Tesla board members do not vote for his wishes in the upcoming shareholders vote...',
    imgSrc: elonMusk,
    imgAlt: 'picture of Elon Musk',
    imgLeft: genRandomBoolean(),
  },

  {
    id: 2,
    headline: "Elon Musk threatens exit if he doesn't get his Trillion Dollar payday.",
    summary: 'The billionaire CEO threatens to leave Tesla if Tesla board members do not vote for his wishes in the upcoming shareholders vote.',
    imgSrc: elonMusk,
    imgAlt: 'picture of Elon Musk',
    imgLeft: genRandomBoolean(),
  },

  {
    id: 3,
    headline: '"To Hell with Trump!" says Nigerian President Tinubu',
    summary: 'The billionaire CEO threatens to leave Tesla if Tesla board members do not vote for his wishes in the upcoming shareholders vote.',
    imgSrc: elonMusk,
    imgAlt: 'picture of Elon Musk',
    imgLeft: genRandomBoolean(),
  },

  {
    id: 4,
    headline: "Elon Musk threatens exit if he doesn't get his Trillion Dollar payday.",
    summary: 'The billionaire CEO threatens to leave Tesla if Tesla board members do not vote for his wishes in the upcoming shareholders vote.',
    imgSrc: elonMusk,
    imgAlt: 'picture of Elon Musk',
    imgLeft: genRandomBoolean(),
  },

  {
    id: 5,
    headline: "Elon Musk threatens exit if he doesn't get his Trillion Dollar payday.",
    summary: 'The billionaire CEO threatens to leave Tesla if Tesla board members do not vote for his wishes in the upcoming shareholders vote.',
    imgSrc: elonMusk,
    imgAlt: 'picture of Elon Musk',
    imgLeft: genRandomBoolean(),
  },
]

export default function Home() {
  return (
    <div className='max-w-[1000px] flex flex-col gap-8'>
      <Header />

      <main>
        <MajorNews/>

        {newsArray.map((news) => <News key={news.id} headline={news.headline} summary={news.summary} imgSrc={news.imgSrc} imgAlt={news.imgAlt} imgLeft={news.imgLeft} />)}
      </main>

      <footer className='bg-gray-900 p-2 rounded-sm'>
        &copy; News Pro {new Date().getFullYear()}
      </footer>
    </div>
  );
}
