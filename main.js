let column_1 = [3,8,4,6,6,6,5,5,9,3,1,5,9,3,5,3,5,3,5,1,6,3,5,7,3,7,4,9,1,8]
let sum_1 = sum(column_1)

let column_2 = [9,5,2,4,6,8,4,6,3,7,7,8,6,6,8,7,9,2,7,9,8,9,2,7,8,2,1,5,8]
let sum_2 = sum(column_2)

let column_3 = [69,76,51,62,40,75,77,43,87,85,57,88,74,56,58,74,64,93,48,65,44,63,65,45,58,86,75,82,69,48]
let sum_3 = sum(column_3)

let column_4 = [49,47,61,82,70,84,60,87,47,55,84,63,99,99,52,59,72,85,55,53,44,60,78,48,45,83,79,53,82,53]
let sum_4 = sum(column_4)

function sum  (column){
    let sum = 0
    for (let i=0; i<30; i++) {
        sum +=column[i]
    }
    return sum
}

let sums = [sum_1, sum_2, sum_3, sum_4]


const results = {
    col1: column_1,
    col2: column_2,
    col3: column_3,
    col4: column_4,
    sums1: sums,
    total_score:  sum_1 + sum_2 + sum_3 + sum_4
}

console.log(results);




