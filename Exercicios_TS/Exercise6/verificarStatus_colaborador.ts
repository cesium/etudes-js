// Criar uma função que recebe um status e imprime uma mensagem correspondente a cada status.

enum Status {
    ativo = "Ativo",
    inativo = "Inativo",
    pendente = "Pendente"
}

function verificarstatus(status: Status): void {

}

verificarstatus(Status.ativo);   // output: ativo.
verificarstatus(Status.pendente); // output: pendente.