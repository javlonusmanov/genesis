import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    host: {
        '(document:click)': 'toggleFromOutside()',
    },
})
export class HeaderComponent implements OnInit {
    private toggleMenu: boolean = false;

    constructor(private eRef: ElementRef) {
    }

    ngOnInit(): void {
    }

    toggle() {
        this.toggleMenu = !this.toggleMenu;
    }

    toggleFromOutside() {
        if(!this.eRef.nativeElement.contains(event.target)) {
            if(this.toggleMenu) {
                this.toggle()
            }
        }
    }
}
