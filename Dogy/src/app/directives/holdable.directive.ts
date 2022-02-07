import { Directive, HostListener, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { map, tap, takeUntil , filter} from 'rxjs/operators';

@Directive({
  selector: '[appHoldable]'
})
export class HoldableDirective {

  @Output() holdTime : EventEmitter<number> = new EventEmitter();

  state : Subject<string> = new Subject();

  cancel! : Observable<string>;

  constructor() { 

    this.cancel = this.state.pipe(
      filter((v: string)=> v === 'cancel'),
      tap(v => {
        console.log('stopped hold')
        this.holdTime.emit(0);
      } )
    )

  }

  @HostListener('mouseup', ['$event'])
  @HostListener('mouseleave' , ['$event'])
  onExit(){
    this.state.next('cancel');
  }

  @HostListener('mousedown', ['$event'])
  onHold(){
    console.log('started hold')
    this.state.next('start')
    const n = 100;
    interval(n).pipe(
      takeUntil(this.cancel),
      tap(v => {
        this.holdTime.emit(v*n)
      }),
    ).subscribe();

  }

}
