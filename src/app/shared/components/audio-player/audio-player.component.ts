import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild
} from '@angular/core';

import { TSoundElement } from '@core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.less']
})
export class AudioPlayerComponent implements OnChanges {

  @Input() audioItem!: TSoundElement | null;
  @ViewChild('audioElement', { static: false })
  private audioElementRef!: ElementRef<HTMLAudioElement>;

  private get _audioElement(): HTMLAudioElement | null {
    return this.audioElementRef?.nativeElement || null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['audioItem'] && this.audioItem && this._audioElement) {
      this._resetAudio();
    }
  }

  private _resetAudio(): void {
    const _audioElement = this._audioElement;

    if (!_audioElement) {
      return;
    }

    _audioElement.pause();
    _audioElement.currentTime = 0;
    _audioElement.load();
  }

}
