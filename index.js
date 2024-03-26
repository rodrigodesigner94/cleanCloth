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
        "section": "CENTRO CIRÚRGICO"        
    }
]

var registroDia = []
console.log(registroDia)

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
    card.innerHTML = "";

    dataBank.forEach(element => {
        let listMatricula = element.id;
        let listName = element.name
        let listSetor = element.section
        

         if (validation == listMatricula) {
            let item = document.createElement("table");
            item.classList.add("info");
            

            item.innerHTML = `<thead>
            <tr>
            
              <th scope="col">Data e Hora</th>
              <th scope="col">Matricula</th>
              <th scope="col">Nome</th>
              <th scope="col">Unidade</th>
              <th scope="col">Item</th>
            </tr>
        </thead>
        <tbody>
        
        <td>${horaFormatada}</td>
        <td>${listMatricula}</td><td>${listName}</td><td>${listSetor}</td><td>${roupa}</td>
        </tbody>`;
            card.appendChild(item);

            function guardar () {
                let info = {horaFormatada, listMatricula, listName, listSetor, roupa};
                registroDia.push(info);               
                console.log(registroDia)
                
            }
            guardar
        }
        
    });    
}