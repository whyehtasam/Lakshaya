import { Calendar, Clock, FileText, BookOpen } from "lucide-react";
import physicsSyllabus from "../../assets/pdfs/NEET XII Target2 syllabus.pdf";
import comingsoon from "../../assets/coming-soon.avif";
import { Link } from "react-router-dom";

const testSeries = [
  {
    name: "Advanced Physics Mastery",
    image: comingsoon,
    startDate: "2024-03-01",
    endDate: "2024-05-31",
    subject: "Physics",
    description:
      "Master advanced physics concepts with our comprehensive test series.",
    syllabusLink: physicsSyllabus,
  },
  {
    name: "Organic Chemistry Challenge",
    image: comingsoon,
    startDate: "2024-04-01",
    endDate: "2024-06-30",
    subject: "Chemistry",
    description:
      "Conquer organic chemistry with our intensive test series program.",
    syllabusLink: "/chemistry-syllabus.pdf",
  },
  {
    name: "Advanced Mathematics Series",
    image: comingsoon,
    startDate: "2024-04-01",
    endDate: "2024-06-30",
    subject: "Maths",
    description:
      "Excel in advanced mathematics concepts through our comprehensive test series.",
    syllabusLink: "/maths-syllabus.pdf",
  },
  // Add more test series as needed
];

const subjectColors = {
  Physics: "bg-blue-100 text-blue-800",
  Chemistry: "bg-green-100 text-green-800",
  Maths: "bg-purple-100 text-purple-800",
  English: "bg-yellow-100 text-yellow-800",
};

const TestSeries = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-10 sm:pt-20">
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 sm:mb-20">
        Test Series Programs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6">
        {testSeries.map((series, index) => (
          <div
            key={index}
            className="overflow-hidden hover:scale-105 hover:-translate-y-2 duration-300 shadow-lg transition-all bg-white rounded-lg"
          >
            <div className="p-0">
              <img
                src={series.image || "/placeholder.svg"}
                alt={series.name}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{series.name}</h3>
                <span
                  className={`${
                    subjectColors[series.subject]
                  } font-medium px-2 py-1 rounded-full text-xs`}
                >
                  {series.subject}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{series.description}</p>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                <span>
                  Start: {new Date(series.startDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="w-4 h-4 mr-2" />
                <span>
                  End: {new Date(series.endDate).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="p-4 flex justify-between items-center">
              <a
                href={series.syllabusLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                  <FileText className="w-4 h-4 mr-2" />
                  View Syllabus
                </button>
              </a>
              <Link
                to="/courses"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <button className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestSeries;
