const btn = document.getElementById("btn");
const container = document.getElementById("con");
const load = document.querySelector(".loader");

// Function to get a random Pokémon name
const getName = async () => {
    let num = Math.floor(Math.random() * 1025) + 1; // Ensures valid Pokémon ID
    const url = `https://pokeapi.co/api/v2/pokemon/${num}`;

    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch Pokémon");
        let data = await response.json();
        return data.name;
    } catch (error) {
        console.warn("Retrying getName()...");
        return await getName(); // Retry if the request fails
    }
};

// Function to get a random Pokémon TCG card image
const getdata = async () => {
    try {
        const image = document.createElement("img");
        container.prepend(image);

        // Show loading state
        load.style.display = "block";
        btn.disabled = true;
        btn.innerText = "Loading...";

        const name = await getName();
        console.log(`Searching for TCG card: ${name}`);

        const url = `https://api.pokemontcg.io/v2/cards?q=name:${name}`;

        let response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch TCG data");

        let imgData = await response.json();
        if (!imgData.data || imgData.data.length === 0) throw new Error("No cards found");

        // Pick a random card from the results
        let num = Math.floor(Math.random() * imgData.data.length);
        image.src = imgData.data[num].images.large;

    } catch (error) {
        console.warn("Retrying getdata()...");
        await getdata(); // Retry fetching a card if any error occurs
    } finally {
        // Hide loading state
        load.style.display = "none";
        btn.innerText = "Get Pokémon";
        btn.disabled = false;
    }
};

btn.addEventListener("click", getdata);
// Store the Generated images in local storage 

