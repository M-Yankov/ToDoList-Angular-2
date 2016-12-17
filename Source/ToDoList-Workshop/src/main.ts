import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { HttpModule } from '@angular/http'

import { App, Providers, routes } from './app'
import { MainContainer, NotesContainer, AboutContainer } from './app/containers'
import { NavigationBar, NoteCard, NoteCreator } from './app/ui'

@NgModule({
    declarations: [
        App,
        NavigationBar, NoteCard, NoteCreator,
        MainContainer, NotesContainer, AboutContainer
    ],
    imports: [BrowserModule, FormsModule, HttpModule, routes],
    providers: Providers,
    
    bootstrap: [App]
})

export class Main { }

platformBrowserDynamic().bootstrapModule(Main);