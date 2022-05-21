import Proyecto from "../models/Proyecto.js";


const registrar = async (req, res) => {
    const {email} = req.body;

    //prevenir usuairos duplicados
    const existeUsuario = await Proyecto.findOne({email})

    if(existeUsuario){
        const error = new Error('Usuario ya registrado');
        //detiene el codigo si ya lo encontró
        return res.status(400).json({msg: error.message});
    }

    try {
        //guardar usuario
        const instancia = new Proyecto(req.body);
        const instanciaGuardada = await instancia.save();
        res.json(instanciaGuardada);
    } catch (error) {
        console.log(error);
    }

    
};

const perfil = (req, res) => {
    res.json({msg: 'mostrando perfil'});
}

export {
    registrar,
    perfil
};