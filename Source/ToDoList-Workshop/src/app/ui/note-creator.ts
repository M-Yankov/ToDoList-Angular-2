import { Component, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'note-creator',
    template: `
<div class="note-creator shadow-2">
    <form class="row" (submit)="createNewNote()" >
    <input *ngIf="expanded"
        type="text"
        [(ngModel)]="newNote.title"
        name="newNoteTitle"
        placeholder="Title"
        class="col-xs-10 title"
    >
    <input
        type="text"
        (focus)="expand()"
        (focusout)="expand()"
        [(ngModel)]="newNote.value"
        name="newNoteValue"
        placeholder="Take a note..."
        class="col-xs-10"
    >

<label for="colorPick" class="col-xs-4">Select Color</label>
<label class="col-xs-4 color-preview" for="colorPick" [ngStyle]="{ 'background-color': newNote.color  }"  ></label>
<input id="colorPick" value="#ffffff" style="display:none" type="color" class="col-xs-10 color-picker" [(ngModel)]="newNote.color" name="newNoteColor" />

    <div class="actions col-xs-12 row between-xs">
        <button *ngIf="expanded"
        type="submit"
        class="btn-light"
        >
        Done
        </button>
    </div>
    </form>
</div>`,
    styles: [
        `
.note-creator {
    padding: 20px;
    background-color: white;
    border-radius: 3px;
}
.title {
    font-weight: bold;
    color: rgba(0,0,0,0.8);
}
.full {
    height: 100px;
}

.color-picker {
    border-radius: 20px;
}

.color-preview {
    width: 25px;
    height: 25px;
    border-radius: 20px;
    box-shadow: 1px 9px 15px white inset;
}
}
`   ]

})

export class NoteCreator {
    @Output() createNote = new EventEmitter()

    newNote = {
        title: '',
        value: '',
        color: ''
    }

    expanded: boolean = true;

    expand() {
        this.expanded = !this.expanded;
    }

    createNewNote() {
        const {title, value, color} = this.newNote

        if (title && value) {
            this.createNote.next({ title, value, color })

            this.newNote.title = ''
            this.newNote.value = ''
            this.newNote.color = 'white'
        }
    }
}