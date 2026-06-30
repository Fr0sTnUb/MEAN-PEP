import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  addTodo(): void {
    const title = this.newTodoTitle.trim();
    if (!title) return;

    const newTodo: Todo = {
      id: this.todos.length + 1,
      title,
      completed: false,
    };

    this.todos = [...this.todos, newTodo];
    this.newTodoTitle = '';
  }

  toggleTodoCompletion(todo: Todo): void {
    this.todos = this.todos.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
  }

  removeTodo(todo: Todo): void {
    this.todos = this.todos.filter((t) => t.id !== todo.id);
  }
}