import Image from 'next/image';

const Donate = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div
            data-aos="fade-down"
            data-aos-delay="0"
            className="p-4 md:w-1/3 sm:mb-0 mb-6"
          >
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/help.jpg"
                width={256}
                height={256}
                layout="responsive"
              />
            </div>
            <h2 className="text-xl font-medium title-font mt-5 bg-gradient-to-r from-[#1B52B9] to-[#289CDF] text-transparent bg-clip-text leading-relaxed">
              How You Can Help
            </h2>

            <ul className="mt-2 list-disc list-inside leading-relaxed text-base">
              <li>Provide monthly financial support</li>
              <li>Contribute to building and completing missing classrooms</li>
              <li>Provide learning materials and maintenance support</li>
              <li>Offer advice and guidance</li>
              <li>Visit the school and encourage students</li>
              <li>Sponsor awards for top-performing students</li>
            </ul>

            <a className="text-[#289CDF] inline-flex items-center mt-3">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="300"
            className="p-4 md:w-1/3 sm:mb-0 mb-6"
          >
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover h-full w-full"
                src="/needs.jpg"
                width={256}
                height={256}
                layout="responsive"
              />
            </div>
            <h2 className="text-xl font-medium title-font mt-5 bg-gradient-to-r from-[#1B52B9] to-[#289CDF] text-transparent bg-clip-text leading-relaxed">
              Our Main Needs
            </h2>
            <ul className="list-disc list-inside leading-relaxed text-base mt-2">
              <li>2 additional classrooms</li>
              <li>Completion of the latrine</li>
              <li>A storage room</li>
              <li>A computer room</li>
              <li>A playground</li>
              <li>A water reservoir</li>
            </ul>
            <a className="text-[#289CDF] inline-flex items-center mt-3">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="600"
            className="p-4 md:w-1/3 sm:mb-0 mb-6"
          >
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                className="object-cover object-center h-full w-full"
                src="/support.jpg"
                width={256}
                height={256}
                layout="responsive"
              />
            </div>
            <h2 className="text-xl font-medium title-font mt-5 bg-gradient-to-r from-[#1B52B9] to-[#289CDF] text-transparent bg-clip-text leading-relaxed">
              Why Your Support Matters
            </h2>
            <p className="text-base leading-relaxed mt-2">
              By supporting Dhaxal-reeb School, you contribute to the education
              of underprivileged children, help us expand our facilities, and
              ensure a brighter future for our students.
            </p>
            <a className="text-[#289CDF] inline-flex items-center mt-3">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
