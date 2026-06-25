console.log("Hello, World!");

// const htmlDivElement = document.getElementById("root");
// const mybtnElement = document.getElementById("btn");
// function changeShape(randNum) {
//   if (randNum < 1) {
//     htmlDivElement.style.borderRadius = "50%"; 
//     } else {
//     htmlDivElement.style.borderRadius = "0%";
//   }
// }
let x = {
    x : 0,
    toString: function() {
        return this.x++;
    }
}

if(x == 0 && x == 1 && x == 2) {
    console.log("Condition met");
} else {
    console.log("Condition not met");
}
//console.log(htmlDivElement.style);
//console.log(Math.random()); 

// mybtnElement.addEventListener("click", () => {
//   htmlDivElement.style.backgroundColor = "red";
//   //console.log(Math.random());
//   const red = Math.random() * 255;
//   const green = Math.random() * 255;
//   const blue = Math.random() * 255;
//   htmlDivElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; //Template literals - '${variable}'
//   const randNum = Math.random() * 2;
//   changeShape(randNum);
// });

const employees = [
    {
        id : 1,
        name : "John",
        age : 30,
        address : {
            city : "New York",
            state : "NY"
        }   
    },
    {
        id : 2,
        name : "Jane",
        age : 25,
        address : {
            city : "Los Angeles",
            state : "CA"
        }
    },
    {
        id : 3,
        name : "Bob",
        age : 35,
        address : {
            city : "Chicago",
            state : "IL"
        }
    }
];

// const students = [
//     {
//         id : 1,
//         name : "Alice",
//         age : 20,
//         address : {
//             city : "San Francisco",
//             state : "CA"
//         }
//     },
//     {
//         id : 2,
//         name : "Charlie",
//         age : 22,
//         address : {
//             city : "Seattle",
//             state : "WA"
//         }
//     }
// ];

// for (i = 0; i < employees.length; i++) {
//     console.log(employees[i].name);
//     console.log(employees[i].address.city);
// };

//HOF - Higher Order Function
//forEach, map, filter, reduce, Find

// employees.forEach((e, i, arr) => {
//     console.log(e);
// });

// const ageArr = employees.map((ele, idx, arr) => {
//     if(ele.age > 25) {
//         return ele;
//     } else {
//         return null;
//     }
//     //return false;
// });

// console.log(ageArr);

// const ageArr = employees.filter((ele, idx, arr) => {
//     return ele.age > 25;
// });

// console.log(ageArr);

//Event Loops
//Async
const apiLink = "https://jsonplaceholder.typicode.com/users";

console.log("Before data");

async function fetchData(apiLink) {
    const data = await fetch(apiLink);
    const arr = await data.json();
    const updatedArr = arr.slice(0, 40);
    console.log(updatedArr);

    const container = document.getElementById("container");
    updatedArr.forEach((ele) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <p>${ele.name}</p>
            <p>${ele.email}</p>
            <p>${ele.address.city}, ${ele.address.state}</p>
        `;
        container.appendChild(div);
    });
};

fetchData(apiLink);

console.log("After data");