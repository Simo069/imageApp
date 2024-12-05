import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  private searchTerm = new BehaviorSubject<string>('');
  currentSearchTerm = this.searchTerm.asObservable();
  updateSearchTerm(term: string) {
    this.searchTerm.next(term);
  }
}
