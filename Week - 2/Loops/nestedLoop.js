// Nested Loops

for (var i = 1; i <= 2; i++) {

    for (var j = 1; j <= 5; j++) {
        console.log("Week "+ i +  " day " + j);
    }
}



/*
OUTPUTS

Week 1 day 1
Week 1 day 2
Week 1 day 3
Week 1 day 4
Week 1 day 5
Week 2 day 1
Week 2 day 2
Week 2 day 3
Week 2 day 4
Week 2 day 5

*/


// More the nested loops slower the code will run.


for (var year = 2023; year < 2025; year++) {
    console.log(year)
    for (var month = 6; month < 9; month++) {
        console.log("------- " + month);
    }
}

/*
OUTPUT

2023
------- 6
------- 7
------- 8
2024
------- 6
------- 7
------- 8


*/