import { Component , OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchService } from '../../Services/shared/search.service';
import { throws } from 'assert';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  imageId!:any;
  constructor(private searchService:SearchService,private router:Router , private route:ActivatedRoute){

  }
  searchInput!:string;
  ngOnInit(): void {
    this.searchItem();
    this.imageId=this.route.snapshot.paramMap.get('id');
  }
  searchItem(){
    const term = this.searchInput?.trim();
    this.searchService.updateSearchTerm(term);
    this.router.navigate(['images']);
  }
  addImage(){
    console.log("test 1")
    this.router.navigate(['images/add']);
  }
}
