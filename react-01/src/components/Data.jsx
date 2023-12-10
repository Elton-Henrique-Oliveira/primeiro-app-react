export default function Data(){

    let nome = 'Elton'
    let cliente = {
        nome: 'Joaquim',
        email: 'joaquim@gmail.com'
    }

    let a = 1000;
    let b = 2000;

    function add(a, b){
        return a + b
    }

    return(
        <>
            <p>Nome do cliente:  {cliente.nome} </p>
            <p>Email do cliente: {cliente.email}</p>
            <p>A soma de {a} + {b} = {add(a,b)}</p>
        </>
    )
}