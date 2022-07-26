document.querySelector('#getButton').addEventListener("click", apiRequest)

async function apiRequest(){

    
    const pokemonName = document.querySelector('input').value
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName} `)
        const data = await response.json()
        console.log(data)


        document.getElementById('pokemonName').innerText = data.species.name
        document.getElementById('pokemonWeight').innerText = data.weight
        document.getElementById('pokemonHeight').innerText = data.height
        document.getElementById('pokemonType').innerText = data.types[0].type.name
        document.getElementById('pokemonAttack').innerText = data.moves[0].move.name
        document.getElementById('pokemonImage').src = data.sprites.other.home.front_default
        document.getElementById('pokemonCaption').innerText = data.name
    }catch(error) {
        console.log(error)
    }
}