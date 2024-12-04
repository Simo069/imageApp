import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisplayImageService } from '../Services/display-image.service';
import { DisplayImagesComponent } from '../display-images/display-images.component';
import { Images } from '../Models/images';

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
  constructor(private route:ActivatedRoute , private displayImagesService:DisplayImageService){

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
}
