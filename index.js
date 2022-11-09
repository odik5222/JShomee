
let nms = ['Abbos', 'Valentina', 'Odilbek', 'Shaxzod', 'Xojik',
    'Emil', 'Saidbek', 'Instasamka', 'Morgenshter', 'Daler']
let long_name = nms.reduce((a, b) => {
    if (a.length > b.length) {
        return a
    } else {
        return b
    }
})
console.log(long_name);




// Отфильтровать задачи в переменные а и b
// Сохранить количество в ключе count
// Сохранить сами задачи в массиве-ключе arr
let arr = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut au`tem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",

        "completed": false
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,

        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
]
let a = {
 
    arr: []
}

let b = {

    arr: []
}

arr.filter(item => {
    let key = item.completed
    if (key === true) {
        a.arr.push(item)
        a.count = a.count + 1
    } else if (key === false) {
        b.count = b.count + 1
        b.arr.push(item)
    }
})

console.log(a, b);