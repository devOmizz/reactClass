// import './App.css';
// import Home from './Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import NavBar from './components/NavBar';
// import Contact from './pages/Contact';
// import Products from './pages/Products';

// import { ApiContext } from './MyContext'
// import { useEffect, useState } from 'react';
// import ProductSingle from './pages/ProductSingle';

// function App() {

//   const[data, setData] = useState()
  
//    useEffect(()=>{
//       fetch('https://fakestoreapi.com/products')
//       .then(reponse => reponse.json())
//       .then(data => {
//           setData(data)
//       })
//       .catch('Failed to fetch')       
      
//   },[])
  
//   const myData = data

//   return (
//         // <ApiContext.Provider value={myData}>
//     <BrowserRouter>
//       <NavBar/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='login' element={<Login/>}/>
//         <Route path='contact' element={<Contact/>}/>
//           <Route path='product' element={<Products/>}/>
//           <Route path='/product/:id' element={<ProductSingle myData ={myData}/>}/>
//       </Routes>
//     </BrowserRouter>
//     // </ApiContext.Provider>
//   );
// }

// export default App;


import './App.css';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import Products from './pages/Products';

import { ApiContext } from './MyContext';
import { useEffect, useState } from 'react';
import ProductSingle from './pages/ProductSingle';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => console.error('Failed to fetch', error));
  }, []);

  const myData = data

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='contact' element={<Contact />} />
        <Route path='product' element={<Products />} />
        {/* Conditionally render ProductSingle when data is available */}
        {data.length > 0 && (
          <Route path='/product/:id' element={<ProductSingle myData={myData} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
