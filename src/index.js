import "./styles.css"; 
import { greeting } from "./greeting.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

const btn = document.querySelectorAll("button");
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("contact");


homeButton.addEventListener("click", (e) => {
    switchTabs(e.target);
});

menuButton.addEventListener("click", (e) => {
    switchTabs(e.target);
});

contactButton.addEventListener("click", (e) => {
    switchTabs(e.target);
});


function switchTabs(tab) {
    const container = document.getElementById("container");
    container.innerHTML = "";

    if (tab.id === "home") {
        home();
    } else if (tab.id === "menu") {
        menu();
    } else if (tab.id === "contact") {
        contact();
    }

    btn.forEach((button) => {
        button.style.backgroundColor = "transparent";
    })
    tab.style.backgroundColor = "#cecece";
}

homeButton.click();