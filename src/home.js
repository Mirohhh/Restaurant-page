let home = function () {
    const container = document.getElementById("container");
    const h1_container = document.createElement("div");
    h1_container.classList.add("h1-container");
    container.appendChild(h1_container);
    const rName = document.createElement("h1");
    rName.textContent = "Mike's Pizzas";
    h1_container.appendChild(rName);
    const coverImg = document.createElement("div");
    coverImg.classList.add("cover-img");
    container.appendChild(coverImg);
    const dContainer = document.createElement("div");
    dContainer.classList.add("dContainer");
    container.appendChild(dContainer);
    const dParagraph = document.createElement("p");
    dParagraph.innerHTML = "Mike's Pizza is the best pizza you can have. Our low prices and excellent taste makes us the best choice if you want to have a resonably priced delicious pizza.";
    dContainer.appendChild(dParagraph);
}

export {home};