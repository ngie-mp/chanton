import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WordsService, Word } from 'src/app/service/words/words.service';
import io from "socket.io-client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  words: Word[];
  newWord: string;
  socket: any;

  constructor(private http: HttpClient,
              private wordService: WordsService) { }

  ngOnInit(): void {
    this.wordService.getAllCats().subscribe(e => {
      console.log("ee", e);
    })
  }

  join(): void {
    // this.socket = io("http://localhost:3000");
    this.wordService.getAllCats().subscribe(e => {
      console.log("ee", e);
      this.words = e;
    })

    this.socket.on('position', this.newWord);
  }

  create(): void {
    let item: Word;

    item = {
        name: this.newWord,
        category: '',
        letter: 'e'
    }

    console.log('word', this.newWord);

    this.wordService.insertWord(item).subscribe(e => {
      console.log('post', e);
    });
  }
}
