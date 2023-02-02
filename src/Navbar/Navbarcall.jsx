import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Navbar'
import Weatherapp from '../WeatherApp/Weatherapp'
import Filterdata from '../FilterData/Filterdata'
import Productshop from '../Productshop/Productshop'
import Todolist from '../Todo/Todolist'
import Context from '../Createcontext/Createcontext'
import ProductCart from '../Productshop/ProductCart'
import Singleproduct from '../Productshop/Singleproduct'
import Fakeuser from '../FakeUser/Fakeuser'
import Quizcard from '../Quiz/Quizcard'
import Home from '../CardOperation/Home'
import AddUser from '../CardOperation/AddUser'
import ShowUserData from '../CardOperation/ShowUser'
import Subnav from '../CardOperation/Subnav'
import RandomQuots from '../Randomquotes/RandomQuots'
import Firebasecard from '../FirebaseCard/Firebasecard'
import FireNav from '../FirebaseCard/FireNav'
import ShowUser from '../FirebaseCard/ShowUser'
import FirebaseContext from '../FirebaseCard/Firecontext/FirebaseContext'
import BmiCalculator from '../BMICalculator/BmiCalculator'


const Navbarcall = () => {
  return (
    <div>
    <FirebaseContext>
    <Context>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path='/' element={<Weatherapp/>}/>
      <Route exact path='/Filterdata' element={<Filterdata/>}/>
      <Route exact path='/Product' element={<Productshop/>}/>
      <Route exact path='/Product/:productId' element={<Singleproduct/>}/>
      <Route path='/Productcart' element={<ProductCart/>}/>
      <Route exact path='/Todo' element={<Todolist/>}/>
      <Route exact path='/Fakeuser' element={<Fakeuser/>}/>
      <Route exact path='/Quiz' element={<Quizcard/>}/>
      <Route exact path='/Curd' element={<Subnav/>}>

      <Route index element={<Home/>}/>
      <Route exact path='Adduser' element={<AddUser/>}/>
      <Route exact path='Showuser' element={<ShowUserData/>}/>
      </Route>
      
      <Route exact path='RandonQuote' element={<RandomQuots/>}/>
      
      <Route exact path='Firebasecart' element={<FireNav/>}>
      <Route index element={<Firebasecard/>}/>
      <Route exact path='Showuser' element={<ShowUser/>}/>
      </Route>

      <Route exact path='Bmicalculator' element={<BmiCalculator/>}/>

      </Routes>
      </BrowserRouter>
    </Context>
    </FirebaseContext>
    </div>
  )
}

export default Navbarcall
