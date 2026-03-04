const listHeader = document.getElementById("ol-header");
console.log(listHeader);
console.log(listHeader.textContent);

const cards = document.getElementsByClassName("card");
console.log(cards);
console.log(cards[2]);

const firstChildren = document.querySelectorAll(".card:first-child");
console.log(firstChildren);
console.log(firstChildren[1]);

const newCard = document.createElement("div");
newCard.classList.add("card");
newCard.textContent = "Added using JavaScript";

document.querySelector(".container").appendChild(newCard);

cards[0].remove();

const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {
    console.log(event.type);
    console.log(event.target);
    listHeader.textContent = "Changed with JS";
    listHeader.style.color = "crimson";
});

document.addEventListener("keydown", (event) => {
    console.log("Key pressed: " + event.key);
});