import React,{useState,useEffect} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import axios from 'axios'

const keys='c8c95b4e45c3014b63e8ea4b6ecbfbf5'

const Weatherapp = () => {
  const navigate=useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);}, []); 

  const [Query,setQuery]=useState({cityname:""})
  const [myData, setMyData] = useState({});
  const [Weather, setWeather] = useState({});

  const handelChanged=(e)=>{
      const {name,value}=e.target;
      setQuery((prevdata)=>{
        return {...prevdata,[name]:value}      
      })
  }

  const formSubmit=(e)=>{
    e.preventDefault()
    if (Query.cityname.length>3){
    getMyPostData()
    console.log(Query.cityname)
    }
    else{
      console.log('error')
    }
  }
 
  const getMyPostData = async () => {
    if (Query.cityname.length>2){
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${Query.cityname}&appid=${keys}&units=metric`);
      setMyData(res.data.main);
      setWeather(res.data.weather[0]);
      console.log(res);
  }
  };

  return (
    <div>

<div>
    <nav className="h-[70px] bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900 flex  items-center mx-auto lg:flex-row sm:flex-col">
        <div className="container flex w-auto lg:text-left sm:text-center">
            <NavLink  className="items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">WeatherApp</span>
            </NavLink>
        </div>
            <div className='search'>
              <form onSubmit={formSubmit}>
            <div className="input-box">
              <i className="fa-solid fa-magnifying-glass "></i>
            <input type="text" name='cityname' placeholder="Please Enter City Name..."  onChange={handelChanged}/>
            </div>
              </form>
           </div>
      </nav>
</div>


<div className='Weather_body'>
{ Query.cityname.length>2?
<div className='Weather_text_box'>
       <h1 className='Weather_h1'>City Name: {Query.cityname}</h1>
    </div> : '' }

<div className='Weather_det'>

    <div className="Weather_det_div"><h1  className='Weather_h1'>Fells Like : {myData.feels_like} °C</h1></div>
    <div className="Weather_det_div"><h1  className='Weather_h1'>Humidity :{myData.humidity}%</h1></div>
    <div className="Weather_det_div"><h1  className='Weather_h1'>Pressure : {myData.pressure}</h1></div>
    <div className="Weather_det_div"><h1  className='Weather_h1'>Weather : {Weather.main}</h1></div>
    <div className="Weather_det_div"><h1  className='Weather_h1'>Max Temp : {myData.temp_max}°C</h1></div>
    <div className="Weather_det_div"><h1  className='Weather_h1'>Min Temp : {myData.temp} °C</h1></div>

</div>

<div className='Weather_image'>  
<div className='Weather_text2_box'>
    <h1  className='Weather_h1s'>Temp:{myData.temp}°C </h1>
    </div>
    <div className='Weather_image_box'>
        <img src="./img/sunny_day.svg" alt="" />
    </div>
</div>
<button className='w-[100px] h-[30px] bg-green-400'   onClick={()=>navigate("/Filterdata")}>Go Next</button>

</div>

    </div>
  )
}

export default Weatherapp