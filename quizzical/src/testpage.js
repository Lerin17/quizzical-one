import React from "react";

export default  function Testpage(){

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple').then(Response => Response.json() )
        .then(data => console.log(data))    
}, []);

    
}

