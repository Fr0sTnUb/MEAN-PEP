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
  imports: [FormsModule],
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
    this.todoText = "";
  }

  onInput(event: Event): void {
    this.todoText = (event.target as HTMLInputElement).value;
  }

  deleteTodo(id: number): void {
    this.todoArr.set(this.todoArr().filter((todo: Todo) => todo.id !== id));
  }

}

