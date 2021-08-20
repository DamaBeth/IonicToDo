import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../Interfaces/todo';
import { TodoPipe } from '../Pipes/todo.pipe';
import { TodoService } from '../Services/todo.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {
  public card: string;
  name: string;
  todos: Todo[];
  todo: Todo;

  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) {
    this.name = 'Noe';
    this.todo = {
      id: 1,
      title: 'Comprar manzanas',
      active: true,
      prioridad: 'baja',
    };
  }

  ngOnInit() {
    this.card = this.activatedRoute.snapshot.paramMap.get('id');
    this.todoService.getTodos().subscribe((todos) => {
      console.log(todos);
      this.todos = todos;
    });
  }

  addTodo() {
    console.log('Add Todo');
    this.todoService.createTodo({
      id: 8,
      title: 'Comprar sodas',
      active: true,
      prioridad: 'baja',
    });
  }
}