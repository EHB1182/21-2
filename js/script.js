function gravar(){

    let titulo = document.getElementById("titulo").value;

    let aluno = document.getElementById("aluno").value;

    let msg = document.getElementById("msg").value;

    alert(titulo + "\n" + msg + "\n" + aluno);

    ///

    let textoMensagem = titulo + "\n" + msg + "\n" + aluno

    document.getElementById("assunto").innerText = titulo;
    document.getElementById("estudante").innerText = aluno;
    document.getElementById("texto").innerText = msg;

    document.getElementById("titulo").value = "assunto";
    document.getElementById("aluno").value = "estudante";
    document.getElementById("msg").value = "texto";

}

function excluir(){
   
   document.getElementById("assunto").innerText = "";
   document.getElementById("estudante").innerText = "";
   document.getElementById("texto").innerText = "";
   
   alert("Dados deletados")
   //let linha = document.querySelector('tr');
   //linha
}