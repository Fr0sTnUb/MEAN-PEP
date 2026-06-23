//setTimeouts, Promises, Debounce, Throttle, Mini(project) - 23rd June
//Timex functions - setTimeout, setInterval, clearTimeout, clearInterval
// console.log("1\n");

// setTimeout(() => {
//     console.log("4\n");
//     setTimeout(() => {
//         console.log("10\n");
//         setTimeout(() => {
//             console.log("9\n");
//         }, 1000);
//     }, 0);
// }, 1000);

// setTimeout(() => {
//     console.log("3\n");
//     setTimeout(() => {
//         console.log("8\n");
//     }, 2000);
//     setTimeout(() => {
//         console.log("7\n");
//     }, 0);
// }, 0);


// console.log("5\n");

// let x = 1;
// const time = setInterval(() => {
//     console.log(`Hello, x is: ${x}`);
//     x++;
// }, 1000);

// setTimeout(() => {
//     clearInterval(time);
//     console.log("Interval cleared");
// }, 10000);

// const TimerId = document.getElementById("timerId");

// console.log(TimerId);

// let x = 0;
// setInterval(() => {
//     TimerId.innerHTML = `${x}`;
//     x++;
// }, 1000);

// const stopWatch = document.getElementById("stopWatch");

// const minutes = document.getElementById("minutes");
// const seconds = document.getElementById("seconds");
// const milliseconds = document.getElementById("milliseconds");
// const startBtn = document.getElementById("startbtn");
// const stopBtn = document.getElementById("stopbtn");

// console.log(seconds);

// let sec = 0;
// let min = 0;
// let ms = 0;
// let currTime;

// function startTimer() {
//     currTime = setInterval(() => {
//         if(ms < 60000){
//             ms += 1000;
//         } else {
//             ms = 0;
//         }
//         if (sec < 60) {
//             sec++;
//         } else {
//             sec = 0;
//             min++;
//         }
//         seconds.innerHTML = `${sec}`;
//         minutes.innerHTML = `${min}`;
//         milliseconds.innerHTML = `${ms}`;
//     }, 1000);  
// };

// startBtn.addEventListener("click", () => {
//     startTimer();
// });


// stopBtn.addEventListener("click", () => {
//     clearInterval(currTime);
//     sec = 0;
//     min = 0;
//     ms = 0;
//     seconds.innerHTML = `${sec}`;
//     minutes.innerHTML = `${min}`;
//     milliseconds.innerHTML = `${ms}`;
// });


//TRY TO INTRODUCE A MILISECOND PARAMETER

//PROMISE

// const promise = new Promise((res, rej) => {
//     setTimeout(() => {
//         // console.log("Promise resolved");
//         rej("Promise rejected");
//     }, 1000);
// })
// .then((data) => {
//     return data;
// })
// .then((d) => {
//     console.log(d.toUpperCase());
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {
//     console.log("Promise completed");
// });

//CREATING PIZZA USING PROMISES

// const dough = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("Dough is ready");
//     }, 1000);
// })
// .then((data) => {
//     return data;
// }) 
// .then((d) => {
//     console.log(d);
// })
// .catch((err) => {
//     console.log(err);
// });

// const saucages = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("Saucages are ready");
//     }, 2000);
// })
// .then((data) => {
//     console.log(data);
// })
// .then((d) => {
//     console.log(d);
// })
// .catch((err) => {
//     console.log(err);
// });

// const cheese = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej("Cheese is ready");
//     }, 3000);
// })
// .then((data) => {
//     console.log(data);
// })
// .then((d) => {
//     console.log(d);
// })
// .catch((err) => {
//     console.log(err);
// }) 
// .then(() => {
//     console.log("Pizza is ready");
// })
// .finally(() => {
//     console.log("Pizza making process completed");
// });


//2nd menthod


// const createDough = () => {
//     const promise = new Promise((res, rej) => {
//         setTimeout(() => {
//             res("Dough is ready");
//         }, 1000);
//     });
//     return promise;
// };

// const createSaucages = (d) => {
//     const promise = new Promise((res, rej) => {
//         setTimeout(() => {
//             res(`Pizza created with ${d}`);
//         }, 2000);
//     });
//     return promise;
// };

// const createCheese = (d) => {
//     const promise = new Promise((res, rej) => {
//         setTimeout(() => {
//             res(`Pizza created with ${d}`);
//         }, 3000);
//     });
//     return promise;
// };  

// createDough()
// .then((d) => {
//     console.log(d);
//     return createSaucages(d);
// })
// .then((s) => {
//     console.log(s);
//     return createCheese(s);
// })
// .then((c) => {
//     console.log(c);
// });

//FETCHING API DATA USING PROMISES

// const apiLink = "https://jsonplaceholder.typicode.com/users";

// function fetchData(apiLink) {
//     fetch(apiLink)
//     .then((d) => {
//         console.log(d);
//         return d.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// }

// fetchData(apiLink);

//FETCHING POKEMON API DATA USING PROMISES
//RENDERING IMAGE INTO BROWSER USING POKEMON API

const pokeApi = "https://pokeapi.co/api/v2/pokemon/eternatus";

async function fetchData(apiLink) {
    const data = await fetch(apiLink);
    const arr = await data.json();
    const img = document.createElement("img");
    img.src = arr.sprites.other["official-artwork"].front_default;
    document.body.appendChild(img);
    console.log(arr);
};

fetchData(pokeApi);

document.getElementById("input").addEventListener("input", (e) => {
    console.log(e.target.value);
});

