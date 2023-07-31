import { Component } from '@angular/core';
import {
  faBell,
  faGripLines,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  bell = faBell;
  menu = faGripLines;
  user = faUserCircle;
  navModal = false;
  userModal = false;

  constructor(public modalService: ModalService) {}

  public showNavModal() {
    this.navModal = !this.navModal;
  }
  public showUserModal() {
    this.userModal = !this.userModal;
  }

  public clickedOutside(): void {
    this.navModal = false;
  }
  public openModal($event: Event) {
    $event.preventDefault();
    this.modalService.toggleModal('auth');
    //console.log('modal opened');

  }
}
