let amigos = [];
let foiSorteado = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
        if (nome !== "") {
            amigos.push(nome);
            atualizarLista();
            document.getElementById("amigo").value = "";
        } else {
             alert("Por favor, insira um nome.");
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

        for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent =amigos[i];
        lista.appendChild(li);
    }
}


function sortearAmigo() {
    if (amigos.length === 0) {
        if (foiSorteado.length === 0) {
            alert("coloque um nome para ser sorteado!!");
        } else {
            alert("já foram sorteados todos!!");
        }
        return; 
    }

    
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = `Resultado: ${sorteado}`;

    foiSorteado.push(sorteado);
    amigos = amigos.filter(amigo => amigo !== sorteado);
    
    atualizarLista();
}


