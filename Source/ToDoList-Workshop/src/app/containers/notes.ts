import { Component, OnInit } from '@angular/core'
import { NotesService } from '../inject-services/notes'

@Component({
    selector: 'notes-container',
    template: `
<div class="row center-xs notes">
    <div class="col-xs-6 creator">
    <note-creator (createNote)="addNote($event)"> </note-creator>
    </div>
    <div class="notes col-xs-8">
    <div class="row">
        <note-card 
        class="col-xs-4"  
        *ngFor="let note of myNotes;"
        [notedata]="note"
        (cardRemoved)="removeNoteCard(note)"
        >
        </note-card>
    </div>
    </div>
</div>`,
    styles: [`.notes {
    padding-top: 50px;
}
.creator {
    margin-bottom: 40px; 
}das`]
})

export class NotesContainer implements OnInit {
    myNotes = []

    // called before component is visualizated
    // HTML is not visualizated until data is ready(fetched)  
    // prevent fashing
    ngOnInit() {
        this.noteService.getNotes()
            .subscribe(response => this.myNotes = response.data)
    }

    constructor(private noteService: NotesService) { }

    removeNoteCard(note) {
        this.noteService.completeNote(note).subscribe(response => {
            console.log(response)
            let index = this.myNotes.findIndex(localNote => localNote.id === response.id)
            this.myNotes.splice(index, 1)
        })

    }

    addNote(note) {
        this.noteService.createNote(note).subscribe(n => {
            this.myNotes.push(n)
        })
    }
}