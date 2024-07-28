let rows = 16
let cols = 16
let containerLength, cellLength

const container = document.querySelector("#container")
containerLength = container.offsetHeight
console.log(containerLength)
cellLength = containerLength / rows

for (let i = 0; i < (rows * cols); i++) {
    const cell = document.createElement("div")
    cell.classList.add = "cell"
    cell.setAttribute("style", "background-color: pink; border: 2px purple solid; height: " + cellLength + "px; width: " + cellLength + "px;")
    container.appendChild(cell)
}

console.log('javascript ran!')