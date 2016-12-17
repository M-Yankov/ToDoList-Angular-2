import { Injectable } from '@angular/core'
import { Api } from './api'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class NotesService {
    private path: string = '/notes'

    constructor(private baseApi: Api) {

    }

    getNotes() : Observable<any> {
        return this.baseApi.get(this.path)
    }

    createNote(note) : Observable<any> {
        return this.baseApi.post(this.path, note)
    }

    completeNote(note) : Observable<any> {
        let completePath = `${this.path}/${note.id}`
        return this.baseApi.delete(completePath)
    }
}