const registrar = (req, res) => {
    res.json({msg: 'registrando usuario'})
};

const perfil = (req, res) => {
    res.json({msg: 'mostrando perfil'});
}

export {
    registrar,
    perfil
};