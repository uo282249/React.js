import React, {useState} from 'react';

const PrimerComponente = () => {

    let web = "https://www.google.com";
    const [nombre, setNombre] = useState("Juan");

    let cursos = ["React", "Angular", "Vue"];

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

    return (
        <div>
            <h1> ESTE ES EL PRIMER COMPONENTE </h1>
            <p>Mi nombre es: <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>{nombre}</strong> </p>
            <p>Mi web es: {web}</p>
            <p>Cursos:</p>

            {
                cursos.map((curso, i) => (<p>{curso}</p>))
            }

            <input type="text" onChange={e=> cambiarNombre(e.target.value)} placeholder="Cambia el nombre"/>


            <button onClick={e=> cambiarNombre("Manuel")}>Cambiar nombre</button>


        </div>
    );
};

export default PrimerComponente;
