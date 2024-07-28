let rows = 16
let cols = 16
let containerLength, cellLength

const container = document.querySelector("#container")
containerLength = container.offsetHeight
cellLength = containerLength / rows

for (let i = 0; i < (rows * cols); i++) {
    const cell = document.createElement("div")
    cell.setAttribute("class", "cell")
    cell.setAttribute("style", "background-color: #fff; height: " + cellLength + "px; width: " + cellLength + "px;")
    container.appendChild(cell)
}

const cells = document.querySelectorAll(".cell")
cells.forEach((cell) => {
    console.log(cell.offsetHeight)
})