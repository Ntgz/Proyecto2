

const Alerta = ({alerta}) => {
    return (
        <div className={`${alerta.error ? 'from-red-400 to-red-700' : 'from-indigo-400 to-indigo-900'} bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white`}>
            {alerta.msg}
        </div>
    )
}

export default Alerta;
