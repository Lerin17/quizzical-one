import React from "react";



export default  function Quest(props){
const [isdata, setisdata] = React.useState();
const [testdata, settestdata] = React.useState();
const [select, setselect] = React.useState(false)
const [testdataalt, settestdataalt] = React.useState();


return(
    <div className="questioncon">
                <p>{props.question}</p>
                <div className="optioncon">{props.options.map(item => <span  style={{
                backgroundColor:item.selected?'blue':'greenyellow'}}
                className="options">{item.text}</span> )} </div>
            </div> 
    )
    

if(testdata){
    const testdataaltupdate = testdata.map(item => {
        arraymove([...item.incorrect_answers, item.correct_answer], 3, randomnum()) .map(answer => {
             return (
                {
                    options : answer.replaceAll('&quot;', "'" ).replaceAll('&#039;', "'").replaceAll('&amp', "'"), correct:answer === item.correct_answer?true:false,
                selected:false
     
             } 
             )
         })
     } )
   
}

//to change array through reactstate for easy re-renders, it might be beneficial to pass this array down as a prop from App to be rendered//

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



testdata.map(item => {
    optionsdata.push(arraymove([...item.incorrect_answers, item.correct_answer], 3, randomnum()) .map(answer => {
        return (
           {text : answer.replaceAll('&quot;', "'" ).replaceAll('&#039;', "'").replaceAll('&amp', "'"), correct:answer === item.correct_answer?true:false,
           selected:false
        } 
        )
    } ))
}  )

const questiondata = testdata.map(item => {
    return( {text: item.question.replaceAll('&quot;', "'" ).replaceAll('&#039;', "'")})   
})



let optionlengthdata = []
console.log(optionlengthdata)
optionlengthdata.push(props.options.map(item => {
  return  item.text.length
}))
}





console.log(questions)




  
}

