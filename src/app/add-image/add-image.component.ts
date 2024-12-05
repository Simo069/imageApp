import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Images } from '../Models/images';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisplayImageService } from '../Services/display-image.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-image',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './add-image.component.html',
  styleUrl: './add-image.component.css'
})
export class AddImageComponent implements OnInit {

  constructor(private route:ActivatedRoute , private displayImageService:DisplayImageService , private router:Router ){

  }
  ngOnInit(): void {

  }
  newImage:Images={}as Images;

  id!:number| string;
  pageURL!: string;
  type!: string;
  tags!: string;
  previewURL!: string;
  previewWidth!:number  | any;
  previewHeight!:number  | any;
  webformatURL!: string;
  webformatWidth!:number  | any;
  webformatHeight!:number  | any;
  largeImageURL!: string;
  imageWidth!:number  | any;
  imageHeight!:number  | any;
  imageSize!:number  | any;
  views!:number  | any;
  downloads!:number  | any;
  collections!:number  | any;
  likes!:number  | any;
  comments!:number  | any;
  user_id!:number  | any;
  user!: string;
  userImageURL!: string;
  addImage(){
    console.log(this.pageURL)
    console.log(this.type)
    console.log(this.tags)
    console.log(this.previewURL)
    console.log(this.previewWidth)
    console.log(this.previewHeight)
    console.log(this.webformatURL)
    console.log(this.webformatHeight)
    console.log(this.webformatWidth)
    console.log(this.largeImageURL)
    console.log(this.imageWidth)
    console.log(this.imageHeight)
    console.log(this.imageSize)
    console.log(this.views)
    console.log(this.downloads)
    console.log(this.collections)
    console.log(this.likes)
    console.log(this.comments)
    console.log(this.user_id)
    console.log(this.user)
    console.log(this.userImageURL)
    this.newImage={
        pageURL:this.pageURL,
        type:this.pageURL,
        tags:this.tags,
        previewURL:this.previewURL,
        previewWidth:this.previewWidth,
        previewHeight:this.previewHeight,
        webformatURL:this.webformatURL,
        webformatHeight:this.webformatHeight,
        webformatWidth:this.webformatWidth,
        largeImageURL:this.largeImageURL,
        imageWidth:this.imageWidth,
        imageHeight:this.imageHeight,
        imageSize:this.imageSize,
        views:this.views,
        downloads:this.downloads,
        collections:this.collections,
        likes:this.likes,
        comments:this.comments,
        user_id:this.user_id,
        user:this.user,
        userImageURL:this.userImageURL
    }
    this.displayImageService.addImage(this.newImage).subscribe({
      next : (response)=>{
        console.log('Contact created successfully ',response);
        this.resetForm();
        this.router.navigate(['images'])
      },
      error:(error)=>{
        console.error('Error add image ',error)
      }
    });
  }
  resetForm(){
    this.pageURL='';
    this.type='';
    this.tags='';
    this.previewURL='';
    this.previewWidth='';
    this.previewHeight='';
    this.webformatURL='';
    this.webformatHeight='';
    this.webformatWidth='';
    this.largeImageURL='';
    this.imageWidth='';
    this.imageHeight='';
    this.imageSize='';
    this.views='';
    this.downloads='';
    this.collections='';
    this.likes='';
    this.comments='';
    this.user_id='';
    this.user='';
    this.userImageURL='';
  }
  
}
