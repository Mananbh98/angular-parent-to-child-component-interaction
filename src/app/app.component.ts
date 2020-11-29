import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName: string;
  lastName: string;
  siblings: Array<string>;
  ngOnInit(){
      this.firstName = 'John';
      this.lastName = 'Doe';
      this.siblings = new Array<string>('Jane', 'Jack', 'Sophie');
  }
}
