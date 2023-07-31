import { Injectable } from '@angular/core';
import { Modal } from '../models/modal.interface';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: Modal[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({
      id,
      visible: false,
    });
  }

  unregister(id: string) {
    this.modals = this.modals.filter((modal) => modal.id !== id);
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find((modal) => modal.id === id)?.visible;
  }

  toggleModal(id: string) {
    const modal = this.modals.find((modal) => modal.id === id);

    if (modal) {
      modal.visible = !modal.visible;
    }
  }
}
