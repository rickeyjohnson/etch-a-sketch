let rows = 16
let cols = 16

const container = document.querySelector("#container")

// create 16 x 16 grid

for (let i = 0; i < (rows * cols); i++) {
    const cell = document.createElement("div")
    cell.classList.add = "cell"
    cell.setAttribute("style", "width: 10px; height: 10px; background-color: red; border: 2px green solid;")
    container.appendChild(cell)
}