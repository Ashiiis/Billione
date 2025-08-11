import Navbar from "./Navbar";
import Footer from "./Footer";
const jobs = [
  {
    title: "AI/ML Developer",
    description:
      "Work on innovative AI-driven applications, including NLP, computer vision, and predictive analytics."
  },
  {
    title: "Full Stack Developer",
    description:
      "Develop and maintain scalable web applications using React, Node.js, and cloud services."
  },
  {
    title: "Data Scientist",
    description:
      "Analyze large datasets to extract meaningful insights and build predictive models."
  },
  {
    title: "UI/UX Designer",
    description:
      "Design clean, responsive, and user-friendly interfaces for our applications."
  }
];

const CareerPage = () => {
  return (
    <div className="">
        {/* <Navbar/> */}
    <section className="min-h-screen bg-gray-50 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Careers at BillionE</h1>
        <p className="text-gray-600 mb-10">
          Join our mission to shape the future of sustainable energy and mobility.  
          Explore our open positions below and become a part of our innovative team.
        </p>

        {/* Job List */}
        <div className="space-y-6">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between border border-gray-200"
            >
              {/* Job Info */}
              <div>
                <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                <p className="text-gray-600 mt-2">{job.description}</p>
              </div>

              {/* Apply Button */}
              <a
                href={`mailto:info@billione.com?subject=Application for ${job.title}`}
                className="mt-4 md:mt-0 inline-block px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md shadow transition"
              >
                Apply
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* <Footer/> */}
    </div>
  );
};

export default CareerPage;
