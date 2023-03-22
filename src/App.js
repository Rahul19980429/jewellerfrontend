
import './App.css';
import LogIn from './components/LogIn';
import NavBar from './components/NavBar';
import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom";
import Home from './components/Home';
import AllCustomerPage from './components/AllCustomerPage';
import States from './context/States';
import AddJeweller from './components/AddJeweller';
import AddOrderdetail from './components/AddOrderdetail';
import SellCalculation from './components/SellCalculatiom';


function App() {
  return (
    <>
    <States>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/allcustomers' element={<AllCustomerPage/>}/>
    <Route exact path='/login' element={<LogIn/>}/>
    <Route exact path='/addnewuser' element={<AddJeweller/>}/>
    <Route exact path='/calculation' element={<SellCalculation/>}/>
    <Route exact path='/orderdetail' element={<AddOrderdetail/>}/>
    <Route path="*" element={<Navigate to="/login" />}/>
    </Routes>
    </BrowserRouter>
    </States>
    </>
    
  );
  
}

export default App;
