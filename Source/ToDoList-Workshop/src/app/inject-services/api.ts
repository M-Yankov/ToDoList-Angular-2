import { Injectable } from '@angular/core'
import { HttpModule, Headers, Response, Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class Api {
    private applicationJson: string = 'application/json';
    private headers: Headers = new Headers({
        'Content-type': this.applicationJson,
        'Accept': this.applicationJson
    })

    private baseUrl: string = 'http://localhost:3500'

    constructor(private http: Http) { }

    /* same as above
    private http: Http
    constructor(httpObject: Http) {
        this.http = httpObject
    }
    */

    get(path: string): Observable<any> {
        path = `${this.baseUrl}${path}`
        return this.http.get(path, { headers: this.headers })
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    post(path: string, data) {
        path = `${this.baseUrl}${path}`
        return this.http.post(path, JSON.stringify(data), { headers: this.headers })
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    delete(path: string) {
        path = `${this.baseUrl}${path}`
        return this.http.delete(path, { headers: this.headers })
            .map(this.checkForErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    private getJson(resp: Response) {
        return resp.json()
    }

    private checkForErrors(resp: Response) {
        if (200 <= resp.status && resp.status < 300) {
            return resp;
        } else {
            let error = new Error(resp.statusText)
            error['response'] = resp
            console.log(error)
            throw error
        }
    }
}