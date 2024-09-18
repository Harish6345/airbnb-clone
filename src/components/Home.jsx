import React,{useState} from 'react'
import Searchbar from './Searchbar'
   import Icons from './Icons'
import Product from './Product'
import Navbar from './Navbar'
import Login from './Login'
import Footer from './Footer'


const Home = () => {
  const[loginsettter,setloginsetter] =useState(false);
  const [iconsetter,seticonsetter] =useState(['icon']);
 
  return (
    <div className='mx-12 my-2 '>
      <Navbar loginsettter={loginsettter} setloginsetter={setloginsetter}/>
      {loginsettter?<Login setloginsetter={setloginsetter}/>:""}
      <Searchbar/>
     <Icons iconsetter={iconsetter} seticonsetter={seticonsetter} />
     <Product iconsetter={iconsetter} />
     <Footer/>
  

    </div>
  )
}

export default Home