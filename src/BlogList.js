

// aqui recibiremos los parametros del props, props aqui
// es un objeto:
// Se puede enviar el objeto desestructurado, no hace falta siemore
// enviar objeto completo:
const BlogList = ({titulo, blogs, handleEliminarBlog}) => {

    // aqui se recibe la variable, y como props es un objeto
    // accedemos a blogs, que lo contiene, era un array de objetos
    // en la otra pagina de codigo
    // const blogs = props.blogs;
    // const titulos = props.titulos;

    // Dentro del return es donde realmente se va a programar:
    return (  
        <div className="blog-list">

            <h2>{titulo}</h2>
            
            { blogs.map((blog)=>{
                // Lo que retornará:
                return(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.titulo}</h2>
                    <p>Escrito por { blog.autor}</p>
                    <button onClick={ ()=>handleEliminarBlog(blog.id)}>Elimina blog</button>
                </div>)
            }) }

        </div>
    );
}
 
export default BlogList;