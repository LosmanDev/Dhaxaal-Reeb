const About = () => {
  return (
    <>
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div
            data-aos="fade-down"
            data-aos-delay="0"
            className="text-center mb-12"
          >
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 bg-gradient-to-r from-[#1B52B9] to-[#289CDF] text-transparent bg-clip-text leading-relaxed">
              Our Mission
            </h1>
            <p className="leading-relaxed text-base">
              Located in Harfo next to the main hospital, Dhaxal-reeb Primary &
              Intermediate School is home to 210 students and 10 dedicated staff
              members. The school offers education up to the intermediate level,
              starting from Grade 1 at the age of 7.
            </p>
          </div>
          <div className="flex flex-wrap justify-center -m-4">
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              className="xl:w-1/4 md:w-1/2 p-4"
            >
              <div className="bg-[#289cdf68] p-6 rounded-lg h-full flex flex-col">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/student.jpg"
                  alt="content"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Student Categories
                </h2>
                <p className="leading-relaxed text-base">
                  The school supports three categories of students: those paying
                  tuition fees, those supported by external donors, and those
                  receiving free education. The smallest group consists of
                  fee-paying students.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="200"
              className="xl:w-1/4 md:w-1/2 p-4"
            >
              <div className="bg-[#289cdf68] p-6 rounded-lg h-full flex flex-col">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/facilities.jpg"
                  alt="content"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Facilities
                </h2>
                <p className="leading-relaxed text-base">
                  The school has 6 classrooms for 8 classes, leading to
                  overcrowding. It also has 4 toilets, an unfinished latrine,
                  and a small garden that contributes to school meals.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className="xl:w-1/4 md:w-1/2 p-4"
            >
              <div className="bg-[#289cdf68] p-6 rounded-lg h-full flex flex-col">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src="/maingoal.jpg"
                  alt="content"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                  Main Goals
                </h2>
                <p className="leading-relaxed text-base">
                  The school aims to provide high-quality education, support
                  underprivileged children, and expand into a full secondary
                  school in the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
