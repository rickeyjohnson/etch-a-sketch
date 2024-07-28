let sides, containerLength, cellLength, cells

const container = document.querySelector("#container")
containerLength = container.offsetHeight

function constructGrid(s) {   
    for (let i = 0; i < (s ** 2); i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        cell.setAttribute("style", "height: " + cellLength + "px; width: " + cellLength + "px;")
        container.appendChild(cell)
    }
}

function deleteGrid() {
    cells = document.querySelectorAll(".cell")
    cells.forEach((cell) => {
        cell.remove()
    })
}

function clearGrid() {
    cells = document.querySelectorAll(".cell")
    cells.forEach((cell) => {
        cell.classList.remove("active")
    })
}

const gridSpecButton = document.querySelector("#user-input")
const resetButton = document.querySelector("#reset")

gridSpecButton.addEventListener('click', () => {

    do {
        sides = Number.parseInt(prompt("how many squares per side do you want (no negatives or over 100)? good sir!"))
    } while (sides > 100 || sides < 1)

    cellLength = containerLength / sides

    deleteGrid()
    constructGrid(sides)

    cells = document.querySelectorAll(".cell")
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add("active")
        })
    })
})

resetButton.addEventListener('click', () => {
    clearGrid()
})