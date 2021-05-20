import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: Image[] = [];
  idAlbum: number = 0;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idAlbum = this.route.snapshot.params["id"];
    this.fetchImages();

  }
  goToLink(url: string){
    console.log(url);
    window.open(url, "_blank");
  }
  private fetchImages(){
    this.http.get<{ [key: string]: Image}>('https://jsonplaceholder.typicode.com/photos')
    .pipe(
      map(responseData => {
        const imageArrey: Image[] = [];
        console.log(this.idAlbum);
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
           
            if(responseData[key].albumId == this.idAlbum){
              console.log(responseData[key]);
              imageArrey.push({...responseData[key]})
            }
          }
        }
        return imageArrey;
      })
    )
    .subscribe(imageData => {
       this.images = imageData;
    })
  }

}
