import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-list-song',
  templateUrl: './show-list-song.component.html',
  styleUrls: ['./show-list-song.component.css']
})
export class ShowListSongComponent implements OnInit {
  songs: any ={
    name: "",
    description: "",
    linkMp3: "",
    image:"",
    author: "",
    creator: "",
    musicType: "",
    album: ""
  };
  playlist: any = {
    name:"",
    musicType: "",
    description: "",
    songQuantity: "",
    dateCreated:"",
    view:Number
  }
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllSong();
    this.getAllPlaylist();
  }
getAllSong(){
  debugger
  this.http.get("http://localhost:8080/songs/newSong")
  .subscribe(res => {debugger
      this.songs= res;}, err => {  window.alert("Sai rồi bạn!")})
}
getAllPlaylist(){
  debugger
  this.http.get("http://localhost:8080/playlists/newPlaylist")
  .subscribe(res => {debugger
     this.playlist= res;}, err => {  window.alert("Sai rồi bạn!")})
}
}
