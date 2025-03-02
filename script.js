console.log('Hello, World!')

const url = "https://api.pokemontcg.io/v2/cards?q=name:pikachu";
const mess = document.getElementById("mes")

const getdata = async() => {
  

data = await fetch(url)

img = await data.json();
console.log(img.data.length)


for(i = 0; i < img.data.length; i++)
{
  image = await document.createElement("img")
  image.src = await img.data[i].images.large
  await document.body.appendChild(image)
}
mess.innerHTML = "Completed!"
}

getdata();

