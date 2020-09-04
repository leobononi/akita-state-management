import { Component, Input, OnInit, AfterViewInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Validators, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ShoppingCartModel } from '../../shopping-cart.model';
import { ID } from '@datorama/akita';

@Component({
  selector: 'shopping-cart-form-component',
  templateUrl: './shopping-cart-form.component.html',
  styleUrls: ['./shopping-cart-form.component.scss']
})
export class ShoppingCartFormComponent implements OnInit{
  @Input()
  totalItems: number;

  @Input()
  activeRecord: ShoppingCartModel;

  @Input()
  hasError: boolean;

  @Input()
  isEditing: boolean;

  @Output()
  onFormChange: EventEmitter<any> = new EventEmitter();

  @Output()
  onFormCheck = new EventEmitter();

  @ViewChild('formDirective') private formDirective: NgForm;

  formGroup: FormGroup;

  get formDescription() { return this.formGroup.get('description');}
  get formPrice() { return this.formGroup.get('price');}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      description: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    });

    this
      .formGroup
      .valueChanges
      .subscribe(result => this.onFormChange.emit(result));
  }

  onFormCheckClik(): void{
    if (!this.formGroup.valid)
        return;

    this.formGroup.patchValue({'description': '', 'price': ''}, {onlySelf: true, emitEvent: false });
    this.onFormCheck.emit();
  }

  setFormValues(record: ShoppingCartModel): any{
    this.formGroup.patchValue({'description': record.description, 'price': record.price}, {onlySelf: true, emitEvent: false });
  }

  resetFormValues(){
    this.formGroup.reset('', {onlySelf: true, emitEvent: false });
    this.formDirective.resetForm();
  }

  isValidForm(){
    return this.formGroup.valid;
  }
}
