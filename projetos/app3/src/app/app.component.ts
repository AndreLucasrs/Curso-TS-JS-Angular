import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app3';

  ngOnInit(): void {

    const config = {
      apiKey: 'AIzaSyB0TKFsDJ8zwSLuZ8vzeifPRi154oZYZ34',
      authDomain: 'jta-instagram-clone-edc78.firebaseapp.com',
      databaseURL: 'https://jta-instagram-clone-edc78.firebaseio.com',
      projectId: 'jta-instagram-clone-edc78',
      storageBucket: 'jta-instagram-clone-edc78.appspot.com',
      messagingSenderId: '22184565414'
    };
    firebase.initializeApp(config);
  }
}
