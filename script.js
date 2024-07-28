let rows = 16
let cols = 16
let containerLength, cellLength

const container = document.querySelector("#container")
containerLength = container.offsetHeight
cellLength = containerLength / rows

function constructGrid() {   
    for (let i = 0; i < (rows * cols); i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        cell.setAttribute("style", "height: " + cellLength + "px; width: " + cellLength + "px;")
        container.appendChild(cell)
    }
}

constructGrid()

const cells = document.querySelectorAll(".cell")
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add("active")
    })
})