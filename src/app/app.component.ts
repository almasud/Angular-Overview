import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  userModel = new User(
    "Almasud", 
    "dev.almasud@gmail.com", 
    "015000000", 
    this.topics[0], 
    "morning", 
    true
  );
}
