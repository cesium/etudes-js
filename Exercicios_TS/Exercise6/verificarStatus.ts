enum Status {
    Ativo = "Ativo",
    Inativo = "Inativo",
    Pendente = "Pendente"
}

function verificarStatus(status: Status): void {
    switch (status) {
        case Status.Ativo:
            console.log('O sistema está ativo.');
            break;
        case Status.Inativo:
            console.log('O sistema está inativo.');
            break;
        case Status.Pendente:
            console.log('O sistema está pendente.');
            break;
    }
}

verificarStatus(Status.Ativo);   // Saída: O sistema está ativo.
verificarStatus(Status.Pendente); // Saída: O sistema está pendente.
