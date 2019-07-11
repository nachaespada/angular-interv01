import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FruitsComponent } from "./../fruits/fruits.ts";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, FruitsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
