import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Images } from '../Models/images';
import { DisplayImageService } from '../Services/display-image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifie-image',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modifie-image.component.html',
  styleUrl: './modifie-image.component.css',
})
export class ModifieImageComponent implements OnInit {
  id!: number | string;
  pageURL!: string | any;
  type!: string | any;
  tags!: string | any;
  previewURL!: string | any;
  previewWidth!: number | any;
  previewHeight!: number | any;
  webformatURL!: string | any;
  webformatWidth!: number | any;
  webformatHeight!: number | any;
  largeImageURL!: string | any;
  imageWidth!: number | any;
  imageHeight!: number | any;
  imageSize!: number | any;
  views!: number | any;
  downloads!: number | any;
  collections!: number | any;
  likes!: number | any;
  comments!: number | any;
  user_id!: number | any;
  user!: string | any;
  userImageURL!: string | any;

  newImage:Images={}as Images;
  constructor(
    private router: Router,
    private displayImageService: DisplayImageService,
    private route: ActivatedRoute
  ) {}
  image: Images = {} as Images;
  idImage!: any;
  ngOnInit(): void {
    this.idImage = this.route.snapshot.paramMap.get('id');
    console.log(this.idImage);
    // this.getImagebyId(this.idImage)
    this.displayImageService.getImageById(this.idImage).subscribe((image) => {
      this.image = image;
      if (this.image) {
        this.pageURL = this.image.pageURL;
        this.type = this.image.type;
        this.tags = this.image.tags;
        this.previewURL = this.image.previewURL;
        this.previewWidth = this.image.previewWidth;
        this.previewHeight = this.image.previewHeight;
        this.webformatURL = this.image.webformatURL;
        this.webformatHeight = this.image.webformatHeight;
        this.webformatWidth = this.image.webformatWidth;
        this.largeImageURL = this.image.largeImageURL;
        this.imageWidth = this.image.imageWidth;
        this.imageHeight = this.image.imageHeight;
        this.imageSize = this.image.imageSize;
        this.views = this.image.views;
        this.downloads = this.image.downloads;
        this.collections = this.image.collections;
        this.likes = this.image.likes;
        this.comments = this.image.comments;
        this.user_id = this.image.user_id;
        this.user = this.image.user;
        this.userImageURL = this.image.userImageURL;
      }
    });
  }
  // getImagebyId(idImage:number):void{

  //   this.pageURL=this.image.pageURL;
  // }
  addImage() {
    this.newImage = {
      pageURL: this.pageURL,
      type: this.type,
      tags: this.tags,
      previewURL: this.previewURL,
      previewWidth: this.previewWidth,
      previewHeight: this.previewHeight,
      webformatURL: this.webformatURL,
      webformatHeight: this.webformatHeight,
      webformatWidth: this.webformatWidth,
      largeImageURL: this.largeImageURL,
      imageWidth: this.imageWidth,
      imageHeight: this.imageHeight,
      imageSize: this.imageSize,
      views: this.views,
      downloads: this.downloads,
      collections: this.collections,
      likes: this.likes,
      comments: this.comments,
      user_id: this.user_id,
      user: this.user,
      userImageURL: this.userImageURL,
    };
    this.displayImageService.modifieImage(this.newImage,this.idImage).subscribe({
      next: (response) => {
        console.log('Image updated successfully ', response);
        this.resetForm();
        this.router.navigate([`images/${this.idImage}`]);
      },
      error: (error) => {
        console.error('Error update image ', error);
      },
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
