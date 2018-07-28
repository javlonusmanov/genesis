import { Component, OnInit } from '@angular/core';
import { GenesisApiService } from "../genesis-api.service";
import { NgForm } from '@angular/forms';
import { GnsUserMessage } from "../gns-user-message.model";
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-footer-content',
    templateUrl: './footer-content.component.html',
    styleUrls: ['./footer-content.component.css']
})
export class FooterContentComponent implements OnInit {
    ngOnInit(): void {
    }

    constructor(private apiService: GenesisApiService,
                private snackBar: MatSnackBar) {
    }

    onSend(form: NgForm) {
        this.apiService.sendMessage(form.value as GnsUserMessage).subscribe(data => {
            console.log(data);

            //empty all forms
            form.resetForm();

            if(data["status"] && data["status"] === 201) {
                this.snackBar.openFromComponent(PizzaPartyComponent, {
                    duration: 500
                });
            }
        })
    }

    private showSnackBar(show: boolean): void {

    }
}


@Component({
    selector: 'snack-bar-component-example-snack',
    template: `
        <p>Success</p>
    `,
    styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}