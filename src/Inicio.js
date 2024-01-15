// import Navbar from "./Navbar";
// Se puede meter el menú donde se quiera por ejemplo 
import { useState, useEffect } from "react";
// Importacion de blogList:
import BlogList from "./BlogList";

const Inicio = () => {

   
    // UseState puede aceptar arrays de objetos:
    // Esto lo vamos a pasar con los props:
    const [blogs, setBlogs] = useState([
        {titulo: 'Mi nueva web', body: 'texto para mostrar...',
        autor: 'Joan', id: 1},
        {titulo: 'Fiesta de Blas', body: 'mucho mas texto...',
        autor: 'Pedro', id: 2},
        {titulo: 'Merienda', body: 'mas comida...',
        autor: 'Marta', id: 3}
    ]);

    const [nombre, setNombre] = useState('Pablo');

    // Funcion para eliminar, la vamos a exportar con un props:
    const handleEliminarBlog = (id) =>{

        // const [seHaBorradoBlog, setseHaBorradoBlog] = useState(true);

        // CReem un nou array que inclou tot excepte l'id que
        // el que li arriba per parametre
        const nuevoBlog = blogs.filter(blog => blog.id !== id);
        
        // Al actrualizar de nuevo la página se vuelven a mostrar
        // porque no estan eliminados del array:
        setBlogs(nuevoBlog);

        
    };

    // se le pasa por parametro una funcion anonima que se vuelve a renderizar
    // cada vez que se pasa este componente. Cuidado con cambiar el estado
    // del componente dentro del useEffect porque nos podriamos quedar
    // atrapados en un bucle infinito.
    useEffect(()=>{
        console.log("useEffect disparado");
        console.log(blogs);


    // el array vacio de abajo le indica al useEffect que solo se renderice
    // cuando se cargue el componente, si añadimos la variable nombre
    // al array:
    },[nombre]);

    // Props
    // Props nos va peermitir pasar datos de un componente padre 
    // a otro componente hijo. El que cede la ifno es el padre, el que la recoge es el hijo
    return ( 
        <div className="home">
            {/* aqui pasamos props: lo primero el primer blogs
            se pueden llamar como queramos, lo segundo sí que representa
            la variable de la linea 12. Lo que hacemos aqui abajo es crear el prop*/}
            <BlogList blogs = {blogs} titulo = "Listado de blogs" handleEliminarBlog = {handleEliminarBlog} />
            <p>{nombre}</p>
            <button onClick={()=>setNombre('Pepito')}>Cambio de nombre</button>
            {/* Utilizar funciones como si fueran props */}

            {/* filter() sirve para filtrarv elementos de un array
            por una determinada característica que le decimos */}
            {/* <BlogList blogs = {blogs.filter(blog => blog.autor === 'Joan')} titulo = "Blogs de Joan" />
            <BlogList blogs = {blogs.filter(blog => blog.body === 'mas comida...')} titulo = "Blogs de comida" />
            <BlogList blogs = {blogs.filter(blog => blog.id === 2)} titulo = "Segundo blog" /> */}
        </div>     

     );
}
 
export default Inicio;