// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deletepassOp } from '../redux/passwords/passOpSlice';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons from React Icons

// function PassOpItem({ passOp }) {
//   const dispatch = useDispatch();
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to toggle visibility

//   // Function to toggle password visibility
//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible((prevState) => !prevState);
//   };

//   return (
//     <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
//       {/* Optional: Uncomment to display creation date */}
//       <div className="text-sm text-gray-500">{new Date(passOp.createdAt).toLocaleString('en-US')}</div>

//       <div className="space-y-2">
//         <h2 className="text-lg font-semibold text-gray-800">{passOp.text}</h2>

//         <div className="flex items-center space-x-2">
//           {/* Show password or masked text */}
//           <h3 className="text-sm text-gray-600">
//             {isPasswordVisible ? passOp.passWord : '••••••••'}
//           </h3>

//           {/* View/Hide icon */}
//           <button
//             onClick={togglePasswordVisibility}
//             className="text-gray-500 hover:text-gray-700 transition duration-200"
//             aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
//           >
//             {isPasswordVisible ? (
//               <FaEyeSlash className="h-5 w-5" />
//             ) : (
//               <FaEye className="h-5 w-5" />
//             )}
//           </button>
//         </div>
//       </div>

//       <button
//         onClick={() => dispatch(deletepassOp(passOp._id))}
//         className="text-red-500 hover:text-red-700 font-semibold transition duration-200"
//       >
//         X
//       </button>
//     </div>
//   );
// }

// export default PassOpItem;
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deletepassOp } from '../redux/passwords/passOpSlice';
// import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons from React Icons

// function PassOpItem({ passOp, onEdit }) {
//   const dispatch = useDispatch();
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to toggle visibility

//   // Function to toggle password visibility
//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible((prevState) => !prevState);
//   };

//   return (
//     <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
//       {/* Optional: Uncomment to display creation date */}
//       <div className="text-sm text-gray-500">{new Date(passOp.createdAt).toLocaleString('en-US')}</div>

//       <div className="space-y-2">
//         <h2 className="text-lg font-semibold text-gray-800">{passOp.text}</h2>

//         <div className="flex items-center space-x-2">
//           {/* Show password or masked text */}
//           <h3 className="text-sm text-gray-600">
//             {isPasswordVisible ? passOp.passWord : '••••••••'}
//           </h3>

//           {/* View/Hide icon */}
//           <button
//             onClick={togglePasswordVisibility}
//             className="text-gray-500 hover:text-gray-700 transition duration-200"
//             aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
//           >
//             {isPasswordVisible ? (
//               <FaEyeSlash className="h-5 w-5" />
//             ) : (
//               <FaEye className="h-5 w-5" />
//             )}
//           </button>
//         </div>
//       </div>

//       <button
//         onClick={() => onEdit(passOp)} // Pass the current password to edit when clicked
//         className="text-blue-500 hover:text-blue-700 font-semibold transition duration-200"
//       >
//         Edit
//       </button>

//       <button
//         onClick={() => dispatch(deletepassOp(passOp._id))}
//         className="text-red-500 hover:text-red-700 font-semibold transition duration-200"
//       >
//         X
//       </button>
//     </div>
//   );
// }

// export default PassOpItem;


import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletepassOp } from '../redux/passwords/passOpSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons from React Icons

function PassOpItem({ passOp, onEdit }) {
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to toggle visibility

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
      {/* Optional: Uncomment to display creation date */}
      <div className="text-sm text-gray-500">{new Date(passOp.createdAt).toLocaleString('en-US')}</div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{passOp.text}</h2>

        {/* Display username */}
        <h3 className="text-sm text-gray-600">Username: {passOp.username}</h3>

        <div className="flex items-center space-x-2">
          {/* Show password or masked text */}
          <h3 className="text-sm text-gray-600">
            {isPasswordVisible ? passOp.passWord : '••••••••'}
          </h3>

          {/* View/Hide icon */}
          <button
            onClick={togglePasswordVisibility}
            className="text-gray-500 hover:text-gray-700 transition duration-200"
            aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
          >
            {isPasswordVisible ? (
              <FaEyeSlash className="h-5 w-5" />
            ) : (
              <FaEye className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Edit button */}
      <button
        onClick={() => onEdit(passOp)} // Pass the current password to edit when clicked
        className="text-blue-500 hover:text-blue-700 font-semibold transition duration-200"
      >
        Edit
      </button>

      {/* Delete button */}
      <button
        onClick={() => dispatch(deletepassOp(passOp._id))}
        className="text-red-500 hover:text-red-700 font-semibold transition duration-200"
      >
        X
      </button>
    </div>
  );
}

export default PassOpItem;
