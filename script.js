const btn = document.getElementById("btn");
const container = document.getElementById("con");
const load = document.querySelector(".loader")

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

const loading = (tof) => {
  if (tof)
  {
    span = document.createElement("span");
    span.class = "loader";
    container.appendChild(span);
    
  }
}

//Get the images of cards with
const getdata = async() => {
  load.style.display='block'
  btn.disabled=true
  btn.innerText ="Loading..."
  image = document.createElement("img")
  container.prepend(image);
 const name = await getName();
console.log(name)
const url = `https://api.pokemontcg.io/v2/cards?q=name:${name}`;

data = await fetch(url)

if(!data.ok){
  data = await fetch(url)
}

img = await data.json();

num = Math.floor(Math.random()*img.data. length) 


image.src = img.data[num].images.large;


load.style.display='none'
btn.innerText ="Get Pokemon"
btn.disabled=false
}

btn.addEventListener("click",getdata)

