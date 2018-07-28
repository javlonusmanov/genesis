import { Component, OnInit, ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Observable } from "rxjs/Observable";

export class Message {
    name: string;
    email: string;
    message: string;
    created_date: Date;
}

@Component({
    selector: "app-footer-content",
    templateUrl: "./footer-content.component.html",
    styleUrls: ["./footer-content.component.css"]
})
export class FooterContentComponent implements OnInit {
    private messageForm: FormGroup;
    private messages: Observable<Message[]>;
    private messagesCollection: AngularFirestoreCollection<Message>;

    ngOnInit(): void {
    }

    constructor(private formBuilder: FormBuilder,
                private db: AngularFirestore,
                private snackBar: MatSnackBar) {

        this.messagesCollection = db.collection<Message>("messages");
        this.messages = this.messagesCollection.valueChanges();

        this.messageForm = this.formBuilder.group({
            name: [null, Validators.required],
            email: [null, Validators.email],
            message: [null, Validators.required]
        });
    }

    onSend() {
        this.messagesCollection.add({
            name: this.messageForm.controls["name"].value,
            email: this.messageForm.controls["email"].value,
            message: this.messageForm.controls["message"].value,
            created_date: new Date()
        } as Message);

        this.messageForm.reset();
        this.messageForm.markAsUntouched();
        Object.keys(this.messageForm.controls).forEach((name) => {
            const control: AbstractControl = this.messageForm.controls[name];
            control.setErrors(null);
        });

        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 700
        });
    }
}


@Component({
    selector: "snack-bar-component-example-snack",
    template: `
        <p>Success</p>
    `,
    styles: [],
})
export class PizzaPartyComponent {}
