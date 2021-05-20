import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Image } from '../../image/image.model';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums: Album[] = [];
  images: Image[] = [];

  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchImages();
  }

  private fetchImages(){
    this.http.get<{ [key: string]: Image}>('https://jsonplaceholder.typicode.com/photos')
    .pipe(
      map(responseData => {
        const imageArrey: Image[] = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            imageArrey.push({...responseData[key]})
          }
        }
        return imageArrey;
      })
    )
    .subscribe(imageData => {
       this.images = imageData;
       this.fetchAlbums();
    })
  }

  private fetchAlbums(){

    
    this.http.get<{ [key: string]: Album}>('https://jsonplaceholder.typicode.com/albums')
    .pipe(
      map(responseData => {
        const albumArray: Album[] = [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            responseData[key].countImage = this.images.filter((i: Image)=> i.albumId === responseData[key].id).length;
            responseData[key].imageUrl = this.images.filter((i: Image) => i.albumId === responseData[key].id)[0].thumbnailUrl;
            albumArray.push({...responseData[key]})
          }
        }
        return albumArray;
      })
    )
    .subscribe(albumData => {
       this.albums = albumData;  
    })
  }
}
