// import React, { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// import PassOpForm from '../components/PassOpForm'
// import PassOpItem from '../components/PassOpItem'
// import { getpassOp, reset } from '../redux/passwords/passOpSlice'

// const Home = () => {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()

//   const { user } = useSelector((state) => state.auth)
//   const { passOps, isLoading, isError, message } = useSelector(
//     (state) => state.passOp
//   )  

//   useEffect(() => {
//     if (isError) {
//       console.log(message)
//     }

//     if (!user) {
//       navigate('/login')
//     }

//     dispatch(getpassOp())  // Ensure you use the correct action name here

//     return () => {
//       dispatch(reset())  // Reset the state when the component unmounts
//     }
//   }, [user])

//   return (
//     <>
//       <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
//         <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">
//           Welcome {user && user.name}
//         </h1>
//         <p className="text-xl text-gray-600 text-center">Dashboard</p>
//       </section>

//       <PassOpForm />

//       <section className="mt-8">
//         {passOps.length > 0 ? (
//           <div className="space-y-4">
//             {passOps.map((passOp) => (
//               <PassOpItem key={passOp._id} passOp={passOp} />
//             ))}
//           </div>
//         ) : (
//           <h3 className="text-xl text-gray-500 text-center">You have not set any passwords</h3>
//         )}
//       </section>
//     </>
//   )
// }

// export default Home

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PassOpForm from '../components/PassOpForm';
import PassOpItem from '../components/PassOpItem';
import { getpassOp, reset } from '../redux/passwords/passOpSlice';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false); // Tracks if we are in edit mode
  const [editingPassOp, setEditingPassOp] = useState(null); // Holds the password to edit

  const { user } = useSelector((state) => state.auth);
  const { passOps, isLoading, isError, message } = useSelector(
    (state) => state.passOp
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login');
    }

    dispatch(getpassOp());

    return () => {
      dispatch(reset());
    };
  }, [user]);

  // Handle editing of passwords
  const handleEdit = (passOp) => {
    setEditing(true);
    setEditingPassOp(passOp); // Set the current password to be edited
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditingPassOp(null); // Clear the editing state
  };

  return (
    <>
      <section className="bg-gray-100 p-8 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-4">
          Welcome {user && user.name}
        </h1>
        <p className="text-xl text-gray-600 text-center">Dashboard</p>
      </section>

      <PassOpForm editing={editing} editingPassOp={editingPassOp} />

      <section className="mt-8">
        {passOps.length > 0 ? (
          <div className="space-y-4">
            {passOps.map((passOp) => (
              <PassOpItem
                key={passOp._id}
                passOp={passOp}
                onEdit={handleEdit} // Pass the editing function to each PassOpItem
              />
            ))}
          </div>
        ) : (
          <h3 className="text-xl text-gray-500 text-center">You have not set any passwords</h3>
        )}
      </section>
    </>
  );
};

export default Home;
