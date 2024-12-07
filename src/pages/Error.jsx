const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-4">This page cannot be reached!</p>

      <a
        href="/"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline font-medium"
      >
        Visit Home Page
      </a>
    </div>
  );
};

export default Error;
