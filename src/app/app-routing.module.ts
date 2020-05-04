import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinComponent } from './component/join/join.component';
import { CreateComponent } from './component/create/create.component';
import { LobbyComponent } from './component/lobby/lobby.component';
import { WordsInputComponent } from './component/words-input/words-input.component';


const routes: Routes = [
  { path: 'join', component: JoinComponent },
  { path: 'create', component: CreateComponent },
  { path: 'lobby', component: LobbyComponent },
  { path: 'game', component: WordsInputComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
