import { Routes } from '@angular/router';

import { DisplayImagesComponent } from './display-images/display-images.component';
import { DetailImageComponent } from './detail-image/detail-image.component';
import { AddImageComponent } from './add-image/add-image.component';
import { ModifieImageComponent } from './modifie-image/modifie-image.component';


export const routes: Routes = [
  {path:'images/add', component: AddImageComponent},
  {path:'images', component: DisplayImagesComponent},
  {path:'images/:id', component: DetailImageComponent},
  {path:'images/modifieImage/:id', component: ModifieImageComponent},
  
];
