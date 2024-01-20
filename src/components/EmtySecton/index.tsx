import { type FC } from 'react';

interface EmptySectionProps {

}

const EmptySection: FC<EmptySectionProps> = () => {
  return (
    <section className='mx-auto w-full'>
      <div className="py-8 px-4 mx-auto max-w-screen-md text-center lg:py-16 lg:px-12">
          <span className="mx-auto mb-4 w-10 h-10 text-gray-400" >  ¯\_(ツ)_/¯  </span>
          <h2 className="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 lg:mb-6 md:text-5xl xl:text-6xl dark:text-white">Сейчас тут пусто</h2>
          <p className="font-light text-gray-500 md:text-lg xl:text-xl dark:text-gray-400">Загляни позже и на месте этого текста будет новый контент</p>
      </div>
    </section>
  )
};

export default EmptySection;