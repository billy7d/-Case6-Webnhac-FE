import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/_services/token-storage.service';

@Component({
  selector: 'app-add-singer',
  templateUrl: './add-singer.component.html',
  styleUrls: ['./add-singer.component.css']
})
export class AddSingerComponent implements OnInit {
  singer: any= {
    name: "",
    gender: "",
    birthday: Date,
    musicType: "",
    story: "",
    band: "",
    tuan: "",
    view: "",
    valuesSong:""
  }
  currentUser: any;
  song: any= [];
  constructor(private router: Router,private fb: FormBuilder, private http:HttpClient,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.getAllSong();
    this.currentUser = this.token.getUser();
  }
  getAllSong(){
    debugger
    this.http.get("http://localhost:8080/songs")
    .subscribe(res => {
        this.song= res;}, err => {  window.alert("Sai rồi bạn!")})
  }

  onclickAdd(){
    for (const i in this.singer.tuan) {
      this.singer.tuan[i] = parseInt(this.singer.tuan[i]);
    }
    
    this.http.post  ("http://localhost:8080/singers/create",this.singer)
  .subscribe(res => {
      window.alert("add thanh cong");}, err => {  window.alert("Sai rồi bạn!")})
  }
}
