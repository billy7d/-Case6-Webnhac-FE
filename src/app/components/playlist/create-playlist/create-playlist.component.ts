import { Component, OnInit } from '@angular/core';
import { PlaylistService } from 'app/services/playlist/playlist.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {

 
  songs: any ={
  };

  idPlaylist:number;

  listIdSong:[];
 
  playlist:any = {
    name: '',
    musicType: '',
    description:'',
    songQuantity:[],
    view:0,
    creator:null,


  };


  constructor(private playlistService:PlaylistService, private actRouter:ActivatedRoute, private router:Router) {
   
   }

  ngOnInit(): void {
    
    this.getAllSong();
  }

  getPlaylistById(id) {
    this.playlistService.getPlaylistById(id)
        .then(res => {
          this.playlist = res;

        }, error => window.alert('errorr'));

  }

  getAllSong(){
    this.playlistService.getAllSong()
    .then(res =>{
      this.songs = res;
    },err =>window.alert("has error"));
  }

  createPlaylist(){
    debugger
    for (const i in this.listIdSong) {
     let songToAdd = {"id":parseInt(i)}
     this.playlist.songQuantity.push(songToAdd);
    }
    this.playlistService.createPlaylist(this.playlist)
    .then(res => {
      window.alert("add success")
      // this.playlist = res;
      this.listIdSong = null;
      this.playlist.songQuantity=null;
      window.location.reload();
      
     
    }).catch(err =>{
      window.alert("error");
      this.listIdSong = null;
      this.playlist.songQuantity=null;
  
    });
  }
}
