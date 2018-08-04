import { NgModule } from "@angular/core";

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSnackBarModule
} from "@angular/material";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatDividerModule,
        MatInputModule,
        MatSidenavModule,
        MatExpansionModule,
        MatSnackBarModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatDividerModule,
        MatInputModule,
        MatSidenavModule,
        MatExpansionModule,
        MatSnackBarModule
    ]
})
export class MaterialModule {
}
