"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 10;
let str = "Hello, TypeScript!";
let isActive = true;
let temp = "This can be any type";
temp = 40;
temp = { name: "John", age: 30 };
function tempFn(p0, p1) {
    let a = 5;
    let b = 10;
    return a + b;
}
tempFn(5, 10);
console.log(tempFn(5, 10));
function addition() {
    let a = 5;
    let b = 10;
    return a + b;
}
addition();
console.log(addition());
const result = tempFn(5, 10);
console.log(result);
let arr = [1, 2, 3, 4, 5];
let arr2 = ["Hello", "World", "TypeScript"];
console.log(arr);
console.log(arr2);
let unknownData = "This is an unknown type";
unknownData = 42;
if (typeof unknownData === "string") {
    console.log("The unknown data is a string: " + unknownData);
}
if (typeof unknownData === "number") {
    console.log("The unknown data is a number: " + unknownData);
}
function t1(name, age) {
    if (age) {
        return `Name: ${name}, Age: ${age}`;
    }
    return `Name: ${name}`;
}
let obj = {
    name: "Alice",
    age: 25,
    class: "10th Grade"
};
let personA = "Head";
//Linked List using TypeScript
class LinkedList {
    data;
    next;
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Students {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
//Creating objects of Students class
let student1 = new Students("Alice", 20);
let student2 = new Students("Bob", 22);
//Inheritance in TypeScript
class PersonDetails {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class EmployeeDetails extends PersonDetails {
    employeeId;
    constructor(name, age, employeeId) {
        super(name, age);
        this.employeeId = employeeId;
    }
}
const accordionData = [
    {
        id: 1,
        title: "What is TypeScript?",
        isOpen: false,
        content: "TypeScript is a strongly typed programming language that builds on JavaScript and adds static typing."
    },
    {
        id: 2,
        title: "What is React?",
        isOpen: false,
        content: "React is a JavaScript library for building user interfaces using reusable components."
    },
    {
        id: 3,
        title: "What is an Accordion?",
        isOpen: false,
        content: "An accordion is a UI component that allows users to expand and collapse sections of content."
    },
    {
        id: 4,
        title: "Why use TypeScript?",
        isOpen: false,
        content: "TypeScript helps catch errors during development and improves code maintainability."
    }
];
function toggleAccordion(id) {
    console.log(accordionData[id]);
    // console.log(accordionData[id].isOpen);
    accordionData[id].isOpen = !accordionData[id].isOpen;
}
toggleAccordion(0);
console.log(accordionData[0].isOpen);
//# sourceMappingURL=index.js.map