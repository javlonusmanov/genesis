import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridList,
    MatGridListModule
} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatDividerModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatDividerModule
    ]
})
export class MaterialModule {
}
