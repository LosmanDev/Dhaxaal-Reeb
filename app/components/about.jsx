const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
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
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-[#289CDF68] p-8 rounded">
              <h2 className="text-lg font-medium text-gray-900 mb-3">
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
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-[#289CDF68] p-8 rounded">
              <h2 className="text-lg font-medium text-gray-900 mb-3">
                Facilities
              </h2>
              <p className="leading-relaxed text-base">
                The school has 6 classrooms for 8 classes, leading to
                overcrowding. It also has 4 toilets, an unfinished latrine, and
                a small garden that contributes to school meals.
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-[#289cdf68] p-8 rounded">
              <h2 className="text-lg font-medium text-gray-900 mb-3">
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
  );
};

export default About;
