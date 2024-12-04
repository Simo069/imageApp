import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Images } from '../Models/images';


@Injectable({
  providedIn: 'root'
})
export class DisplayImageService {

  constructor(private httpClient:HttpClient) {

  }
  private apiUrl="http://localhost:3000/hits";

  getImages() : Observable <Images[]>{
    return this.httpClient.get<Images[]>(this.apiUrl);
  };
  getImageById(imageId:number): Observable <Images>{
    return this.httpClient.get<Images>(`${this.apiUrl}/${imageId}`);
  }
  deleteImage(imageId:number):Observable<void>{
    return this.httpClient.delete<void>(`${this.apiUrl}/${imageId}`);
  }
}
