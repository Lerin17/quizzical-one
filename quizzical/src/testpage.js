import React from "react";

export default  function Testpage(){
const [isdata, setisdata] = React.useState();
const [testdata, settestdata] = React.useState();
let question




    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple').then(Response => Response.json() )
        .then(data => settestdata(data.results)
        )  
}, []);

function randomnum(){
 return Math.floor(Math.random()*4) + 1 ;  
}

//testing
let gum = [2, 5, 66, 9 ]

function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr. splice(fromIndex, 1);
    arr. splice(toIndex, 0, element);
    console.log(gum)
    }

    arraymove(gum, 1, randomnum())
//testing



if(testdata){
    console.log(testdata)
    question =   testdata.map(item =>
        {
     let optionsdata =  [...item.incorrect_answers, item.correct_answer].map(answer => {
            return (
               {text : answer, correct:answer == item.correct_answer?true:false,
            } 
            )
        } )

        

        //adding a newindex to randomize answers

        console.log(optionsdata)
    

            
        return(<div key = {testdata.indexOf(item)}>
        <p>{item.question.replaceAll('&quot;', "'" ).replaceAll('&#039;', "'") }</p>
        </div>)    
        }


        
    )
}


///trying to test out replacing text and modify text based on character indicators from json
const text = 'In which U.S. state is Far Cry 5&#039;s fictional setting &#039;Hope County&#039; located?'
   


console.log('work')
// if(testdata){
//     const y =  testdata.map(item => { return (
//         item.question.slice(
//             item.question.indexOf('&‌#039') + 1,
//             item.question.lastIndexOf('&‌#039') ) 
//     )
        
//     })

//     console.log(y)
// }
//


if(testdata){
    return(
        <div>
            {question}
        </div>
        )   
}else{
    return (
        <h1>
         questions loading...
        </h1>
    )
}
  
}

