import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/Product";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: "root"
})
export class NewListService {
  private _url: string = "https://demo9165932.mockable.io/products";
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this._url);
  }
}
