//variaveis globais
let enviarSort = document.querySelector('button#enviarSort')

//funções
const sortear = () => {

    let inicial = Number(document.getElementById('inicial').value)
    let final = Number(document.getElementById('final').value)
    
    if(final <= inicial){
        alert('Não é possível sortear...')
    }
    else{

        
        let localResultado = document.getElementById('resultado')

        localResultado.innerHTML = `
            <h1 id="numberoSorteado">${Naleatorio(inicial, final)}</h1>
        `

    }


}

const Naleatorio = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
}



//eventos de escutas 
enviarSort.addEventListener('click', sortear)