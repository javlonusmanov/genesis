import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { HeaderService } from "./header/header.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    @ViewChild("sidenav") sidenav: MatSidenav;

    constructor(private headerService: HeaderService) {
    }

    close() {
        this.sidenav.close();
        this.headerService.change();
    }

    ngOnInit(): void {
        this.headerService.isActive.subscribe((value) => {
            value ? this.sidenav.open() : this.sidenav.close();
        });
    }
}
