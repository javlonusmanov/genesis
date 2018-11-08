import { Component, OnInit, ViewChild } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
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
    @ViewChild("f") myNgForm;


    messageForm: FormGroup;
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
            email: [null, [Validators.required, Validators.email]],
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

        this.myNgForm.resetForm();
        this.messageForm.markAsUntouched();

        this.snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 2000
        });
    }
}


@Component({
    selector: "app-snack-bar-component-example-snack",
    template: `
        <p>Success</p>
    `,
    styles: [],
})
export class PizzaPartyComponent {}
