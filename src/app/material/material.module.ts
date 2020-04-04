import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatSnackBarModule } from "@angular/material/snack-bar";


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
