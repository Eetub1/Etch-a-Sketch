const createBtn = document.getElementById("createBtn");
const container = document.getElementById("container");

createBtn.addEventListener("click", askUser);

function askUser() {
    clearContainer();
    size = window.prompt("Size of your grid: ");
    if (size < 1 || size > 100) {
        window.alert("Please enter a value between 1-100")
        return
    }
    createGrid(size);
}

function createGrid(sideLength) {
    for (let i = 0; i < sideLength; i++) {
        const divContainer = document.createElement("div");
        divContainer.classList.add("row")
        for (let j = 0; j < sideLength; j++) {
            const div = document.createElement("div");
            div.classList.add("block");
            div.addEventListener("mouseover", changeDivColor);
            divContainer.appendChild(div);
        }
        container.appendChild(divContainer)
    }
}

function clearContainer() {
    container.innerHTML = "";
}

function changeDivColor(event) {
    event.target.classList.add("divNewColor");
}