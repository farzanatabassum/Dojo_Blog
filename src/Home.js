import { useState } from "react";

const Home = () => {
    //events
    // const handleClick=(e)=>{
    //     console.log('hello',e);
    // }
    // const handleClickTwice=(name,e)=>{
    //     console.log('hello '+ name, e.target);
    // }
   //Use State
   const [name,setName]=useState('farzana')
   const [age,setAge]=useState(20)

   const change=()=>{
    setName('tabassum')
    setAge(25)

   }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            {/* <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>handleClickTwice('farzana',e)}>Click twice</button> */}
            <p>{name} is {age} years old</p>
            <button onClick={change}>State Change</button>
        </div>
     );
}
 
export default Home;