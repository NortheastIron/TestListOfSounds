import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from "@angular/common";

import { SharedModule } from "@shared";
import { SoundsListComponent } from "@features/sounds/components";
import { SoundsService } from "@features/sounds/services";

import { SoundsRoutingModule } from "./sounds-routing.module";

@NgModule({
    declarations: [SoundsListComponent],
    imports: [
        SoundsRoutingModule,
        SharedModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        CommonModule
    ],
    exports: [],
    providers: [SoundsService]
})
export class SoundsModule {}