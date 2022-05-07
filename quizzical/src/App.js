// import logo from './logo.svg';
// import './App.css';
import './index.css';
import React from 'react';
import Startpage from './startpage'
import Testpage from './testpage';





function App() {
   const [isgameactive, setisgameactive] = React.useState(false);

function activategame(){
    setisgameactive( true )
}

 return(
    <div className='appcontainer' >
    {!isgameactive && <Startpage 
    startgame = {activategame} /> }
 
     {isgameactive && <Testpage/>}
</div>
 )  
}


export default App;
