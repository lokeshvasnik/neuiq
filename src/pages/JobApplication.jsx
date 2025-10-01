import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "../Utils/icons";
import { Link } from "react-router-dom";
import { FaLeftLong } from "react-icons/fa6";
import emailjs from "emailjs-com";

export default function JobApplication() {
  const navigate = useNavigate();
  const selectedJob = JSON.parse(localStorage.getItem("job")) || null

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(""); 

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    employer: "",
    designation: "",
    experience: "",
    noticePeriod: "",
    currentCTC: "",
    expectedCTC: "",
    resume: null,
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    }));

    // Real-time validation for critical fields
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    // if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.location.trim()) newErrors.location = "Location is required.";
    if (!formData.linkedin.trim())
      newErrors.linkedin = "LinkedIn Profile URL is required.";
    // if (!formData.employer.trim())
    //   newErrors.employer = "Current Employer is required.";
    // if (!formData.designation.trim())
    //   newErrors.designation = "Current Designation is required.";
    // if (!formData.experience)
    //   newErrors.experience = "Total Experience is required.";
    if (!formData.noticePeriod)
      newErrors.noticePeriod = "Notice Period is required.";
    // if (!formData.currentCTC.trim())
    //   newErrors.currentCTC = "Current CTC is required.";
    // if (!formData.expectedCTC.trim())
    //   newErrors.expectedCTC = "Expected CTC is required.";
    if (!formData.resume) {
      newErrors.resume = "Resume is required.";
    } else {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(formData.resume.type)) {
        newErrors.resume = "Only PDF, DOC, or DOCX files are allowed.";
      }
    }
    if (!formData.consent) {
      newErrors.consent = "You must agree before submitting.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileChange = (event) => {
    // setFormData((prev) => ({ ...prev, resume: event.target.files[0] }));
    const file = event.target.files[0];
    if (file) {
      const allowedFormats = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedFormats.includes(file.type)) {
        setErrors((prev) => ({
          ...prev,
          resume: "Only PDF and DOCX files are allowed.",
        }));
        return;
      }
      setErrors((prev) => ({ ...prev, resume: null })); // Clear error if valid
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log("Form submitted:", formData);
  //     alert("Application submitted successfully!");
  //     // Reset form
  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       location: "",
  //       linkedin: "",
  //       employer: "",
  //       designation: "",
  //       experience: "",
  //       noticePeriod: "",
  //       currentCTC: "",
  //       expectedCTC: "",
  //       resume: null,
  //       consent: false,
  //     });
  //     setErrors({});
  //   }
  // };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Build template params
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        linkedin: formData.linkedin,
        employer: formData.employer,
        designation: formData.designation,
        experience: formData.experience,
        noticePeriod: formData.noticePeriod,
        currentCTC: formData.currentCTC,
        expectedCTC: formData.expectedCTC,
        jobTitle: selectedJob?.position || "",
      };

      emailjs
        .send(
          "service_neuiqai",
          "template_hfwg4le",   
          templateParams,
          "SxH5fQEqshf4jpe-m"
        )
        .then(
          (result) => {
            console.log("Email sent:", result.text);
            setStatus("✅ Application sent successfully!");
            // Reset form
            setFormData({
              name: "",
              email: "",
              phone: "",
              location: "",
              linkedin: "",
              employer: "",
              designation: "",
              experience: "",
              noticePeriod: "",
              currentCTC: "",
              expectedCTC: "",
              resume: null,
              consent: false,
            });
            setErrors({});
            setTimeout(() => setStatus(""), 3000);
          },
          (error) => {
            console.error("Email error:", error.text);
            setStatus("❌ Failed to send. Try again.");
            setTimeout(() => setStatus(""), 3000);
          }
        );
    }
  };

  return (
    <section id="job-application">
      <div className="lg:px-10">
        <div className="mt-5">
          <Link to="/"><img className="w-20 h-20" src={icons.short_logo} alt="neuIQ" /></Link>
        </div>
      </div>
      <div className="lg:py-5 py-5 lg:px-10 px-2 max-w-full mx-auto">
        <div className="flex flex-col md:flex-row md:gap-0 gap-4 h-[1400px]">
          {/* Selected Job Details */}
          <div className="w-full lg:w-3/5 md:lg:w-1/2 h-full overflow-y-auto md:pr-2 my-scrollable-div"
            data-lenis-prevent>
            <Link onClick={() => navigate(-1)} className="flex space-x-2 items-center justify-start mb-4">
              <FaLeftLong color="#00cacf" /> <p className="">Back</p>
            </Link>
            <h1 className="lg:text-2xl text-xl font-bold text-gray-800 mb-4">
              {selectedJob.position}
            </h1>
            <div className="mb-4 lg:text-lg text-base">
              {selectedJob?.position && (
                <p className="mb-2">
                  <strong>Job Title:</strong> {selectedJob.position}
                </p>
              )}
              {selectedJob?.location && (
                <p className="mb-2">
                  <strong>Location:</strong> {selectedJob.location}
                </p>
              )}
              {selectedJob?.team && (
                <p className="mb-2">
                  <strong>Department:</strong> {selectedJob.team}
                </p>
              )}
              {selectedJob?.reports_to && (
                <p className="mb-2">
                  <strong>Reports To:</strong> {selectedJob.reports_to}
                </p>
              )}
              {selectedJob?.roleOverview && (
                <p className="mb-5">
                  <strong>Role Overview:</strong> {selectedJob.roleOverview}
                </p>
              )}
              {selectedJob?.key_responsibilities && (
                <div className="mb-5">
                  <strong>Key Responsibilities:</strong>
                  <ul className="list-disc ps-5">
                    {selectedJob.key_responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedJob?.keySkills && (
                <div className="mb-5">
                  <h3 className="font-bold">Key Skills:</h3>
                  <ul className="list-disc ps-5">
                    {selectedJob.keySkills.map((skill, index) => (
                      <li key={index}>
                        {
                          skill.category &&  <strong>{skill.category}:</strong>
                        }
                        <ul className={`${skill.category && 'list-style-circle'} ps-5 mt-1`}>
                          {skill.items.map((item, subIndex) => (
                            <li key={subIndex}>{item}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedJob?.whyNeuIQ && (
                <div className="mb-5">
                  <h3 className="font-bold">Why NeuIQ:</h3>
                  <ul className="list-disc ps-5">
                    {selectedJob.whyNeuIQ.map((skill, index) => (
                      <li key={index}>
                        <strong>{skill.category}:</strong>
                        <ul className="list-style-circle ps-5 mt-1">
                          {skill.items.map((item, subIndex) => (
                            <li key={subIndex}>{item}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedJob?.statement && (
                <p className="mb-2">
                  <strong>Equal Opportunity Employer Statement:</strong> {selectedJob.statement}
                </p>
              )}
            </div>
          </div>

          {/* Application Form */}
          <div className="w-full lg:w-2/5 md:lg:w-1/2 bg-white px-8">
            <div className="w-full border border-[#1c2e5b] p-6 rounded-lg">
              <h2 className="text-lg font-semibold border-b pb-2">APPLY NOW</h2>
              <form onSubmit={handleSubmitForm} className="space-y-2">
                {/* Full Name */}
                <div>
                  <label className="font-medium text-base mb-1 mt-2 inline-block">Full Name <span className="text-red-500 ms-1">*</span></label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    className="w-full border p-2 rounded text-sm"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="font-medium text-base mb-1 mt-2 inline-block">Email <span className="text-red-500 ms-1">*</span></label>
                  <input
                    type="email"
                    name="email"
                    className="w-full border p-2 rounded text-sm"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="font-medium text-base mb-1 mt-2 inline-block">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full border p-2 rounded text-sm"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">{errors.phone}</p>
                  )}
                </div>

                {/* Current Location */}
                <div>
                  <label className="font-medium text-base mb-1 mt-2 inline-block">Current Location <span className="text-red-500 ms-1">*</span></label>
                  <input
                    type="text"
                    name="location"
                    className="w-full border p-2 rounded text-sm"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm">{errors.location}</p>
                  )}
                </div>

                {/* LinkedIn */}
                <div>
                  <label className="font-medium text-base mb-1 mt-2 inline-block">LinkedIn Profile <span className="text-red-500 ms-1">*</span></label>
                  <input
                    type="url"
                    name="linkedin"
                    className="w-full border p-2 rounded text-sm"
                    placeholder="LinkedIn Profile URL"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                  />
                  {errors.linkedin && (
                    <p className="text-red-500 text-sm">{errors.linkedin}</p>
                  )}
                </div>

                {/* Employer */}
                <div>
                  <label className="font-medium text-base mb-1 mt-2 inline-block">Current Employer</label>
                  <input
                    type="text"
                    name="employer"
                    className="w-full border p-2 rounded text-sm"
                    placeholder="Current Employer"
                    value={formData.employer}
                    onChange={handleInputChange}
                  />
                  {errors.employer && (
                    <p className="text-red-500 text-sm">{errors.employer}</p>
                  )}
                </div>

                {/* Designation */}
                <div>
                  <label className="font-medium text-base mb-1 mt-2 inline-block">Current Designation</label>
                  <input
                    type="text"
                    name="designation"
                    className="w-full border p-2 rounded text-sm"
                    placeholder="Current Designation"
                    value={formData.designation}
                    onChange={handleInputChange}
                  />
                  {errors.designation && (
                    <p className="text-red-500 text-sm">{errors.designation}</p>
                  )}
                </div>

                {/* Experience */}
                <div>
                  <label className="font-medium text-base mb-1 mt-2 inline-block">Total Experience</label>
                  <select
                    name="experience"
                    className="w-full border p-2 rounded text-sm"
                    value={formData.experience}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Experience</option>
                    <option value="0-1">0-1 Years</option>
                    <option value="1-3">1-3 Years</option>
                    <option value="3-5">3-5 Years</option>
                    <option value="5-10">5-10 Years</option>
                    <option value="10+">10+ Years</option>
                  </select>
                  {errors.experience && (
                    <p className="text-red-500 text-sm">{errors.experience}</p>
                  )}
                </div>

                {/* Notice Period */}
                <div>
                  <label className="font-medium text-base mb-1 mt-2 inline-block">Notice Period <span className="text-red-500 ms-1">*</span></label>
                  <select
                    name="noticePeriod"
                    className="w-full border p-2 rounded text-sm"
                    value={formData.noticePeriod}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Notice Period</option>
                    <option value="Immediate">Immediate</option>
                    <option value="30d">30 days</option>
                    <option value="60d">60 days</option>
                    <option value="90d">90 days</option>
                  </select>
                  {errors.noticePeriod && (
                    <p className="text-red-500 text-sm">{errors.noticePeriod}</p>
                  )}
                </div>

                {/* Current CTC */}
                <div>
                  <label className="font-medium text-base mb-1 mt-2 inline-block">Current CTC</label>
                  <input
                    type="text"
                    name="currentCTC"
                    className="w-full border p-2 rounded text-sm"
                    placeholder="Current CTC"
                    value={formData.currentCTC}
                    onChange={handleInputChange}
                  />
                  {errors.currentCTC && (
                    <p className="text-red-500 text-sm">{errors.currentCTC}</p>
                  )}
                </div>

                {/* Expected CTC */}
                <div>
                  <label className="font-medium text-base mb-1 mt-2 inline-block">Expected CTC</label>
                  <input
                    type="text"
                    name="expectedCTC"
                    className="w-full border p-2 rounded text-sm"
                    placeholder="Expected CTC"
                    value={formData.expectedCTC}
                    onChange={handleInputChange}
                  />
                  {errors.expectedCTC && (
                    <p className="text-red-500 text-sm">{errors.expectedCTC}</p>
                  )}
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="font-medium text-base mb-1 mt-2 inline-block">Upload Resume <span className="text-red-500 ms-1">*</span></label>
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="w-full border p-2 rounded"
                    onChange={handleInputChange}
                  />
                  {errors.resume && (
                    <p className="text-red-500 text-sm">{errors.resume}</p>
                  )}
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                    />
                    <span className="text-sm">
                      I consent to NeuIQ storing my personal information for
                      recruitment purposes.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-red-500 text-sm">{errors.consent}</p>
                  )}
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#162247] text-white p-2 mt-4 rounded block"
                  >
                    Submit Application
                  </button>
                </div>
              </form>

              {/* Show Status */}
              {status && (
                <p className="mt-4 text-sm font-medium">
                  {status}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
