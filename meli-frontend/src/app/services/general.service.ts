import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class GeneralService {

  constructor(private http: HttpClient) { }

  search(search: String): Observable<any> {


    var url = `http://localhost:3071/api/items?q=${search}`;

    return this.http
      .get<null>(url)
      .pipe(map((data: any) => {
        return data;
      }
      ), catchError((error) => this.handleHttpError(error)));
  }

  getDetail(id: any): Observable<any> {


    var url = `http://localhost:3071/api/items/${id}`;

    return this.http
      .get<null>(url)
      .pipe(map((data: any) => {
        return data;
      }
      ), catchError((error) => this.handleHttpError(error)));
  }

  private handleHttpError(
    error: HttpErrorResponse
  ): Observable<any> {
    console.log("ERROR => ", error);
    return throwError("Un error a ocurrido obteniendo los datos.");
  }



}
