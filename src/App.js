import logo from './logo.svg';
import './App.css';
import Homeee from './components/Homeee/Homeee';
import Abouttt from './components/About/Abouttt';
import Contactt from './components/Contact/Contactt';
import Protfolio from './components/Protfolio/Protfolio';
import Layout from './components/LayOut/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// #1abc9c
// #2c3e50


let routes = createBrowserRouter(
[  {
    path: "/", element:<Layout/> , children:[
      {index : true, element : <Homeee/>},
      {path : "Home" , element : <Homeee/>},
      {path : "Aboutt" , element : <Abouttt/>},
      {path : "Portfolio" , element : <Protfolio />},
      {path : "Contactt" , element : <Contactt/>}
    ]
  }]
)

function App() {
  return (
<RouterProvider  router={routes}/>
  );
}

export default App;
