import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Word {
  name: string,
  category: string,
  letter: string
}

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(private http: HttpClient) {}

  getAllCats(): Observable<Word[]> {
    return this.http.get<Word[]>('http://localhost:3000/api/words');
  }

  getCat(name: string): Observable<Word> {
    return this.http.get<Word>('http://localhost:3000/api/words/' + name);
  }

  insertWord(word: Word): Observable<Word> {
    return this.http.post<Word>('http://localhost:3000/api/words/', word);
  }

  updateWord(word: Word): Observable<void> {
    return this.http.put<void>(
      'http://localhost:3000/api/cats/' + word.name,
      word
    )
  }

  deleteWord(name: string) {
    return this.http.delete('http://localhost:3000/api/words/' + name);
  }
}
