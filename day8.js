import fs from "fs"

function readFile(path){
    let dataArray = []

    fs.readFileSync(path, "utf-8").split('/\r?\n').forEach(line =>{
        dataArray = line.split('\r\n')
    })
    
    return dataArray
}

function part1(){
    let counter = 0;
    for(let i = 0; i < input.length; i++){
        let data = input[i].split("| ")[1].split(" ")

        for(let j = 0; j < data.length; j++){
            if(data[j].length == 2 || data[j].length == 3 || data[j].length == 4 || data[j].length == 7){
                counter++
            }
        }
    }
    console.log(counter)
}

function part2(){
    let counter = 0
    for(let i = 0; i < input.length; i++){
        let one = getOne(input[i])
        let two = getTwo(input[i])
        let three = getThree(input[i])
        let four = getFour(input[i])
        let five = getFive(input[i])
        let six = getSix(input[i])
        let seven = getSeven(input[i])
        let eight = getEight(input[i])
        let nine = getNine(input[i])
        let zero = getZero(input[i])

        let data = input[i].split(" | ")[1].split(" ")
        
        for(let j = 0; j < data.length; j++){
            data[j] = sort(data[j])
        }

        
        let numberString = ''

        for(let j = 0; j < data.length; j++){
            if(data[j] == one){
                numberString = numberString + '1'
            }

            if(data[j] == two){
                numberString = numberString + '2'
            }

            if(data[j] == three){
                numberString = numberString + '3'
            }

            if(data[j] == four){
                numberString = numberString + '4'
            }

            if(data[j] == five){
                numberString = numberString + '5'
            }

            if(data[j] == six){
                numberString = numberString + '6'
            }

            if(data[j] == seven){
                numberString = numberString + '7'
            }

            if(data[j] == eight){
                numberString = numberString + '8'
            }

            if(data[j] == nine){
                numberString = numberString + '9'
            }    

            if(data[j] == zero){
                numberString = numberString + '0'
            }
        }
        counter = counter + parseInt(numberString)
    }
    console.log(counter)
}

function getOne(string){
    let data = string.split(" ")

    for(let i = 0; i < data.length; i++){
        if(data[i].length == 2){
            return sort(data[i])
        }
    }
}


function getTwoThreeOrFive(string){
    let twoThreeOrFive = new Set()
    let data = string.split(" ")

    for(let i = 0; i < data.length; i++){
        if(data[i].length == 5){
            twoThreeOrFive.add(sort(data[i]))
        }
    }

    return twoThreeOrFive
}

function getThree(string){
    let data = Array.from(getTwoThreeOrFive(string))
    let seven = getSeven(string)
    let three = new Set()

    for(let i = 0; i < data.length; i++){
        if(data[i].includes(seven.charAt(0)) && data[i].includes(seven.charAt(1)) && data[i].includes(seven.charAt(2))){
            return data[i]
        }
    }
}

function getTwoOrFive(string){
    let data = Array.from(getTwoThreeOrFive(string))
    let seven = getSeven(string)
    let twoOrFive = new Set()

    for(let i = 0; i < data.length; i++){
        if(!(data[i].includes(seven.charAt(0)) && data[i].includes(seven.charAt(1)) && data[i].includes(seven.charAt(2)))){
            twoOrFive.add(data[i])
        }
    }
    return twoOrFive
}    

function getFive(string){
    let nine = getNine(string)
    let data = Array.from(getTwoOrFive(string))

    for(let i = 0; i < data.length; i++){
        if(nine.includes(data[i].charAt(0)) && nine.includes(data[i].charAt(1)) && nine.includes(data[i].charAt(2)) && nine.includes(data[i].charAt(3)) && nine.includes(data[i].charAt(4))){
            return sort(data[i])
        }
    }
}

function getTwo(string){
    let nine = getNine(string)
    let data = Array.from(getTwoOrFive(string))

    for(let i = 0; i < data.length; i++){
        if(!(nine.includes(data[i].charAt(0)) && nine.includes(data[i].charAt(1)) && nine.includes(data[i].charAt(2)) && nine.includes(data[i].charAt(3)) && nine.includes(data[i].charAt(4)))){
            return sort(data[i])
        }
    }
}

function getSeven(string){
    let data = string.split(" ")

    for(let i = 0; i < data.length; i++){
        if(data[i].length == 3){
            return sort(data[i])
        }
    }
}

function getEight(string){
    let data = string.split(" ")

    for(let i = 0; i < data.length; i++){
        if(data[i].length == 7){
            return sort(data[i])
        }
    }
}

function getZeroSixOrNine(string){
    let data = string.split(" ")
    let ZeroThreeSixOrNine = new Set()

    for(let i = 0; i < data.length; i++){
        if(data[i].length == 6){
            ZeroThreeSixOrNine.add(sort(data[i]))
        }
    }
    return ZeroThreeSixOrNine
}

function getNine(string){
    let four = getFour(string)
    let data = Array.from(getZeroSixOrNine(string))
    let sixOrNine = new Set()


    for(let i = 0; i < data.length; i++){
        if(data[i].includes(four.charAt(0)) && data[i].includes(four.charAt(1)) && data[i].includes(four.charAt(2)) && data[i].includes(four.charAt(3))){
            return sort(data[i])
        }
    }
}

function getZeroOrSix(string){
    let four = getFour(string)
    let data = Array.from(getZeroSixOrNine(string))        
    let zeroOrSix = new Set()

    for(let i = 0; i < data.length; i++){
        if(!(data[i].includes(four.charAt(0)) && data[i].includes(four.charAt(1)) && data[i].includes(four.charAt(2)) && data[i].includes(four.charAt(3)))){
            zeroOrSix.add(sort(data[i]))
        }
    }

    return zeroOrSix
}


function getZero(string){
    let one = getOne(string)
    let sixOrNine = Array.from(getZeroOrSix(string))
    if(sixOrNine[0].includes(one.charAt(0)) && sixOrNine[0].includes(one.charAt(1))){
        return sixOrNine[0]
    }
    return sixOrNine[1]
}

function getSix(string){
    let one = getOne(string)
    let sixOrNine = Array.from(getZeroOrSix(string))
    if(sixOrNine[0].includes(one.charAt(0)) && sixOrNine[0].includes(one.charAt(1))){
        return sixOrNine[1]
    }
    return sixOrNine[0]
}

function getFour(string){
    let data = string.split(" ")

    for(let i = 0; i < data.length; i++){
        if(data[i].length == 4){
            return sort(data[i])
        }
    }
}

//stole this from google
const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');

const input = readFile("inputs/day8.txt")
part1()
part2()