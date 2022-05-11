// import logo from './logo.svg';
// import './App.css';
import './index.css';
import React from 'react';
import Startpage from './startpage'
import Testpage from './testpage';
import Quest from './testpage';





function App() {
   const [isgameactive, setisgameactive] = React.useState(false);
   const [data, setdata] = React.useState();
   const [testdata, settestdata] = React.useState();
   let dataop = []
   let quiz 
   

   React.useEffect(() => {
      fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple').then(Response => Response.json() )
      .then(data => setdata(data.results)
      )  
}, []);

function randomnum(){
   return Math.floor(Math.random()*5)  ;  
  }

  function arraymove(arr, fromIndex, toIndex) {
   var element = arr[fromIndex];
   arr. splice(fromIndex, 1);
   arr. splice(toIndex, 0, element);
   return arr
   }

if(data){
   const optiondata = data.map(item => {
      return(
         arraymove([...item.incorrect_answers, item.correct_answer], 3, randomnum()) .map(answer => {
            return (
               {
                   options : answer.replaceAll('&quot;', "'" ).replaceAll('&#039;', "'").replaceAll('&amp', "'"), correct:answer === item.correct_answer?true:false,
               selected:false
    
           } 
          )
        })
    )
 
    } )



    const questiondata = data.map(item => {
      return( {text: item.question.replaceAll('&quot;', "'" ).replaceAll('&#039;', "'")})   
  })
  
  for (let n = 0; n < questiondata.length; n++) {
   dataop.push(
      {question: questiondata[n].text,
     options: optiondata[n] }
   ) 
}
}

React.useEffect(() => {
   if(data){
      settestdata(dataop)
   }
   
}, []);

if(testdata){
   const quiz = testdata.map(item => 
      <Quest
      question={item.question}
      options = {item.options}/>
   )

  
}
console.log(quiz)
console.log('dance')

 

function activategame(){
    setisgameactive( true )
}

console.log( isgameactive)

if(!isgameactive){
   return (
      <Startpage 
      startgame = {activategame} />
   )
} 
else{
   return(
      <div className='appcontainer' >
      {quiz}
  </div>
   ) 
}
 
}


export default App;
