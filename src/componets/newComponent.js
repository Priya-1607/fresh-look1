import { Box, Typography} from '@mui/material'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageList from '@mui/material/ImageList';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import './../../src/componets/nav-bar.css'
import Group from '../../src/componets/assetes/Group17.svg'
import Arrow2 from '../../src/componets/assetes/Arrow2.svg'
import Arrow1 from '../../src/componets/assetes/Arrow1.svg'
import CircularProgress from '@mui/material/CircularProgress';
function NewComponent() {
    const [dataValue,setData]= useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
        axios.get('https://fakestoreapi.com/products')
          .then(response => {
            setData(response.data);
            setLoading(false);
            console.log(response.data)
          })
          
          .catch(error => {
            console.error(error);
          });
      }, []);
      if (loading) {
        return (
          <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
        )
      }
      
  return (
    <div className='new'>
     <div className='flex'>  <h2 className='newProduct'>New products</h2>
     <div className='arrow flex'>
     <LazyLoadImage 
     className="backArrow" src={Arrow2} alt='img'  
      />
      {/* <img className="backArrow" src={Arrow2} alt='img'/> */}
      <LazyLoadImage 
    src={Arrow1} className='p-10' alt='img' 
      />
      {/* <img src={Arrow1} className='p-10' alt='img'/> */}
      </div></div>
      <LazyLoadImage 
    src={Group} alt='img'
      />
    {/* <img src={Group} alt='img'/>  */}
      <div className='flex'>
      <div className='grid acc pt-8'> <div className='justify-start newtext'><Typography fontSize={"18px"} fontWeight={400}>Apparel</Typography>
      <Typography className='pt-5'  fontSize={"26px"} fontWeight={600}>Accessories</Typography>
      <Typography className='pt-5' fontSize={"18px"} fontWeight={400}>Best sellers</Typography>
      <Typography className='pt-5' fontSize={"18px"} fontWeight={400}>50% off</Typography></div> 
      </div>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >  
      {dataValue.map((dataObj) => ( <>    <div className="position-relative pt-8">
      <div className='box2'> 
      {/* <img src={dataObj.image} width={"200px"} alt="img"/> */}
      <LazyLoadImage 
    src={dataObj.image} width={"200px"} alt="img"
      />
      </div>
     <p className="title1">{dataObj.title}</p>
     <p className='desc'>{dataObj.description}</p>
     <p className='price'>{dataObj.price}</p>
     </div> </>  ))}
       </Stack>
       </div>
    </div>
  )
}

export default NewComponent
