import { NgModule } from "@angular/core";
import { RepleacePipe } from "./replace.pipe";

@NgModule({
  declarations: [
    RepleacePipe,
  ],
  exports: [
    RepleacePipe
  ]
})

export class AppPipeModule { }