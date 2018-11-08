import { Component, ElementRef, EventEmitter, Output } from "@angular/core";
import { HeaderService } from "./header.service";
import { WindowService } from "../utility-services/window.service";
import { fromEvent } from "rxjs";
// import 'rxjs/add/operator/bufferCount';

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
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
    public scrollEnd: boolean = false;

    constructor(private headerService: HeaderService, private windowService: WindowService) {
        fromEvent(windowService.get(), "scroll")
        .subscribe(() => {
            windowService.get().pageYOffset > 3400 ? this.scrollEnd = true : this.scrollEnd = false;
        });
    }

    openSideNav() {
        this.headerService.change();
    }
}
