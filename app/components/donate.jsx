const Donate = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-12">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 bg-gradient-to-r from-[#1B52B9] to-[#289CDF] text-transparent bg-clip-text leading-relaxed">
            Support Dhaxal-reeb Primary & Intermediate School
          </h1>
          <p className="leading-relaxed text-base">
            Your support can make a significant difference in the lives of our
            students. By contributing, you help us provide quality education,
            improve facilities, and support underprivileged children.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-[#289CDF68] p-8 rounded">
              <h2 className="text-lg font-medium text-gray-900 mb-3">
                How You Can Help
              </h2>
              <ul className="list-disc list-inside leading-relaxed text-base">
                <li>Provide monthly financial support</li>
                <li>
                  Contribute to building and completing missing classrooms
                </li>
                <li>Provide learning materials and maintenance support</li>
                <li>Offer advice and guidance</li>
                <li>Visit the school and encourage students</li>
                <li>Sponsor awards for top-performing students</li>
              </ul>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-[#289CDF68] p-8 rounded">
              <h2 className="text-lg font-medium text-gray-900 mb-3">
                Our Main Needs
              </h2>
              <ul className="list-disc list-inside leading-relaxed text-base">
                <li>2 additional classrooms</li>
                <li>Completion of the latrine</li>
                <li>A storage room</li>
                <li>A computer room</li>
                <li>A playground</li>
                <li>A water reservoir</li>
              </ul>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-[#289CDF68] p-8 rounded">
              <h2 className="text-lg font-medium text-gray-900 mb-3">
                Why Your Support Matters
              </h2>
              <p className="leading-relaxed text-base">
                By supporting Dhaxal-reeb School, you contribute to the
                education of underprivileged children, help us expand our
                facilities, and ensure a brighter future for our students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
