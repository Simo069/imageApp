import { Routes } from '@angular/router';

import { DisplayImagesComponent } from './display-images/display-images.component';
import { DetailImageComponent } from './detail-image/detail-image.component';


export const routes: Routes = [
  {path:'images', component: DisplayImagesComponent},
  {path:'images/:id', component: DetailImageComponent},
  {path:'', component: DisplayImagesComponent},
];
