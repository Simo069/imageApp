import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Images } from '../Models/images';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { DisplayImageService } from '../Services/display-image.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { SearchService } from '../Services/shared/search.service';



// @Component({
//   selector: 'app-display-images',
//   standalone: true,
//   imports: [RouterModule, CommonModule, NgxPaginationModule],
//   templateUrl: './display-images.component.html',
//   styleUrl: './display-images.component.css'
// })
// export class DisplayImagesComponent implements OnInit{
//   images:Images[]=[];
//   filteredImages:Images[]=[];

//   currentPage!:number;
//   p:number=1;
//   itemPerPage:number=6;
//   searchTerm!:string;
//   constructor(private displayImageService: DisplayImageService , private searchService:SearchService , private route : ActivatedRoute){

//   }

//   ngOnInit():void{
//     console.log("test 3")
//     this.getImages();
//     console.log("images ",this.images)
//     this.searchService.currentSearchTerm.subscribe((term) => {
//       this.filterImages(term);
//       this.searchTerm=term;
//       console.log("test 3-b",this.searchTerm)
//     });
//     this.filterImages(this.searchTerm);
//     this.route.queryParams.subscribe(() => {
//       this.getImages();
//       console.log("test 4",this.images)
//     });
//   }

//   getImages(): void{
//     this.displayImageService.getImages().subscribe((x)=>{
//       this.images=x;
//     })
//   }
//   filterImages(term:string){
//     if(term){
//       console.log("test 5", term)
//       this.filteredImages = this.images.filter((image) => {
//         return image.tags
//           ?.toLowerCase()
//           .split(',')
//           .some((tag) => tag.trim().includes(term.toLowerCase()));
//       });
//       console.log("filtered",this.filteredImages)
//       console.log("imahes",this.images)
//     }else{
//       console.log("test 5-b")
//       this.filteredImages=this.images;
//     }
//   }

// }

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
  confirmDelete(id:any):void{
    let confirmed=window.confirm("Are you sure you want to delete this image")
    if(confirmed && id){
      this.deleteImage(id)
    }
  }
  deleteImage(id:number):void{
    this.displayImageService.deleteImage(id).subscribe({
      next:(response)=>{
        console.log("Image deleted successfully !!");
        this.images=this.images.filter(image=> image.id!=id);
        this.filterImages(this.searchTerm);
      },
      error:(error)=>{
        console.error('Error deleting image', error)
      }
    })
  }

}
