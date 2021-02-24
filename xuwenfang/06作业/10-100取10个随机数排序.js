var arr = [];
for (var i = 0; i < 10; i++) {
    var number = Math.round(Math.random() * (100 - 10 + 1) + 10);
    arr.push(number)
    arr.sort((a, b) => {
        return a - b;
    })
}
console.log(arr);