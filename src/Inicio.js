// import Navbar from "./Navbar";
// Se puede meter el menú donde se quiera por ejemplo
import { useState, useEffect } from "react";
// Importacion de blogList:
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Inicio = () => {

  // llamada al fetch de manera desestructurada
  const { sotad: blogs, cargando, error } = useFetch('http://localhost:8000/blogs')
  //los : significa alias al importar el hook
  // UseState puede aceptar arrays de objetos:
  // Esto lo vamos a pasar con los props:
    // Funcion para eliminar, la vamos a exportar con un props:
/*  // se le pasa por parametro una funcion anonima que se vuelve a renderizar
  // cada vez que se pasa este componente. Cuidado con cambiar el estado
  // del componente dentro del useEffect porque nos podriamos quedar
  // atrapados en un bucle infinito.
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
           // console.log(res);
            if(!res.ok) { //esta promesa es recogida por la siguiente promesa
                throw Error('No se ha podido recuperar la información.');
            }
            return res.json(); //esto es una promesa ya que es asíncrono
        })
        .then((datos) => {
          // console.log(datos);
          setBlogs(datos);
          setCargando(false);
          setError(null);
        })
        .catch(err => {
           // console.log('ERROR HelloKittyCagues: ' + err.message);
           setError(err.message);
           setCargando(false);
        })//captura cualquier error en la red y dispara una función
      // el array vacio de abajo le indica al useEffect que solo se renderice
      // cuando se cargue el componente, si añadimos la variable nombre
      // al array:
    }, 1000);
  }, []);
*/
  // Props
  // Props nos va peermitir pasar datos de un componente padre
  // a otro componente hijo. El que cede la ifno es el padre, el que la recoge es el hijo
  return (
    <div className="home">
      {cargando && <div>Cargando...</div>}
      { error && <div>{error}</div>}
      {/* aqui pasamos props: lo primero el primer blogs
            se pueden llamar como queramos, lo segundo sí que representa
            la variable de la linea 12. Lo que hacemos aqui abajo es crear el prop*/}
      {blogs && <BlogList blogs={blogs} titulo="Listado de blogs" />}

      {/* Utilizar funciones como si fueran props */}

      {/* filter() sirve para filtrarv elementos de un array
            por una determinada característica que le decimos */}
      {/* <BlogList blogs = {blogs.filter(blog => blog.autor === 'Joan')} titulo = "Blogs de Joan" />
            <BlogList blogs = {blogs.filter(blog => blog.body === 'mas comida...')} titulo = "Blogs de comida" />
            <BlogList blogs = {blogs.filter(blog => blog.id === 2)} titulo = "Segundo blog" /> */}
    </div>
  );
};

export default Inicio;
