const Home = () => {
    const handleClick=(e)=>{
        console.log('hello',e);
    }
    const handleClickTwice=(name,e)=>{
        console.log('hello '+ name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>handleClickTwice('farzana',e)}>Click twice</button>
        </div>
     );
}
 
export default Home;