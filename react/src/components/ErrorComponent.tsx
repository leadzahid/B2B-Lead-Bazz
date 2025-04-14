const ErrorComponent = () => {
  return (
    <div className=" h-[90vh] flex items-center justify-center flex-col gap-4">
      <h2 className=" sm:text-4xl text-2xl font-bold text-purple-700">
        Something went wrong!
      </h2>
      <p className=" bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-md transition-all">
        Try again later or contact us.
      </p>
    </div>
  );
};

export default ErrorComponent;
