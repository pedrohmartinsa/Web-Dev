function InfosPessoais() {

    const nome = 'Pedro'
    const numero = '(11) 94224-3773'
    const email = 'pedroshenriquepsantos@gmail.com'

    return ( 
    <>
        <h1>Informações pessoais</h1>
        <p>Nome: {nome} </p>
        <p>Contato: {numero} </p>
        <p>Email: {email} </p>
    </>
    )
}

export default InfosPessoais