import fs from "fs"

function readFile(path){
    let dataArray = []

    fs.readFileSync(path, "utf-8").split('/\r?\n').forEach(line =>{
        dataArray = line.split('\r\n')
    })
    
    return dataArray
}

function makeIntArray(array){
    let newArray = []
    let data = array.split(',')

    for(let i = 0; i < data.length; i++){
        newArray.push(parseInt(data[i]))
    }
    return newArray
}

function part1(){
    let fuelArray = []
    let maxValue = Math.max.apply(Math, input)

    for(let i = 1; i < maxValue; i++){
        fuelArray.push(calcFuel(i))
    }

    console.log(Math.min.apply(Math, fuelArray))
}

function calcFuel(target){
    let fuel = 0;

    for(let i = 0; i < input.length; i++){
        fuel = fuel + Math.abs(input[i] - target)
    }

    return fuel;
}

function part2(){
    let fuelArray = []
    let maxValue = Math.max.apply(Math, input)

    for(let i = 0; i < maxValue; i++){
        fuelArray.push(calcFuelPart2(i))
    }
    
    console.log(Math.min.apply(Math, fuelArray))
}

function calcFuelPart2(target){
    let fuel = 0;

    for(let i = 0; i < input.length; i++){
        let distance = Math.abs(input[i] - target)
        
        for(let i = distance; i > 0; i--){
            fuel = fuel + i
        }
    }

    return fuel
}

const input = makeIntArray(readFile("inputs/day7.txt")[0])
part1()
part2()