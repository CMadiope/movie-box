import { Component, OnDestroy, OnInit, Input, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalID = '';
  constructor(public modalService: ModalService, public el: ElementRef) {}
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }
  ngOnDestroy(): void {
    document.body.removeChild(this.el.nativeElement);
  }
  onClose($event: Event) {
    this.modalService.toggleModal(this.modalID);
  }
}
