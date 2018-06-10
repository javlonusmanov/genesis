import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    host: {
        '(document:click)': 'toggleFromOutside()',
    },
})
export class HeaderComponent {
    checkboxFlag: boolean = false;

    constructor(private eRef: ElementRef) {}

    toggle() {
        this.checkboxFlag = !this.checkboxFlag;
    }

    toggleFromOutside() {
        if(!this.eRef.nativeElement.contains(event.target)) {
            if(this.checkboxFlag) {
                this.toggle()
            }
        }
    }
}
