import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-singleslotcontentprojection',
  templateUrl: './singleslotcontentprojection.component.html',
  styleUrls: ['./singleslotcontentprojection.component.scss']
})
export class SingleslotcontentprojectionComponent implements OnInit {

  @Input() question: string;
  @Input() questionNumber?: number;
  @Input() type: string;
  constructor() { }

  ngOnInit(): void {
  }

}
