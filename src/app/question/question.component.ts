import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  songs: any ={
    name: "",
    description: "",
    linkMp3: "",
    image:"",
    author: "",
    creator: "",
    musicType: "",
    album: "",
    view:Number
  };
  songses: any ={
    name: "",
    description: "",
    linkMp3: "",
    image:"",
    author: "",
    creator: "",
    musicType: "",
    album: "",
    view:Number
  };
 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllSong();
  
    
  }
  getAllSong(){
    this.http.get("http://localhost:8080/songs")
    .subscribe(res => {
      this.songs= res;
      var max= this.songs[0].view
      for (const i in this.songs) {
        if(max< this.songs[parseInt(i)].view){
          this.songses= this.songs[parseInt(i)]
        }
     }
    }, err => {  window.alert("Sai rồi bạn!")})
  }
 
 
}
