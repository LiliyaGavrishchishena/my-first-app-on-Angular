import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { NewListService } from "../services/new-list.service";

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent],
  providers: [NewListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
