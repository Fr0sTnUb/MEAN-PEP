let x: number = 10;
let str: string = "Hello, TypeScript!";
let isActive: boolean = true;

let temp: any = "This can be any type";
temp = 40;
temp = { name: "John", age: 30 };

function tempFn (p0: number, p1: number): number {
    let a: number = 5;
    let b: number = 10;
    return a + b;
}

tempFn(5, 10);
console.log(tempFn(5, 10));

function addition(): number {
    let a: number = 5;
    let b: number = 10;
    return a + b;
}
addition();
console.log(addition());

const result = tempFn(5,10);
console.log(result);

let arr: number[] = [1, 2, 3, 4, 5];

let arr2: Array<string> = ["Hello", "World", "TypeScript"];
console.log(arr);
console.log(arr2);

let unknownData: unknown = "This is an unknown type";
unknownData = 42;

if (typeof unknownData === "string") {
    console.log("The unknown data is a string: " + unknownData);
}

if (typeof unknownData === "number") {
    console.log("The unknown data is a number: " + unknownData);
}

function t1(name: string, age?: number): string {
    if(age){
        return `Name: ${name}, Age: ${age}`;
    }
    return `Name: ${name}`;
}

interface Person {
    name: string;
    age: number;
    class: string;
}

let obj: Person = {
    name: "Alice",
    age: 25,
    class: "10th Grade"
};

type admin = "Head" | "Manager" | "Employee";

let personA: admin = "Head";

//Linked List using TypeScript
class LinkedList<T> {
    public data: T;
    public next: LinkedList<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class Students{
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

//Creating objects of Students class

let student1 = new Students("Alice", 20);
let student2 = new Students("Bob", 22);

//Inheritance in TypeScript
class PersonDetails {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class EmployeeDetails extends PersonDetails {
    employeeId: number;
    constructor(name: string, age: number, employeeId: number) {
        super(name, age);
        this.employeeId = employeeId;
    }
}

//Creating a accordion using TypeScript

interface AccordionItem {
  id: number;
  title: string;
  content: string;
  isOpen?: boolean;
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: "What is TypeScript?",
    isOpen: false,
    content:
      "TypeScript is a strongly typed programming language that builds on JavaScript and adds static typing."
  },
  {
    id: 2,
    title: "What is React?",
    isOpen: false,
    content:
      "React is a JavaScript library for building user interfaces using reusable components."
  },
  {
    id: 3,
    title: "What is an Accordion?",
    isOpen: false,
    content:
      "An accordion is a UI component that allows users to expand and collapse sections of content."
  },
  {
    id: 4,
    title: "Why use TypeScript?",
    isOpen: false,
    content:
      "TypeScript helps catch errors during development and improves code maintainability."
  }
];

// function toggleAccordion(id: number): void {
//     console.log(accordionData[id]);
//     // console.log(accordionData[id].isOpen);
//     accordionData[id].isOpen = !accordionData[id].isOpen;
// }

// toggleAccordion(0);

// console.log(accordionData[0].isOpen);