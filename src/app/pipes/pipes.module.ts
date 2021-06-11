import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonPipePipe } from './mon-pipe.pipe';
@NgModule({
  declarations: [MonPipePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
