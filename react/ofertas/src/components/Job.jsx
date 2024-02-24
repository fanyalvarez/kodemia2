// eslint-disable-next-line react/prop-types, no-unused-vars
export const Job = ({ jobInfo }) => {
  // eslint-disable-next-line react/prop-types
  const { title, description, skills, salary } = jobInfo;
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {skills}
        </h5>
        <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
          {salary}
        </p>
      </div>
    </>
  );
};
