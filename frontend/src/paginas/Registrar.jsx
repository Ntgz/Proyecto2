import { useState } from 'react'
import Alerta from '../components/Alerta';
import axios from 'axios'
const registrar = () => {
    const [ nombre, setNombre ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repetirPassword, setRepetirPassword ] = useState('')

    const [ alerta, setAlerta ] = useState({}) 

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if([nombre, email, password, repetirPassword].includes('')){
            setAlerta({msg: "Hay campos vacios", error: true})
            return;
        }

        if(password != repetirPassword) {
            setAlerta({msg: "Passwords no coinciden", error: true})
            return;
        }

        if(password.length < 6) {
            setAlerta({msg: "Agrega minimo 6 caracteres", error: true})
            return;
        }
        setAlerta({})   

        //crear usuario en la api

        try {
            const url = "http://localhost:4000/api/proyecto"
            await axios.post(url, { nombre, email, password })
            setAlerta({
                msg: 'Creado Correctamente',
                error: false
            })
        } catch (error) {
            //asi se comunica con el backend con response
            setAlerta({
                msg: error.response.data.msg,
                error:true
            })
        }

    }

    const { msg } = alerta

    
 

    return (
        <>
            <div>
                <h1 className="text-white font-black text-6xl">
                    Crea tu cuenta y Administra
                    <span className="text-black"> tus pacientes</span></h1>
            </div>
            <div className = "mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                { msg && <Alerta 
                    alerta={alerta}
                />}
                <form
                onSubmit={handleSubmit}
                >
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Nombre
                        </label>
                        <input
                            type = "text"
                            placeholder = "Tu nombre"
                            className = "border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value = {nombre}
                            onChange = { e => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Email
                        </label>
                        <input
                            type = "text"
                            placeholder = "Email de Registro"
                            className = "border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value = {email}
                            onChange = {e => setEmail(e.target.value)}  
                        />
                    </div>
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Password
                        </label>
                        <input
                            type = "password"
                            placeholder = "Tu password"
                            className = "border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value = {password}
                            onChange = { e => setPassword(e.target.value)}
                        />
                    </div>   
                    <div className="my-5">
                        <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                        >
                            Repetir Password
                        </label>
                        <input
                            type = "password"
                            placeholder = "Tu password"
                            className = "border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value = {repetirPassword}
                            onChange= { e => setRepetirPassword(e.target.value)}
                        />
                    </div>
                 
                        <input
                           type="submit"
                           value="crear cuenta"
                           className=" bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                           
                        />
                    

                </form> 
            </div>  
        </>
    )
}

export default registrar
