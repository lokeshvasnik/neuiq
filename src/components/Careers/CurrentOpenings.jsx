import  { useState } from "react";
import { careerData } from "../../Utils/data";
import { Link } from "react-router-dom";
import { PATH } from "../../Utils/constants";

// const countries = ["India", "USA", "Canada", "UK", "Australia", "Singapore"];
// const allJobs = {
//   India: Array.from({ length: 50 }, (_, i) => ({
//     id: i + 1,
//     position: `Job Position ${i + 1}`,
//     experience: `${Math.floor(Math.random() * 10) + 1} yrs`,
//     location: "India",
//   })),
//   USA: Array.from({ length: 30 }, (_, i) => ({
//     id: i + 1,
//     position: `Job Position ${i + 1}`,
//     experience: `${Math.floor(Math.random() * 10) + 1} yrs`,
//     location: "USA",
//   })),
//   Canada: Array.from({ length: 10 }, (_, i) => ({
//     id: i + 1,
//     position: `Job Position ${i + 1}`,
//     experience: `${Math.floor(Math.random() * 10) + 1} yrs`,
//     location: "Canada",
//   })),
//   UK: Array.from({ length: 2 }, (_, i) => ({
//     id: i + 1,
//     position: `Job Position ${i + 1}`,
//     experience: `${Math.floor(Math.random() * 10) + 1} yrs`,
//     location: "UK",
//   })),
//   Australia: Array.from({ length: 6 }, (_, i) => ({
//     id: i + 1,
//     position: `Job Position ${i + 1}`,
//     experience: `${Math.floor(Math.random() * 10) + 1} yrs`,
//     location: "Australia",
//   })),
//   Singapore: Array.from({ length: 100 }, (_, i) => ({
//     id: i + 1,
//     position: `Job Position ${i + 1}`,
//     experience: `${Math.floor(Math.random() * 10) + 1} yrs`,
//     location: "Singapore",
//   })),
// };

const countries = careerData.currentOpenings.countries;
const allJobs =  careerData.currentOpenings.allJobs
const ITEMS_PER_PAGE = careerData.currentOpenings.itemsPerPage;

const Tabs = ({ selectedCountry, onSelectCountry }) => {
  return (
    <div className="flex lg:space-x-8 space-x-4 mb-4 overflow-x-auto">
      {countries.map((country) => (
        <button
          key={country}
          onClick={() => onSelectCountry(country)}
          className={`px-6 py-2 rounded-lg min-w-28 text-lg ${
            selectedCountry === country
              ? "bg-[#00CACF] text-white"
              : "bg-black text-white"
          }`}
        >
          {country}
        </button>
      ))}
    </div>
  );
};

const Pagination = ({ totalItems, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  return (
    <div className="flex justify-center">
      <div className="flex justify-start mt-4 overflow-x-auto">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`px-4 py-2 rounded mx-1 ${
              currentPage === i + 1 ? "bg-orange-500 text-white" : "bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

const CurrentOpenings = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [currentPage, setCurrentPage] = useState(1);

  const jobs = allJobs[selectedCountry] || [];
  const totalItems = jobs.length;
  const paginatedJobs = jobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );


  return (
    <section className="lg:py-20 py-8">
      <div className="max-w-full mx-auto lg:px-10 px-4">
        <div className="">
          <div className="mb-8">
            <h3 className="sm:text-4xl text-2xl  font-bold sm:mb-4 mb-3">{careerData.currentOpenings.title}</h3>
            <p className="sm:text-lg text-base">{careerData.currentOpenings.description}</p>
          </div>

          <p className="text-2xl font-bold mb-4">{careerData.currentOpenings.tabTitle}</p>
          <Tabs
            selectedCountry={selectedCountry}
            onSelectCountry={(country) => {
              setSelectedCountry(country);
              setCurrentPage(1);
            }}
          />

          {
            paginatedJobs.length > 0 &&
              <p className="mb-4 text-lg">
                Showing <strong>{paginatedJobs.length}</strong> of{" "}
                <strong>{totalItems}</strong> current openings in{" "}
                <strong>{selectedCountry}</strong>
              </p>
          }
          <div className="overflow-x-auto">
            {
              paginatedJobs.length >= 1 ?
                <table className="w-full text-left border-collapse text-base">
                  <thead>
                    <tr className="border-b">
                      <th className="py-4 px-2 max-w-5 font-bold">#</th>
                      <th className="py-4 px-2 max-w-[300px] w-[300px] font-bold">Position</th>
                      <th className="py-4 px-2 min-w-[110px] font-bold">Location</th>
                      <th className="py-4 px-2 min-w-[110px] font-bold">Team</th>
                      <th className="py-4 px-2 min-w-[110px] font-bold">Experience Level</th>
                       <th className="py-4 px-2 min-w-[110px] font-bold">Employment Type</th>
                      <th className="py-4 px-2 min-w-[110px]"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedJobs.map((job) => (
                      <tr key={job.id} className="border-b">
                        <td className="py-4 px-2 max-w-5">{job.id}</td>
                        <td className="py-4 px-2 max-w-[200px] w-[200px] whitespace-wrap text-ellipsis overflow-hidden">{job.position}</td>
                        <td className="py-4 px-2">{job.location}</td>
                        <td className="py-4 px-2">{job.team}</td>
                         <td className="py-4 px-2">
                          {/* Exp.{" "} */}
                          <span className="bg-gray-200 px-2 py-1 rounded">
                            {job.experience}
                          </span>
                        </td>
                        <td className="py-4 px-2">{job.employment_type}</td>
                       
                        
                        <td className="py-4 px-2 text-[#00CACF] ">
                          <Link className="font-bold" to={PATH.jobApplication} onClick={()=>localStorage.setItem('job',JSON.stringify(job))}>Apply now</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              :
              <p className="text-xl font-bold text-gray-700 py-4">{careerData.currentOpenings.noDataText}</p>
            }
          </div>

          {Math.ceil(totalItems / ITEMS_PER_PAGE) > 1 && (
            <Pagination
              totalItems={totalItems}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default CurrentOpenings;
