const colorOrange = (cell, num) => {
    if (num >= 50){
        return cell.style = "background: orange"
    }
}

const randInt = () => {
    return Math.floor(Math.random() * 100)
}

const create2DArray = (rows, cols) => {
    const arr = []
    for (let i = 0; i < rows; i++){
        arr[i] = []
        for (let j = 0; j < cols; j++){
            arr[i][j] = randInt()
        }
    }
    return arr
}

function createTable(arr){
    const table = document.createElement("table")

    for (let num_row of arr){
        let row = table.insertRow()
        for (let num of num_row){
            let cell = row.insertCell()
            cell.innerHTML = num
            colorOrange(cell, num)
        }
    }
    document.body.appendChild(table)
    table.setAttribute("id", "table")
    table.setAttribute("border", "1")
    table.style = "text-align: center"
}

function addCell(row){
    let cell = row.insertCell()
    cell.innerHTML = randInt()
    colorOrange(cell, cell.innerHTML)
}

function addNumber(){
    let table = document.getElementById("table")
    let rows = table.rows.length
    let cells = table.rows[rows - 1].cells.length
    if (cells < 6){
        let row = table.rows[rows - 1]
        addCell(row)
    } else {
        let row = table.insertRow()
        addCell(row)
    }
}

const ROWS = 5
const CELLS = 6
let numbers_arr = create2DArray(ROWS, CELLS)
createTable(numbers_arr)