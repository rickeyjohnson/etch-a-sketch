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

const button = document.querySelector("#user-input")
button.addEventListener('click', () => {
    sides = Number.parseInt(prompt("how many squares per side do you want? good sir!"))

    if (sides > 100 || sides < 1) {
        sides = Number.parseInt(prompt("you cant do over 100 or negative silly. try again!"))
    } 

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