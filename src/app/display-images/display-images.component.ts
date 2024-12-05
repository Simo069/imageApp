import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Images } from '../Models/images';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { DisplayImageService } from '../Services/display-image.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchService } from '../Services/shared/search.service';





@Component({
  selector: 'app-display-images',
  standalone: true,
  imports: [RouterModule, CommonModule, NgxPaginationModule],
  templateUrl: './display-images.component.html',
  styleUrl: './display-images.component.css'
})
export class DisplayImagesComponent implements OnInit {
  images: Images[] = [];
  filteredImages: Images[] = [];

  p: number = 1;
  itemPerPage: number = 8;
  searchTerm: string = '';

  constructor(
    private displayImageService: DisplayImageService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {

    this.displayImageService.getImages().subscribe((images) => {
      this.images = images;
      this.searchService.currentSearchTerm.subscribe((term) => {
        this.searchTerm = term;
        this.filterImages(term);
      });
    });
  }

  filterImages(term: string) {
    if (!term) {
      this.filteredImages = this.images;
      return;
    }

    this.filteredImages = this.images.filter((image) =>
      image.tags
        ?.toLowerCase()
        .split(',')
        .some((tag) => tag.trim().includes(term.toLowerCase()))
    );
  }
  // confirmDelete(id:any):void{
  //   let confirmed=window.confirm("Are you sure you want to delete this image")
  //   if(confirmed && id){
  //     this.deleteImage(id)
  //   }
  // }
  // deleteImage(id:number):void{
  //   this.displayImageService.deleteImage(id).subscribe({
  //     next:(response)=>{
  //       console.log("Image deleted successfully !!");
  //       this.images=this.images.filter(image=> image.id!=id);
  //       this.filterImages(this.searchTerm);
  //     },
  //     error:(error)=>{
  //       console.error('Error deleting image', error)
  //     }
  //   })
  // }

}
