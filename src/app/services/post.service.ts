import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  private post:post[]=[
    {
      id:1,
      namePost:"Primera publicacion",
      image: "assets/img/DemoPost",
      nameUser: "Sebastian"
    }
  ]
}



export interface post{
  id?:number;
  namePost:string;
  image:string;
  nameUser:string;

}
