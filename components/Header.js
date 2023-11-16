// next Image
import Image from "next/image";

// next link
import Link from "next/link";

// components 
import Socials from '../components/Socials'

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90x]">
    <div className="container mx-auto">
      <div className="mt-2 flex flex-col lg:flex-row justify-between items-center gap-y-7">
        {/* logo */}
        <Link href={'/'} className="animate-pulse text-3xl font-poppins drop-shadow-lg hover:drop-shadow-2xl hover:text-white" priority={true}>Kenan <span className="text-accent animate-pulse">Gain</span>.
          {/* <Image src={'/logo.svg'} width={220} height={48}/> */}
          </Link>
          <Socials />
      </div>
    </div>
  </header>;
};

export default Header;
