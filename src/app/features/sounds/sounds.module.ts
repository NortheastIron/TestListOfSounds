import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';

import { SoundsRoutingModule } from "./sounds-routing.module";
import { SoundsService } from "./services";
import { SoundsListComponent } from "./components/sounds-list/sounds-list.component";
import { SharedModule } from "src/app/shared/shared.module";


@NgModule({
    declarations: [SoundsListComponent],
    imports: [
        SoundsRoutingModule,
        SharedModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatButtonModule
    ],
    exports: [],
    providers: [SoundsService]
})
export class SoundsModule {}