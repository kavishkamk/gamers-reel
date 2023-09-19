import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnDestroy {

  constructor(private modal: ModalService) { }

  ngOnInit(): void {
    this.modal.register("auth");
  }

  ngOnDestroy(): void {
    this.modal.unregister("auth");
  }

  openModel($event: Event) {
    $event.preventDefault();
    this.modal.toggleModal("auth");
  }

}
