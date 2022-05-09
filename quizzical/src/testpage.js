import React from "react";

export default  function Testpage(){
const [isdata, setisdata] = React.useState();
const [testdata, settestdata] = React.useState();
let questions = []




    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple').then(Response => Response.json() )
        .then(data => settestdata(data.results)
        )  
}, []);

function randomnum(){
 return Math.floor(Math.random()*5)  ;  
}

console.log(randomnum())

//testing a randomizer
let gum = [2, 5, 66, 9 ]

function arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr. splice(fromIndex, 1);
    arr. splice(toIndex, 0, element);
    return arr
    }

    arraymove(gum, 1, randomnum())
//testing



if(testdata){
    console.log(testdata)
    let optionsdata = []

//   testdata.forEach(item => {
      
//   });
// arraymove([...item.incorrect_answers, item.correct_answer], 3, randomnum())

testdata.map(item => {
    optionsdata.push(arraymove([...item.incorrect_answers, item.correct_answer], 3, randomnum()) .map(answer => {
        return (
           {text : answer.replaceAll('&quot;', "'" ).replaceAll('&#039;', "'").replaceAll('&amp', "'"), correct:answer == item.correct_answer?true:false,
        } 
        )
    } ))
}  )

const questiondata = testdata.map(item => {
    return( {text: item.question.replaceAll('&quot;', "'" ).replaceAll('&#039;', "'")})   
})

function addnum(arr){
return arr[0]+arr[1]+arr[2]+arr[3]
}

console.log(optionsdata)
   
 
let optionlengthdata = []
let optionlength = []


 for (let n = 0; n < questiondata.length; n++) {
    const questionn = questiondata[n];
    const optionn =  optionsdata[n]
    
    optionlengthdata.push(optionn.map(item =>  item.text.length))

    const optionlengthn = optionlengthdata[n]

optionlength.push(addnum(optionlengthn))  

const textoverflow = optionlength.map(item => {
    if(item > 60){
        return true
    }else{
        return false
    }
} )

// console.log(textoverflow)

    questions.push (
        <div className="questioncon">
            <p>{questionn.text}</p>
            <div className="optioncon">{optionn.map(item => <span style={{display:textoverflow[n]?'block':'inline'}}
            className="options">{item.text}</span> )} </div>
        </div>   
    )
    
}



}


///trying to test out replacing text and modify text based on character indicators from json
const text = 'In which U.S. state is Far Cry 5&#039;s fictional setting &#039;Hope County&#039; located?'
   


console.log('work')



if(testdata){
    return(
        <div className="testpagecon">
            {questions}
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

