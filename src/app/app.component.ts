import { Component } from "@angular/core";
import { NewListService } from "../services/new-list.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [NewListService]
})
export class AppComponent {
  products = [];

  constructor(private newListService: NewListService) {}

  ngOnInit() {
    this.newListService.getProducts().subscribe((data: any) => {
      this.products = data.products;
      console.log(this.products);
    });
  }
}
