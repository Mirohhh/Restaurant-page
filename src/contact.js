let contact = function () {
    const container = document.getElementById("container");
    const h1_container = document.createElement("div");
    h1_container.classList.add("h1-container");
    container.appendChild(h1_container);
    const cText = document.createElement("h1");
    cText.textContent = "Contact Us";
    h1_container.appendChild(cText);

    const pDiv1 = document.createElement("div");
    pDiv1.classList.add("p-div");
    container.appendChild(pDiv1);
    const name1 = document.createElement("h2");
    name1.textContent = "Mike";
    pDiv1.appendChild(name1);
    const tDiv1 = document.createElement("div");
    tDiv1.classList.add("t-div");
    pDiv1.appendChild(tDiv1);
    const dtaR1 = document.createElement("h4");
    dtaR1.textContent = "Chef";
    const dtaN1 = document.createElement("h4");
    dtaN1.textContent = "555-555-5555";
    const dtaE1 = document.createElement("h4");
    dtaE1.textContent = "veryRealEmail@fakemail.com";
    tDiv1.append(dtaR1, dtaN1, dtaE1);

    const pDiv2 = document.createElement("div");
    pDiv2.classList.add("p-div");
    container.appendChild(pDiv2);
    const name2 = document.createElement("h2");
    name2.textContent = "Omar";
    pDiv2.appendChild(name2);
    const tDiv2 = document.createElement("div");
    tDiv2.classList.add("t-div");
    pDiv2.appendChild(tDiv2);
    const dtaR2 = document.createElement("h4");
    dtaR2.textContent = "Manager";
    const dtaN2 = document.createElement("h4");
    dtaN2.textContent = "555-555-5567";
    const dtaE2 = document.createElement("h4");
    dtaE2.textContent = "notAFakeEmail@fakemail.com";
    tDiv2.append(dtaR2, dtaN2, dtaE2);

    const pDiv3 = document.createElement("div");
    pDiv3.classList.add("p-div");
    container.appendChild(pDiv3);
    const name3 = document.createElement("h2");
    name3.textContent = "John";
    pDiv3.appendChild(name3);
    const tDiv3 = document.createElement("div");
    tDiv3.classList.add("t-div");
    pDiv3.appendChild(tDiv3);
    const dtaR3 = document.createElement("h4");
    dtaR3.textContent = "Waiter";
    const dtaN3 = document.createElement("h4");
    dtaN3.textContent = "555-555-5243";
    const dtaE3 = document.createElement("h4");
    dtaE3.textContent = "thisRealEmail@fakemail.com";
    tDiv3.append(dtaR3, dtaN3, dtaE3);
}

export {contact};