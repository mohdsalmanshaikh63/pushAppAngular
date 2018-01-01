import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppUser } from './app-user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable()
export class AppUserService {

  constructor(
    private http: HttpClient
  ) {
  }

  // API: GET /AppUsers
  public getAllAppUsers(): Observable<AppUser[]> {
    return this.http
      .get<AppUser[]>(API_URL + '/appUsers')
      .pipe(
        tap(appUsers => console.log('Fetched appUsers: ' + JSON.stringify(appUsers))),
        catchError(this.handleError('getAppUsers', []))
      );
  }

  // API: POST /AppUsers
  /* public createAppUser(appUser: AppUser) {
    return this.http
    .post(API_URL + '/appUsers', appUser)
    .map(response => {
      return new AppUser(response.json());
    })
    .catch(this.handleError);
  } */

  // API: GET /AppUsers/:id
  /* public getAppUserIdById(appUserId: number) {
    return this.http
    .get(API_URL + '/appUser/' + appUserId)
    .map(response => {
      return new AppUser(response.json());
    })
    .catch(this.handleError);
  } */

  // API: PUT /AppUsers/:id
  /* public updateAppUser(appUser: AppUser) {
    return this.http
    .put(API_URL + '/todos/' + appUser.id, appUser)
    .map(response => {
      return new AppUser(response.json());
    })
    .catch(this.handleError);
  } */

  // DELETE /AppUsers/:id
  /* public deleteAppUserById(appUserId: number) {
    return this.http
    .delete(API_URL + '/todos/' + appUserId)
    .map(response => null)
    .catch(this.handleError);
  } */

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('AppUserService: ' + message);
  }

}
