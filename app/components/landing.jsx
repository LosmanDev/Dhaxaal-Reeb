import Image from 'next/image';

const Landing = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1
            data-aos="fade-down"
            data-aos-delay="0"
            className="title-font sm:text-4xl text-3xl mb-4 font-bold bg-gradient-to-r from-[#1B52B9] to-[#289CDF] text-transparent bg-clip-text leading-relaxed"
          >
            Dhaxal-reeb Primary & Intermediate School
          </h1>
          <p
            data-aos="fade-down"
            data-aos-delay="100"
            className="mb-8 leading-relaxed font-medium "
          >
            Bogga rasmiga ah ee dugsiga H/Dhexe ee Dhaxalreeb Xarfo.
          </p>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="200"
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
        >
          <Image
            className="object-cover object-center rounded"
            alt="Dhaxaal-reeb students"
            src="/kids.jpg"
            width={720}
            height={600}
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Landing;
