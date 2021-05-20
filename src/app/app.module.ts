import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumComponent } from './album/album.component';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageComponent } from './image/image.component';
import { ImageListComponent } from './image/image-list/image-list.component';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AlbumListComponent } ,
  { path: 'albums', component: AlbumListComponent } ,
  { path: 'images/:id', component: ImageListComponent } 

];

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    ImageComponent,
    ImageListComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
