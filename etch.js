createBtn = document.getElementById("createBtn");
container = document.getElementById("container");

createBtn.addEventListener("click", () => askUser());

function askUser() {
    clearContainer();
    size = window.prompt("Size of your grid: ");
    if (size < 1 || size > 100) {
        window.alert("Please enter a value between 1-100")
        return
    }
    createGrid(size);
}

/*function createGrid(sideLength) {
    for (i = 0; i < sideLength * sideLength; i++) {
        const div = document.createElement("div");
        div.classList.add("block");
        container.appendChild(div);
    }
}*/

function createGrid(sideLength) {
    for (i = 0; i < sideLength; i++) {
        const divContainer = document.createElement("div");
        divContainer.classList.add("row")
        for (j = 0; j < sideLength; j++) {
            const div = document.createElement("div");
            div.classList.add("block");
            divContainer.appendChild(div);
        }
        container.appendChild(divContainer)
    }
}

function clearContainer() {
    container.innerHTML = "";
}