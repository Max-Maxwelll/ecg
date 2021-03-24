import { UserService } from './../../services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent implements OnInit {


	@Input() description: string;
  @Output() isConfirmed: EventEmitter<boolean> = new EventEmitter();

  remove = {
    'animation' : 'fade 0.3s linear 0s 1 normal'
  }

  constructor(private userService: UserService) { }

  ngOnInit() {

  }
  private confirm() {
		this.isConfirmed.emit(true);
  }
  modalBody(){
    if(this.userService.isModalDialogVisible)
      return "modal-body";
    else
      return "";
  }
	private close() {
    
    this.remove.animation = "remove 0.3s linear 0s 1 forwards";
    setTimeout(()=>{ this.isConfirmed.emit(false); }, 300);
    //this.isConfirmed.emit(false);
  }
}
