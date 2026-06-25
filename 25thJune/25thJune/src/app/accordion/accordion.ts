import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.html',
  styleUrl: './accordion.css',
})
export class Accordion {

  accordionData= [
    {
      title: "What is TypeScript?",
      isOpen: false,
      content:
        "TypeScript is a strongly typed programming language that builds on JavaScript and adds static typing."
    },
    {
      title: "What is React?",
      isOpen: false,
      content:
        "React is a JavaScript library for building user interfaces using reusable components."
    },
    {
      title: "What is an Accordion?",
      isOpen: false,
      content:
        "An accordion is a UI component that allows users to expand and collapse sections of content."
    },
    {
      title: "Why use TypeScript?",
      isOpen: false,
      content:
        "TypeScript helps catch errors during development and improves code maintainability."
    }
  ]
  toggleAccordion(index: number): void {
    this.accordionData[index].isOpen = !this.accordionData[index].isOpen;
  }
};  

