import fs from "fs"

function readFile(path){
    let dataArray = []

    fs.readFileSync(path, "utf-8").split('/\r?\n').forEach(line =>{
        dataArray = line.split('\r\n')
    })
    
    return dataArray
}

function makeGrid(){
    let maxY = 0;
    let maxX = 0;

    //Calculates the size of the grid
    for(let i = 0; i < input.length; i++){
        let coords = input[i].split('-> ')
        let begin = coords[0]
        let end = coords[1]

        let beginX = parseInt(begin.split(',')[0])
        let beginY = parseInt(begin.split(',')[1])
        let endX = parseInt(end.split(',')[0])
        let endY = parseInt(end.split(',')[1])

        maxY = greaterThen(maxY, beginY)
        maxY = greaterThen(maxY, endY)
        maxX = greaterThen(maxX, beginX)
        maxX = greaterThen(maxX, endX)
    }

    //Makes the grid
    let grid = new Array(maxX + 1)
    for(let i = 0; i < grid.length; i++){
        grid[i] = new Array(maxY + 1)
    }

    //fills the entire grid with zeroes
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            grid[i][j] = 0;
        }
    }

    return grid
}

function greaterThen(greatestNumber, newNumber){
    if(newNumber > greatestNumber){
        return newNumber
    }
    return greatestNumber
}

function getGreaterNumber(num1, num2){
    if(num1 > num2){
        return num1
    }
    return num2
}

function getSmallerNumber(num1, num2){
    if (num1 < num2){
        return num1
    }
    return num2
}

function calcPoints(){
    for(let i = 0; i < input.length; i++){
        let beginX = parseInt(input[i].split("-> ")[0].split(',')[0])
        let beginY = parseInt(input[i].split('-> ')[0].split(',')[1])

        let endX = parseInt(input[i].split('-> ')[1].split(',')[0])
        let endY = parseInt(input[i].split('-> ')[1].split(',')[1])

        let xDif = Math.abs(beginX - endX);
        let yDif = Math.abs(beginY - endY)

        //for a horizantal line
        if(xDif == 0){
            let lowerY = getSmallerNumber(beginY, endY)
            let higherY = getGreaterNumber(beginY, endY)

            for(let i = lowerY; i <= higherY; i++){
                grid[beginX][i] = grid[beginX][i] + 1
            }
        }

        //for a vertical line
        if(yDif == 0){
            let lowerX = getSmallerNumber(beginX, endX)
            let higherX = getGreaterNumber(beginX, endX)

            for(let i = lowerX; i <= higherX; i++){
                grid[i][beginY] = grid[i][beginY] + 1
            }
        }

        //Added this for part2 didn't make another function for this because i misread part1
        //and already calcualted diagonals, if you want just part one comment out everything between the if statement
        //for a diagonal line
        if(xDif == yDif){
            let realXdif = beginX - endX
            let realYdif = beginY - endY

            try{
                //bottom left to top right
                if(realXdif < 0 && realYdif > 0){
                    for(let i = 0; i <= xDif; i++){
                        grid[beginX+i][beginY-i] = grid[beginX+i][beginY-i] + 1
                    }
                }

                //bottom right to top left
                if(realXdif > 0 && realYdif < 0){
                    for(let i = 0; i <= xDif; i++){
                        grid[beginX - i][beginY + i] = grid[beginX - i][beginY + i] + 1
                    }
                }

                //top left to bottom right
                if(realXdif > 0 && realYdif > 0){
                    for(let i = 0; i <= xDif; i++){
                        grid[beginX-i][beginY-i] = grid[beginX-i][beginY-i] + 1
                    }
                }

                //bottom left to top right
                if(realXdif < 0 && realYdif < 0){
                    for(let i = 0; i <= xDif; i++){
                        grid[beginX+i][beginY+i] = grid[beginX+i][beginY+i] + 1
                    }
                }
            }
            //Have a catch because i ran into some errors earlier
            catch(err){
                console.log(err)
            } 
        }
    }    
}

function part1(){
    calcPoints()
    let counter = 0;

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            if(grid[i][j] > 1){
                counter++
            }
        }
    }
    console.log(counter)
}

const input = readFile("inputs/day5.txt")
let grid = makeGrid()
part1()
