import { Component, OnInit, ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { Observable } from "rxjs/Observable";

export class Message {
    name: string;
    email: string;
    message: string;
    created_date: Date;
}

@Component({
    selector: "app-footer",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
}


@Component({
    selector: "app-snack-bar-component-example-snack",
    template: `
        <p>Success</p>
    `,
    styles: [],
})
export class PizzaPartyComponent {}
