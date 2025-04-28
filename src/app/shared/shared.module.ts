import { NgModule } from "@angular/core";
import { MatCardModule } from '@angular/material/card';

import { AudioPlayerComponent } from "./components/audio-player/audio-player.component";

@NgModule({
    declarations: [AudioPlayerComponent],
    imports: [MatCardModule],
    exports: [AudioPlayerComponent],
    providers: []
})
export class SharedModule {}