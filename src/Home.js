
import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    const {data:blogs, isLoading, error}=useFetch('http://localhost:8000/blogs')
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
// const [blogs,setBlogs]=useState(null);
// const [isLoading, setIsLoading]=useState(true);
// const [error,setError]=useState(null);
// // const [name, setName]=useState('farzana')
// const handleClick=(id)=>{
//     const newBlog=blogs.filter((blog)=>blog.id!==id)
//     setBlogs(newBlog)
// }
// // useEffect(()=>{
// //     // console.log(name)
// // },[name])
// useEffect(()=>{
//     setTimeout(()=>{
//         fetch('http://localhost:8000/blogs')
//     .then(res=>{
//         // console.log(res)
//         if(!res.ok){
//             throw Error("couldn't fetch the data");
//         }
//         return res.json()})
//     .then(data=> {
//         setBlogs(data)
//         setIsLoading(false)
//         setError(null)

//     })
//     .catch(err=>{
//         // console.log(err.message)
//         setIsLoading(false)

//         setError(err.message)
//     })
//     },2000)
// },[])
    return ( 
        <div className="home">
            {/* events */}
            {/* <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>handleClickTwice('farzana',e)}>Click twice</button> */}
            {/* UseState
            <p>{name} is {age} years old</p>
            <button onClick={change}>State Change</button> */}
            {/* conditional rendering */}
            {error && <div>{error}</div>}
            {isLoading && <div>Loading.....</div>}
                        {/* Multiple props in a component */}

{  blogs && <BlogList blogs={blogs} title='All Blogs!!!' />}
{/* //  {  blogs && <BlogList blogs={blogs} title='All Blogs!!!' handleClick={handleClick}/>
// }            Re using components */}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='maria')} title="Maria's Blog"/> */}
            {/* <button onClick={()=>setName('tabassum')}>Change name</button>
            <p>{name}</p> */}
        </div>
     );
}
 
export default Home;