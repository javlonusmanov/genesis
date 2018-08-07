import { Component, ElementRef, EventEmitter, Output } from "@angular/core";
import { HeaderService } from "./header.service";
import { WindowService } from "../utility-services/window.service";
import { fromEvent } from "rxjs";
// import 'rxjs/add/operator/bufferCount';

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})
export class HeaderComponent {
    public scrolled: boolean = false;

    constructor(private headerService: HeaderService, private windowService: WindowService) {
        fromEvent(windowService.get(), "scroll")
        .subscribe(() => {
            windowService.get().pageYOffset > 50 ? this.scrolled = true : this.scrolled = false;
        });
        console.log(windowService.get().scroll)
    }

    openSideNav() {
        this.headerService.change();
    }
}
