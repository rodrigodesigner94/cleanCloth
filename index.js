const frmAuth = document.querySelector("#auth");

const dataBank = [
    {
        "id": 252611,
        "name": "Raquel Santana",
        "section": "PED A"        
    },
    {
        "id": 252512,
        "name": "Estefano Andrade",
        "section": "PED B"        
    },
    {
        "id": 252111,
        "name": "Adriana Cerqueira",
        "section": "UTI A"        
    },
    {
        "id": 252616,
        "name": "André Ribeiro",
        "section": "Centro C."        
    }
]

var registroDia = []


frmAuth.onsubmit = (event) => {
    event.preventDefault();
    const validation = event.target.matricula.value;
    const roupa = event.target.radio.value 
    const dataAtual = new Date ();    
  const opcoesFormatacaoHora = { hour: 'numeric', minute: 'numeric' };
  const horaFormatada = dataAtual.toLocaleDateString('pt-BR', opcoesFormatacaoHora);


    if (validation == "") {
    alert("Preencha o campo MATRICULA!");
    return;
    }
    const card = document.querySelector("#lista");
    // card.innerHTML = "";

    dataBank.map((element) => {
        // let listMatricula = element.id;
        // let listName = element.name
        // let listSetor = element.section              

         if (validation == element.id) {
            let item = document.createElement("tbody");
            item.classList.add("info");
            

            item.innerHTML = 
            `
            
                        
                <td class= "data" >${horaFormatada}</td>
                <td>${element.id}</td>
                <td class= "data" >${element.name}</td>
                <td>${element.section}</td>
                <td class= "data" >${roupa}</td>
            `;
            card.appendChild(item);            
        } guardar                            
    });    
    function guardar () {
        let info = {
            date: horaFormatada,
         matricula: listMatricula,
         name: listName,
         section: listSetor,
         type: roupa
        };

        var registro = registroDia.push(info);   
        console.log(registro)                                                         
    }
    
}