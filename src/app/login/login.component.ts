import { Component } from '@angular/core';

interface Todointer {
  Task1: string;
  Task2: string;
  Task3: string;
  Task4: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public todoArray: Todointer[] = [];

  public task1 = '';
  public task2 = '';
  public task3 = '';
  public task4 = '';

  ngOnInit() {
    // console.log('dfghjkl');
    // this.containerArray:Array = localStorage.getItem('local')
    console.log(this.todoArray);
    if (localStorage['todos']) {
      this.todoArray = JSON.parse(localStorage.getItem('todos')!)
      console.log(this.todoArray);

    } else {
      this.todoArray = []
    }


  }

  submit() {
    const loginSchema = {
      Task1: this.task1,
      Task2: this.task2,
      Task3: this.task3,
      Task4: this.task4
    }
    if (this.task1 === '' || this.task2 === '' || this.task3 === '' || this.task4 === '') {
      console.log('empty input');

    } else {
      // console.log(loginSchema);
      this.todoArray.push(loginSchema)
      // console.log(this.containerArray);
      // localStorage.user = this.containerArray
      localStorage.setItem('todos', JSON.stringify(this.todoArray))

    }
  }
  edit(index: number) {
    console.log('edit', index)
  }
  deleteitem(index: number) {
    this.todoArray.splice(index, 1);
    localStorage.setItem('local', JSON.stringify(this.todoArray));
    // console.log('delete', index)
  }
}
