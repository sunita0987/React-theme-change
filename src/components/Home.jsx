// import React from "react";

// const Home = ({ setIsAuthenticated }) => {
//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-green-100">
//       <h1 className="text-3xl font-bold mb-4">Welcome to Home Page 🎉</h1>
//       <button
//         onClick={handleLogout}
//         className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/"); // ✅ 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Home Page 🎉</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;

