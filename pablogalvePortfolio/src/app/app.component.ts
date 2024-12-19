import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  firebaseConfig = {
    apiKey: "AIzaSyANKQeykuCh_bsYL5jhvmM9CvZOBwqyxrg",
    authDomain: "pablogalveportfolio.firebaseapp.com",
    projectId: "pablogalveportfolio",
    storageBucket: "pablogalveportfolio.firebasestorage.app",
    messagingSenderId: "359792275711",
    appId: "1:359792275711:web:4b0c716d4b8edde8d79cca",
    measurementId: "G-RRQPF6V33S"
  };
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
  title = 'pablogalvePortfolio';
}
