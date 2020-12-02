import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing'; 
 
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { QuestionComponent } from 'app/question/question.component';
import { UserProfileComponent } from 'app/user-profile/user-profile.component';
import { TableListComponent } from 'app/table-list/table-list.component';
import { IconsComponent } from 'app/icons/icons.component';
import { ShowListSongComponent } from 'app/show-list-song/show-list-song.component';
import { AddSingerComponent } from 'app/add-singer/add-singer.component';
import { AddPlaylistComponent } from 'app/add-playlist/add-playlist.component';
import { ShowCreatorPlaylistComponent } from 'app/show-creator-playlist/show-creator-playlist.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [ 
    UserProfileComponent,
    TableListComponent,
    IconsComponent,
    QuestionComponent,
    ShowListSongComponent,
    // ShowCreatorPlaylistComponent
  ]
})

export class AdminLayoutModule {}
