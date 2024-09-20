function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");


    let campoPesquisa = document.getElementById("campo-pesquisa").value;


    campoPesquisa = campoPesquisa.toLowerCase();


    let resultados = "";
    let titulo = "";
    let endereco = "";
    let tags = "";


    //para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado?.titulo?.toLowerCase();
        endereco = dado?.endereco?.toLowerCase();
        link = dado?.linkentradaacessivel?.toLowerCase();
        tags = dado?.tags?.toLowerCase();


        if (titulo.includes(campoPesquisa) || endereco.includes(campoPesquisa) || link.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2 class="titulo">${dado?.titulo}</h2>
                <h5 class="endereco">${dado?.endereco}</h5>
                <a href="${dado?.linkentradaacessivel}" target="_blank">entrada acessivel para cadeira de rodas</a> <br>
                <a href="${dado?.linkespaco}" target="_blank">espaço entre as mesas</a> <br>
                <a href="${dado?.estacionamento}" target="_blank">estacionamento</a> <br>
                <a href="${dado?.linkguia}" target="_blank">guia rebaixada</a> <br>
                

                ${dado.linkbanheiro ? `<a href="${dado.linkbanheiro}" target="_blank">banheiro acessível</a> <br>` : ''}
                ${dado.linkescada ? `<a href="${dado.linkescada}" target="_blank">acesso ao 2º andar apenas via escada</a> <br>` : ''}
    
            </div>
        `;
        }


    }


    if (!resultados) {
        resultados = `<p>Nada foi encontrado</p>`
    }
    console.log(resultados)
    section.innerHTML = resultados;


   


}
// if (campoPesquisa === "") {
//         pesquisar()    
//     }




window.onload=pesquisar;
