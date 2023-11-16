import { useLoaderData } from "react-router-dom";
import JobList from "../JobList/JobList";
const JobCate = () => {
  const jobDatas = useLoaderData();
  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="text-4xl">Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {jobDatas.map((jobData, id) => (
          <JobList key={id} jobData={jobData}></JobList>
        ))}
      </div>
    </div>
  );
};

export default JobCate;
