import { Component, HostListener, ElementRef } from "@angular/core";
import { WindowService } from "../utility-services/window.service";
import { fromEvent } from "rxjs";
import {
    trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    animations: [[
        trigger('slideInOut', [
            state('open', style({
                'max-height': '420px'
            })),
            state('close', style({
                'max-height': '0px'
            })),
            transition('open => close', [group([
                animate('195ms ease-out', style({
                    'max-height': '0px',
                })),
            ]
            )]),
            transition('close => open', [group([
                animate('225ms ease-in', style({
                    'max-height': '420px',
                }))
            ]
            )])
        ]),
    ]]
})
export class HeaderComponent {
    navbarList: string[] = [
        "Home",
        "About",
        "Services",
        // "Work",
        // "Testimonials",
        "Blog",
        "Contact"
    ]
    public scrolled: boolean = false;
    public menuCollapsed: boolean = false;

    constructor(private windowService: WindowService, private el: ElementRef) {
        fromEvent(this.windowService.get(), "scroll")
            .subscribe(() => {
                this.scrolled = this.windowService.get().scrollY > 100;
            });
    }

    test() {
        this.menuCollapsed = !this.menuCollapsed;
    }

    @HostListener('document:click', ['$event.target'])
    @HostListener('document:touchstart', ['$event.target'])
    onClick(targetElement) {
        const clickedInside = this.el.nativeElement.contains(targetElement);
        if (this.menuCollapsed && !clickedInside) {
            this.menuCollapsed = false;
        }
    }
}
