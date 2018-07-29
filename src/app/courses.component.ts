import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <input [(ngModel)]="email" (keyup.enter)="onEnter()" />        
    `
})
export class CoursesComponent {
    email="me@email.com";

    onEnter(){
        console.log(this.email);
        
    }
}