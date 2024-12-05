import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayImageService } from '../Services/display-image.service';
import { DisplayImagesComponent } from '../display-images/display-images.component';
import { Images } from '../Models/images';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-image',
  standalone: true,
  imports: [],
  templateUrl: './detail-image.component.html',
  styleUrl: './detail-image.component.css'
})
export class DetailImageComponent {
  imageId!:any;
  image!:Images;
  constructor(private route:ActivatedRoute , private displayImagesService:DisplayImageService , private router:Router){

  }
  ngOnInit(){
    this.imageId=this.route.snapshot.paramMap.get('id');
    this.getImageById();
    console.log("id",this.imageId)
  }
  getImageById():void{
    this.displayImagesService.getImageById(this.imageId).subscribe((x)=>{
      this.image=x;
      console.log(this.image);
    })
  }
  confirmDelete(id:any):void{
    let confirmed=window.confirm("Are you sure you want to delete this image")
    if(confirmed && id){
      this.deleteImage(id)
    }
  }
  deleteImage(id:number):void{
    this.displayImagesService.deleteImage(id).subscribe({
      next:(response)=>{
        console.log("Image deleted successfully !!");
        // this.images=this.images.filter(image=> image.id!=id);
        // this.filterImages(this.searchTerm);
        this.router.navigate(['images'])
      },
      error:(error)=>{
        console.error('Error deleting image', error)
      }
    })
  }
  modifierImage(idImage:any){
    this.router.navigate([`images/modifieImage/${idImage}`])
  }
}
