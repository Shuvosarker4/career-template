const JobList = ({ jobData }) => {
  const { logo, category_name, availability } = jobData;
  return (
    <div className="bg-[#9a7bef0d] text-center my-6">
      <div className="flex items-start flex-col ps-6 p-7">
        <div className="p-6 flex flex-grow">
          <img src="/public/accounts.png" alt="" />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl">{category_name}</h3>
          <p>{availability}</p>
        </div>
      </div>
    </div>
  );
};

export default JobList;
