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


if(testdata){
    console.log(testdata)
    question =   testdata.map(item => 
        <div key = {testdata.indexOf(item)}>
            <h1>{item.question} </h1>
        </div>
    )
}


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

