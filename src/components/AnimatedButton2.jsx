import Link from 'next/link';

const AnimatedButton2 = ({text, href, className=""}) => {
  return (
    <Link href={href} className='relative flex items-center justify-center p-4 px-12 py-6 w-[300px] overflow-hidden font-medium text-[rgba(131,58,180,1)] transition duration-300 ease-out border-2 border-[rgba(131,58,180,1)] rounded-full group'>
      <span className='absolute flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[rgba(131,58,180,1)] group-hover:translate-x-0 ease'>
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
      <span className='absolute flex items-center justify-center w-full h-full text-[rgba(131,58,180,1)] transition-all duration-300 transform group-hover:translate-x-full ease'>{text}</span>
      </Link>
  );
};

export default AnimatedButton2;
