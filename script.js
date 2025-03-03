const btn = document.getElementById("btn");
const container = document.getElementById("con");

// Get name of Pokemon
const getName = async () =>{
  num = Math.floor(Math.random()*1000)
console.log(num)
  const url = `https://pokeapi.co/api/v2/pokemon/${num}`
  
  data = await fetch(url);
  names = await data.json();
  
  val = names.name
  
  return val;
}



//Get the images of cards with
const getdata = async() => {
  
 const name = await getName();
console.log(name)
const url = `https://api.pokemontcg.io/v2/cards?q=name:${name}`;

data = await fetch(url)

img = await data.json();

num = Math.floor(Math.random()*img.data. length) 

image = document.createElement("img")
image.src = img.data[num].images.large;
container.prepend(image)

/*for(i = 0; i < img.data.length; i++)
{
  image = await document.createElement("img")
  image.src = await img.data[i].images.large
  await document.body.appendChild(image)
}
*/


}

const getPokemon = () => {
  
}



btn.addEventListener("click",getdata)

