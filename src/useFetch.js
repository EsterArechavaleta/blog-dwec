import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [sotad, setSotad] = useState(null); //si este array no estuviese en null,
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
               // console.log(res);
                if(!res.ok) { //esta promesa es recogida por la siguiente promesa
                    throw Error('No se ha podido recuperar la información.');
                }
                return res.json(); //esto es una promesa ya que es asíncrono
            })
            .then((datos) => {
              // console.log(datos);
              setSotad(datos);
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
      }, [url]);//puesto así es necesario poner el parámetro en los corchetes

      return {sotad, cargando, error};
};

export default useFetch;