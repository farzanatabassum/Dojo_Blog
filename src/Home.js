import { useEffect } from "react";
import { useState } from "react";
import BlogList from './BlogList'

const Home = () => {
    //events
    // const handleClick=(e)=>{
    //     console.log('hello',e);
    // }
    // const handleClickTwice=(name,e)=>{
    //     console.log('hello '+ name, e.target);
    // }
   //Use State
//    const [name,setName]=useState('farzana')
//    const [age,setAge]=useState(20)

//    const change=()=>{
//     setName('tabassum')
//     setAge(25)

//    }
const [blogs,setBlogs]=useState([
    {title:'My new Website', body:'lorem ipsum...', author:"maria", id:1},
    {title:'Welcome party!!!', body:'lorem ipsum...', author:"sadia", id:2},
    {title:'Web dev top tip', body:'lorem ipsum...', author:"maisha", id:3}
]);
const handleClick=(id)=>{
    const newBlog=blogs.filter((blog)=>blog.id!==id)
    setBlogs(newBlog)
}
useEffect(()=>{
    console.log('useEffect ran')
    console.log(blogs)
})
    return ( 
        <div className="home">
            {/* events */}
            {/* <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>handleClickTwice('farzana',e)}>Click twice</button> */}
            {/* UseState
            <p>{name} is {age} years old</p>
            <button onClick={change}>State Change</button> */}
            {/* Multiple props in a component */}
            <BlogList blogs={blogs} title='All Blogs!!!' handleClick={handleClick}/>
            {/* Re using components */}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='maria')} title="Maria's Blog"/> */}
        </div>
     );
}
 
export default Home;