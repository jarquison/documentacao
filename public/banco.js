function listar_teste() {
    
    var tabelaEnsumos = document.getElementById('tabela_lista_insumo');
    var refBancoDeDados = firebase.database().ref('recebidos/');
    var indexDaLinha = 1;

    refBancoDeDados.once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();

            var linha = tabelaEnsumos.insertRow(indexDaLinha);
            var cellId = linha.insertCell(0);
            var cellLote = linha.insertCell(1);
            var cellNome = linha.insertCell(2);
            var cellQuantidade = linha.insertCell(3);

            cellId.appendChild(document.createTextNode(childKey));
            cellLote.appendChild(document.createTextNode(childData.lote));
            cellNome.appendChild(document.createTextNode(childData.nome_insumo));
            cellQuantidade.appendChild(document.createTextNode(childData.quantidade));

            indexDaLinha = indexDaLinha + 1;
        });
    });

}

function limpar_tabela() {
    var tabelaEnsumos = document.getElementById('tabela_lista_insumo');
    var linha = tabelaEnsumos.getElementsByTagName("tr");
    for(var i = 2; i < linha.length; i++){
        tabelaEnsumos.removeChild(tabelaEnsumos.childNodes[i]);
    }
}

function reload_page() {
    window.location.reload();
}