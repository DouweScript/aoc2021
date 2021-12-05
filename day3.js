import fs from "fs"

function readFile(path){
    let dataArray = []

    fs.readFileSync(path, "utf-8").split('/\r?\n').forEach(line =>{
        dataArray = line.split('\r\n')
    })
    
    return dataArray
}

function getMostCommonBit(input, charIndex){
    let zero = 0;
    let one = 0;

    for (let i = 0; i < input.length; i++){
        if(input[i].charAt(charIndex) === '1'){
            one++
        }

        if(input[i].charAt(charIndex) === '0'){
            zero++
        }
    }

    if (zero == one){
        return '1'
    }

    if (zero < one){
        return '1'
    } else {
        return '0'
    }
}

function getLeastCommonBit(input, charIndex){
    let zero = 0;
    let one = 0;

    for (let i = 0; i < input.length; i++){
        if(input[i].charAt(charIndex) === '1'){
            one++
        }

        if(input[i].charAt(charIndex) === '0'){
            zero++
        }
    }
    
    if (zero > one){
        return '1'
    } else {
        return '0'
    }
}

function part1(){
    let mostCommon = ''
    let leastCommon = ''
    for(let i = 0; i < input[0].length; i++){
        mostCommon = mostCommon + getMostCommonBit(data, i)
        leastCommon = leastCommon + getLeastCommonBit(data, i)
    }

    let mostCommonDecimal = parseInt(mostCommon, 2)
    let leastCommonDecimal = parseInt(leastCommon, 2)
    let answer = mostCommonDecimal * leastCommonDecimal
    console.log(answer) 
}

function removeInvalidDataOxygenGenerator(input, mostCommon, charIndex){
    let newArray = []

    for(let i = 0; i < input.length; i++){
        if(input[i].charAt(charIndex) === mostCommon){
            newArray.push(input[i])
        }
    }

    console.log(newArray)
    return newArray
}

function removeInvalidDataCO2Scrubber(input, leastCommon, charIndex){
    let newArray = []

    for(let i = 0; i < input.length; i++){
        if(input.length === 1){
            return newArray
        }

        if(input[i].charAt(charIndex) === leastCommon){
            newArray.push(input[i])
        }
    }
    return newArray
}

function part2(){
    let oxegenInput = data
    let CO2Input = data
    
    for(let i = 0; i < oxegenInput[0].length; i++){
        oxegenInput = removeInvalidDataOxygenGenerator(oxegenInput, getMostCommonBit(oxegenInput, i), i)
    }
    
    for(let i = 0; i < CO2Input[0].length; i++){
        if(CO2Input.length === 1){
        } else {
            CO2Input = removeInvalidDataCO2Scrubber(CO2Input, getLeastCommonBit(CO2Input, i), i)
        }    
    }

    let oxygenDecimal = parseInt(oxegenInput[0], 2)
    let CO2Decimal = parseInt(CO2Input[0], 2)
    let answer = oxygenDecimal * CO2Decimal
    console.log(answer)
}

const data = readFile("inputs/day3.txt")
part1()
part2()