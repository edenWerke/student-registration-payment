// // import { useState } from 'react'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// // import './App.css'
// import Register from './layout/Register'
// import Home from './layout/Home'
// import Login from './layout/Login'
// import Success from './layout/Success'
// import Cancel from './layout/Cancel'


// // function App() {
// //   return(
// //   <div>
// //     {/* <h1>hello people</h1> */}
// //     {/* <Register/> */}
// //   <BrowserRouter>
// //   <Routes>
// //     <Route path="/" element={<Home/>}/>
// //     <Route path="/success" element={<Success/>}/>
// //     <Route path="/login " element={<Login/>}/>
// //     {/* <Route path="/register" element={<Register/>}/> */}
// //     <Route path="/cancel" element={<Cancel/>}/>
// //     </ Routes>
// //   </BrowserRouter>

// //   </div>
// //   )
// // }

// // export default App
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Register from './layout/Register';
// import Home from './layout/Home';
// import Login from './layout/Login';
// import Success from './layout/Success';
// import Cancel from './layout/Cancel';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/success" element={<Success />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/cancel" element={<Cancel />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Register from './layout/Register';
// import Home from './layout/Home'; // Example of another route
// // Other imports...

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         {/* Other routes */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
// import Register from './layout/Register';

// function App() {
//   return <Register />;
// }

// export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './layout/Register';
import Login from './layout/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
