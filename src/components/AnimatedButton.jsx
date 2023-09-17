import Link from 'next/link';

const AnimatedButton = ({text, href, className=""}) => {
  return (
    <Link href={href} className='text-lg font-medium text-dark border-2 border-dark px-12 py-2 rounded-full w-[300px] hover:text-white group relative flex items-center justify-center overflow-hidden '>
      <span className='absolute left-0 h-0 w-full transition-all bg-dark opacity-100 group-hover:h-full group-hover:top-0 group-active:h-full group-active:top-0 duration-400 ease'></span>
      <span className='absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 group-active:translate-x-0 ease'>
        <svg className='w-5 h-5'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'>

          <path

            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M14 5l7 7m0 0l-7 7m7-7H3'
          />
        </svg>
      </span>
      <span className='relative '>{text}</span>
      </Link>
  );
};

export default AnimatedButton;
