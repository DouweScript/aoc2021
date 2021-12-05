import fs from "fs"

//reads the file and puts the input per line in an array
//Should have cast the type to an integer
//Also should put this in a module.exports
function readFile(path){
    let dataArray = []

    fs.readFileSync(path, "utf-8").split('/\r?\n').forEach(line =>{
        dataArray = line.split('\r\n')
    })
    
    return dataArray
}

//Also works for part two too lazy to change the name of the function
function part1(array){
    let counter = 0;

    for(let i=1; i < array.length; i++){
        if(parseInt(array[i]) > parseInt(array[i-1])){
            counter++
        }
    }
    console.log(counter)
}

//Makes the sums needed for part2 and returns them in an array
function makeSums(array){
    let sumArray = []
    for(let i=0; i<array.length - 2; i++){
        let sum = parseInt(array[i]) + parseInt(array[i + 1]) +  parseInt(array[i + 2])
        sumArray.push(sum)
    }

    return sumArray
}

const input = readFile('inputs/day1.txt')
part1(input)
part1(makeSums(input))