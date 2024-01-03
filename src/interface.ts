interface LojaProps {
    nome: string;
    endereco: string;
    status: boolean;
}

const burguerK: LojaProps = {
    nome: "joao",
    endereco: "praça da conceição",
    status: true
}

function novaLoja({nome, endereco, status}: LojaProps) {
    console.log(nome)
    console.log(endereco)
    console.log(status)
}

novaLoja({ nome: "ruan", endereco: "rua da saudade", status: true })