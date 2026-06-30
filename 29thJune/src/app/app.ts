import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
    todoText = "";
    todoArr = signal<any>([]);

  addTodo(): void {
    let obj = {
      id: Date.now(),
      title: this.todoText,
      completed: false
    };
    this.todoArr.set([...this.todoArr(), obj]);
  }

  onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.todoText = inputElement.value;
  }

  deleteTodo(id: number): void {
    this.todoArr.set(this.todoArr().filter((todo: any) => todo.id !== id));
  }
}
