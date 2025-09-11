import Image from 'next/image';

const Navbar = () => {
  return (
    <header
      data-aos="fade-right"
      data-aos-delay="500"
      className="text-gray-600 body-font"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            src="/dr-bg.png"
            width={100}
            height={100}
            alt="Dhaxaal-reeb logo"
          ></Image>
          <span className="ml-3 text-xl font-medium bg-gradient-to-r from-[#1B52B9] to-[#289CDF] text-transparent bg-clip-text">
            Dhaxal-Reeb
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 text-[#1B52B9] hover:text-gray-900 font-bold">
            Home
          </a>
          <a className="mr-5 text-[#1B52B9] hover:text-gray-900 font-bold">
            About
          </a>
          <a className="mr-5 text-[#1B52B9] hover:text-gray-900 font-bold">
            Contact
          </a>
          <a className="mr-5 text-[#1B52B9] hover:text-gray-900 font-bold">
            Donate
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
