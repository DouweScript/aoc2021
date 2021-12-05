import fs from "fs"

//still need to make this an module.exports
function readFile(path){
    let dataArray = []

    fs.readFileSync(path, "utf-8").split('/\r?\n').forEach(line =>{
        dataArray = line.split('\r\n')
    })
    
    return dataArray
}

function part1(){
    let forward = 0
    let down = 0
    let up = 0

    for(let i = 0; i < input.length; i++){
        let direction = input[i].split(" ");

        if(direction[0] === "forward"){
            forward = forward + parseInt(direction[1])
        }

        if(direction[0] === "down"){
            down = down + parseInt(direction[1])
        }

        if(direction[0] === "up"){
            up = up + parseInt(direction[1])
        }
    }

    let finalDepth = down - up
    let answer = forward * finalDepth
    console.log(answer)
}

function part2(){
    let forward = 0;
    let aim = 0;
    let depth = 0;

    for(let i = 0; i < input.length; i++){
        let direction = input[i].split(" ")

        if(direction[0] === "forward"){
            forward = forward + parseInt(direction[1])
            depth = depth + aim * parseInt(direction[1])
        }

        if(direction[0] === "down"){
            aim = aim + parseInt(direction[1])
        }

        if(direction[0] === "up"){
            aim = aim - parseInt(direction[1])
        }
    }

    let answer = forward * depth
    console.log(answer)
}

const input = readFile("inputs/day2.txt")
part1()
part2()