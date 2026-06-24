console.log("Hello, World!");

const inputField = document.getElementById("inputField");

// const debounce = (func, delay) => {
//     let timer;
//     return function(...args) {
//         console.log(args);
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             func(...args);
//         }, delay);
//     };
// }
const apiCall = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data));
};

// const DebounceApiFn = debounce(apiCall, 500);

// inputField.addEventListener("input", () => {
//     DebounceApiFn(inputField.value);
// })

const throttle = (func, limit) => {
    let timer;
    return function(...args) {
        if (!timer) {
            func(...args);
            timer = setTimeout(() => {
                timer = null;
            }, limit);
        }
    };
};

const ThrottleApiFn = throttle(apiCall, 1000);

inputField.addEventListener("input", () => {
    ThrottleApiFn(inputField.value);
})

