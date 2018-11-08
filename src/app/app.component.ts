import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material";
import { HeaderService } from "./header/header.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    constructor(private headerService: HeaderService) {
    }

    close() {
        this.headerService.change();
    }

    ngOnInit(): void {}
}
