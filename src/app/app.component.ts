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
    "015", 
    "default", 
    "morning", 
    true
  );
  hasTopicError: boolean = true;

  topicChange(value: string) {
    console.log("value: " + value);

    if(value=="default") {
      this.hasTopicError = true;
    } else {
      this.hasTopicError = false;
    }
  }

  onSubmit() {
    console.log(this.userModel);
  }

}
