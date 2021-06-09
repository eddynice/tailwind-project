import React,{useState,useEffect } from 'react'
import { Route, Switch } from 'react-router';
import Footer from './component/Footer';
import Home from "./pages"
import Navbar from './component/Navbar';
import About from './pages/about';
import Menu from './pages/menu';
import Dropdown from './component/Dropdown';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Stack from './components/Stack';

function App() {
  const [isOpen, setisOpen] = useState(false)
  const toggle = ()=>{
    setisOpen(!isOpen)
  }

  useEffect(() => {
    const hideMenu = ()=>{
    if (window.innerWidth > 768 && isOpen){
      setisOpen(false);
      console.log('i resized')
    }
    }
    window.addEventListener('resize', hideMenu);
    return ()=>{
      window.removeEventListener('resize', hideMenu)
    }
   
  },)

  return (
    <div className="app">
<Navbar toggle={toggle}/>
<Dropdown isOpen={isOpen} toggle={toggle}/>
<Switch>
<Route path='/' exact component={Home}/>


<Route path='/menu'component={Menu}/>
<Route path='/about' component={About}/>

</Switch>
<Navigation/>
<Header/>
<Route path='/stack'component={Stack}/>

<Footer/>
</div>
  );
}
<div></div>

export default App;
