//instead of writing props we are using destructuring
const BlogList = ({ blogs, title }) => {
  
// const BlogList = (props) => {
//     const blogs=props.blogs;
//     const title=props.title
    return (  
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => {
                return(
                    <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>
                </div>
                )
                
            })}
        </div>

    );
}
 
export default BlogList;