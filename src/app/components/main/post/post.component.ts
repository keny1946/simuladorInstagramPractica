import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: any = {};
  @Input() index: number | undefined;

  @Output() postSeleccionado:EventEmitter<number> | undefined;

    constructor() {
      this.postSeleccionado = new EventEmitter();
    }

ngOnInit(): void {
}


}
