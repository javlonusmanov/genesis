import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatGridList,
    MatInputModule,
    MatGridListModule,
    MatSidenavModule,
    MatExpansionModule
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';


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
        MatExpansionModule
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
        MatExpansionModule
    ]
})
export class MaterialModule {
}
