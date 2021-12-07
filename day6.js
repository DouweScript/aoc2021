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
    let array = input

    for(let i = 0; i < 80; i++){
        array = getNextStep(array)
    }

    console.log(array.length)
}

function getNextStep(array){
    let newArray = []
    let counter = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            newArray.push(array[i] - 1)
        }
        else{
            newArray.push(6)
            counter++
        }
    }

    for(let i = 0; i < counter; i++){
        newArray.push(8)
    }
    return newArray
}

function getArrayPart2(){
    let zeroes = 0;
    let ones = 0;
    let twos = 0;
    let threes = 0;
    let fours = 0;
    let fives = 0;
    let sixs = 0;
    let sevens = 0;
    let eights = 0;

    for(let i = 0; i < input.length; i++){
        if(input[i] == 0){
            zeroes++
        }

        if(input[i] == 1){
            ones++
        }

        if(input[i] == 2){
            twos++
        }

        if(input[i] == 3){
            threes++
        }

        if(input[i] == 4){
            fours++
        }

        if(input[i] == 5){
            fives++
        }

        if(input[i] == 6){
            sixs++
        }
    }

    let numbersArray = [zeroes, ones, twos, threes, fours, fives, sixs, sevens, eights]
    return numbersArray
}

function getNextStepPart2(array){
    let newArray = []

    let zeroes = array[1]
    let ones = array[2]
    let twos = array[3]
    let threes = array[4]
    let fours = array[5]
    let fives = array[6]
    let sixs = array[0] + array[7]
    let sevens = array[8]
    let eights = array[0]

    newArray = [zeroes, ones, twos, threes, fours, fives, sixs, sevens, eights]
    return newArray
}

function part2(){
    let array = getArrayPart2()
    
    for(let i = 0; i < 256; i++){
        array = getNextStepPart2(array)
    }

    let sum = 0;

    for(let i =0; i < array.length; i++){
        sum = sum + array[i]
    }

    console.log(sum)
}

const input = makeIntArray(readFile("inputs/day6.txt")[0])
part1()
part2()
