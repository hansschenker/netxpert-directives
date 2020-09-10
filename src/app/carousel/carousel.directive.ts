import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  ɵPlayState,
} from '@angular/core';
import { interval, of, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Item {
  title: string;
  url: string;
  description: string;
}
export interface CarouselContext {
  $implicit: Partial<Item>;
  controller: {
    next: () => void;
    prev: () => void;
    auto: () => void;
    car: () => CarouselDirective;
  };
}

type PlayState = 'on' | 'off';

@Directive({
  selector: '[carousel]',
  exportAs: 'car',
})
export class CarouselDirective
  implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  // class props
  // timer$ = interval(1000);
  timerId: number | null = null;
  context: CarouselContext | null = null;
  index = 0;

  constructor(
    private tpl: TemplateRef<CarouselContext>,
    private vcr: ViewContainerRef
  ) {}

  // items from Template
  @Input('carouselFrom') items: Observable<Item[]>;

  // delay set / get
  private _delay = 3000;
  @Input('carouselDelay')
  set delay(delay: number) {
    console.log('caarousel-delay:', delay);
    this._delay = delay;
  }

  get delay() {
    return this._delay;
  }

  private _autoplay: PlayState;
  @Input('carouselAutoplay')
  set autoplay(play: PlayState) {
    this._autoplay = play;
    if (play === 'on') {
      this.setTimer();
      console.log('autoplay on - setTimer', this.timerId);
    } else {
      console.log('autoplay off - clearTimer', this.timerId);
      this.clearTimer();
    }

    // autoplay === 'on' ? this.setTimer() : this.clearTimer();
  }
  get autoplay(): PlayState {
    return this._autoplay;
  }
  ngOnInit(): void {
    // initialize context
    this.context = {
      $implicit: this.items[0],
      controller: {
        next: () => this.next(),
        prev: () => this.prev(),
        auto: () => this.auto(),
        car: () => this.car(),
      },
    };

    this.vcr.createEmbeddedView(this.tpl, this.context);
  }
  ngAfterViewInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('carousel-on-changes:', changes);
  }
  ngOnDestroy(): void {
    this.clearTimer();
  }
  car(): CarouselDirective {
    return this;
  }
  auto(): void {
    this.toggleAutoplay();
  }
  next(): void {
    this.index++;
    if (this.index >= this.items.length) {
      this.index = 0;
    }

    this.context.$implicit = this.items[this.index];
  }

  prev(): void {
    this.index--;
    if (this.index < 0) {
      this.index = this.items.length - 1;
    }
    this.context.$implicit = this.items[this.index];
  }

  private clearTimer(): void {
    window.clearInterval(this.timerId);
    this.timerId = null;
  }

  private setTimer(): void {
    this.timerId = window.setInterval(() => this.next(), this.delay);
  }
  public toggleAutoplay(): void {
    if (this.timerId) {
      this.autoplay = 'off';
    } else {
      this.autoplay = 'on';
    }
  }
} // class
