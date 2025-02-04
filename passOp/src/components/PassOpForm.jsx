// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { createpassOp, getpassOp } from '../redux/passwords/passOpSlice'

// function PassOpForm() {
//   const [text, setText] = useState('')
//   const [passWord, setpassWord] = useState('')
//   const dispatch = useDispatch()

//   const onSubmit = (e) => {
//     e.preventDefault()

//     dispatch(createpassOp({ text, passWord }))
//     dispatch(getpassOp())
//     setText('')
//     setpassWord('')
//   }

//   return (
//     <section className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
//       <form onSubmit={onSubmit}>
//         <div className="space-y-4">
//           <div className="form-group">
//             <label htmlFor="text" className="block text-gray-700 font-medium">Website</label>
//             <input
//               type="text"
//               name="text"
//               id="text"
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="passWord" className="block text-gray-700 font-medium">Password</label>
//             <input
//               type="text"
//               name="passWord"
//               id="passWord"
//               value={passWord}
//               onChange={(e) => setpassWord(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         <div className="mt-6">
//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
//           >
//             Add
//           </button>
//         </div>
//       </form>
//     </section>
//   )
// }

// export default PassOpForm
// import { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { createpassOp, getpassOp, updatepassOp } from '../redux/passwords/passOpSlice';

// function PassOpForm({ editing, editingPassOp }) {
//   const [text, setText] = useState('');
//   const [passWord, setpassWord] = useState('');
//   const dispatch = useDispatch();

//   // Populate the form fields with the current values if editing
//   useEffect(() => {
//     if (editing && editingPassOp) {
//       setText(editingPassOp.text);
//       setpassWord(editingPassOp.passWord);
//     }
//   }, [editing, editingPassOp]);

//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (editing && editingPassOp) {
//       // If we are in edit mode, update the existing password entry
//       dispatch(updatepassOp({ id: editingPassOp._id, updatedData: { text, passWord } }));
//     } else {
//       // If we are in create mode, create a new password entry
//       dispatch(createpassOp({ text, passWord }));
//     }

//     // Refresh the list of passwords after submitting
//     dispatch(getpassOp());

//     // Reset form after submission
//     setText('');
//     setpassWord('');
//   };

//   return (
//     <section className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
//       <form onSubmit={onSubmit}>
//         <div className="space-y-4">
//           <div className="form-group">
//             <label htmlFor="text" className="block text-gray-700 font-medium">Website</label>
//             <input
//               type="text"
//               name="text"
//               id="text"
//               value={text}
//               onChange={(e) => setText(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="passWord" className="block text-gray-700 font-medium">Password</label>
//             <input
//               type="password"
//               name="passWord"
//               id="passWord"
//               value={passWord}
//               onChange={(e) => setpassWord(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//         </div>

//         <div className="mt-6">
//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
//           >
//             {editing ? 'Save' : 'Add'}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// }

// export default PassOpForm;

import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createpassOp, getpassOp, updatepassOp } from '../redux/passwords/passOpSlice';

function PassOpForm({ editing, editingPassOp }) {
  const [text, setText] = useState(''); // Website field
  const [passWord, setPassWord] = useState(''); // Password field
  const [username, setUsername] = useState(''); // Username field
  const dispatch = useDispatch();

  // Populate the form fields with the current values if editing
  useEffect(() => {
    if (editing && editingPassOp) {
      setText(editingPassOp.text);
      setPassWord(editingPassOp.passWord);
      setUsername(editingPassOp.username || ''); // Set the username if editing
    }
  }, [editing, editingPassOp]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (editing && editingPassOp) {
      // If we are in edit mode, update the existing password entry
      dispatch(updatepassOp({ id: editingPassOp._id, updatedData: { text, passWord, username } }));
    } else {
      // If we are in create mode, create a new password entry
      dispatch(createpassOp({ text, passWord, username }));
    }

    // Refresh the list of passwords after submitting
    dispatch(getpassOp());

    // Reset form after submission
    setText('');
    setPassWord('');
    setUsername('');
  };

  return (
    <section className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={onSubmit}>
        <div className="space-y-4">
          <div className="form-group">
            <label htmlFor="text" className="block text-gray-700 font-medium">Website</label>
            <input
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="username" className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="passWord" className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="passWord"
              id="passWord"
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
          >
            {editing ? 'Save' : 'Add'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default PassOpForm;
