
import React from 'react'
import {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import car from '../../src/componets/assetes/Layer 156.svg'  
import facebook from '../../src/componets/assetes/Vector.svg'   
import linkdin from '../../src/componets/assetes/linkdin.svg'
import twitter from '../../src/componets/assetes/twitter.svg' 
import star3 from '../../src/componets/assetes/Star3.svg'
import star4 from '../../src/componets/assetes/Star4.svg'
import insta from '../../src/componets/assetes/insta.svg'  
import fresh from '../../src/componets/assetes/fresh.svg'  
import rectangle from '../../src/componets/assetes/Rectangle.svg'  
import line from '../../src/componets/assetes/Line.svg'
import line17 from '../../src/componets/assetes/Line17.svg'
import line23 from '../../src/componets/assetes/Line23.svg' 
import boy from '../../src/componets/assetes/boy.svg' 
import square from '../../src/componets/assetes/square.svg'
import Line34 from '../../src/componets/assetes/Line34.svg'
import start1 from '../../src/componets/assetes/Star1.svg'
import Layer20 from '../../src/componets/assetes/Layer120.svg' 
import year from '../../src/componets/assetes/year.svg' 
import look from '../../src/componets/assetes/look.svg' 
import rectangle29 from '../../src/componets/assetes/Rectangle29.svg' 
import boy2 from '../../src/componets/assetes/boy.png' 
import InputLabel from '@mui/material/InputLabel';
import DehazeIcon from '@mui/icons-material/Dehaze';
import NativeSelect from '@mui/material/NativeSelect';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './../../src/componets/nav-bar.css'
import NewComponent from './newComponent';
function NavBar() {
  const [age, setAge] =useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div className='mainDiv'>
<Box
      sx={{
        width: "100%",
        height:'42px',
        backgroundColor: '#1A1A1A',
      }}
    ><div className="flex justify-between p-[0.40rem] gap-x-3 we md:gap-x-0">
    <div><div className="flex gap-x-3 car"><img src={car} alt='car' className="text-[#626262]"/> <p className='test2'>
    Free Delivery | Return Policy
</p>
{/* |<Typography fontWeight={400} color={'#9b9999'} className="flex gap-x-3">Return Policy</Typography> */}
</div></div>
    
    <div className="flex gap-x-3 er">
      <p className='login'>Login</p>
<p className='qw'>Follow US</p><img src={facebook} alt='car'/><img src={linkdin} alt='car'/><img src={twitter} alt='car'/><img src={insta} alt='car'/>
</div>
  </div>
  
</Box>
<div>
  <div>
 <img className='w-full mix-blend-overlay imgbox' src={rectangle} alt='img'/> 
 <div className="flex justify-between p-[0.40rem] gap-x-3 we">
 <p className='shopkart'>ShopKart</p>
 <div className="gap-x-3 er"><p className='wish'>WISHLIST (0) BAG (0)</p></div>
  </div>
   <div className="flex justify-between we">
   <div className='box12'>
    <img className='star1' src={start1} alt='img'/>
   <div className='lineImage'> <img src={line} alt='img' className='q'/></div>
    </div>
   </div>
   <div className='w-full flex'>
   {/* <div className="topnav" id="myTopnav">
  <a href="#home" className="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" className="icon" onclick="myFunction()">
  <img src={Layer20} alt='Layer20'/>
  </a>
</div> */}
   <div className="flex justify-around w-3/5 p-[0.40rem] show">
   
    <Typography color={'#FFF'} fontSize={"18px"} fontWeight={400} sx={{paddingLeft:"50px",fontFamily:"Work Sans"}}>HOME</Typography>
   <Typography color={'#FFF'} fontSize={"18px"} sx={{fontFamily:"Work Sans"}} fontWeight={400}>ABOUT</Typography>
 
      <div className="dropdown">
    <Typography color={'#FFF'}  fontSize={"18px"} sx={{fontFamily:"Work Sans"}} fontWeight={400}>OUR PRODUCTS</Typography><img src={Line34} alt='img'/>
  <div className="dropdown-content">
  <Typography color={'#FFF'} fontSize={"14px"} fontWeight={400}>PRODUCT 1</Typography>
  <Typography color={'#FFF'} fontSize={"14px"} fontWeight={400}>PRODUCT 2</Typography>
  <Typography color={'#FFF'} fontSize={"14px"} fontWeight={400}>PRODUCT 3</Typography>
  <Typography color={'#FFF'} fontSize={"14px"} fontWeight={400}>PRODUCT 4</Typography>
  </div>
</div>
   <Typography color={'#FFF'} fontSize={"18px"} sx={{fontFamily:"Work Sans"}} fontWeight={400}>CONTACT US</Typography>
   </div>
   <div className='boybox'>
    <img src={boy} alt='img' className='backImage1'/>
    {/* <img src={boy2} alt='img' className='phonebackImage1'/> */}
    
    <img src={star3} className="backImage2" alt='img'/>
    
   
    </div>
    
    </div>
 </div>
</div>
<img src={fresh} className="fresh" alt='img'/>
<img src={year} className="year" alt='img'/>
<img src={look} className="look" alt='img'/>


<img src={square} className='sqareMore' alt='img'/>
<div className="flex starline">
<img src={line23} alt='img'/><img src={star4} alt='img'/>
<div className='boxtext' ><Typography>Oregon jacket</Typography>
<Typography>$124</Typography></div>
</div>

<img src={rectangle29} className="backImage3" alt='img'/>
<NewComponent/>
    </div>
    
    
  )
}

export default NavBar
