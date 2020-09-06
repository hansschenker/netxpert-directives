import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Item, Question } from '../template-directives/projector.directive';

@Component({
  selector: 'hs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  items: Question[] = [
    { title: 'Question 1', answers: [{ title: 'Answer 1' }] },
    { title: 'Question 2', answers: [{ title: 'Answer 2' }] },
    { title: 'Question 3', answers: [{ title: 'Answer 3' }] },
    { title: 'Question 4', answers: [{ title: 'Answer 4' }] },
    { title: 'Question 5', answers: [{ title: 'Answer 5' }] },
  ];
  constructor() {}

  ngOnInit(): void {}
}
