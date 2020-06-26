import {
  Component,
  OnInit,
  Inject,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormArray,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { UNIQUE_ID_PROVIDER, UNIQUE_ID } from './IDGenerator';
import { IFood } from '../../app.model';
import { IRegister } from '@maewnams-cafe/registration-model';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'maewnams-cafe-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
  providers: [UNIQUE_ID_PROVIDER],
})
export class ProfileComponent implements OnInit {
  debounce;

  get petFormArray() {
    return <FormArray>this.userRegistrationForm.controls.pets.value;
  }

  races: String[] = ['Hooman', 'God', 'Something from space'];
  petSpecies: String[] = [
    'Ant',
    'Bird',
    'Cat',
    'Dog',
    'Elephen',
    'Fish',
    'Rabbit',
  ];
  foods: IFood[] = [
    { value: 'chocolate-0', viewValue: 'Chocolate' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'coffee-2', viewValue: 'Coffee' },
  ];
  activity: String[] = ['Read books', 'Play games', 'Shopping'];

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private toastr: ToastrService
  ) {}

  userRegistrationForm = this.formBuilder.group({
    ID: new FormControl('123asd', [Validators.required]),
    name: ['', [Validators.required, Validators.minLength(3)]],
    race: ['Hooman', [Validators.required]],
    email: ['', [Validators.required, Validators.minLength(3)]],
    phoneNumber: ['', [ValidatePhone]],
    /*address: this.formBuilder.group({
      floor: [''],
      street: [''],
      country: [''],
    }),*/
    pets: this.formBuilder.array([]),
    food: ['', Validators.required],
  });

  generatePets(): void {
    const pets = this.petSpecies;
    const petsFormArray = <FormArray>this.userRegistrationForm.controls.pets;
    pets.forEach((pet) => petsFormArray.push(new FormControl(pet)));
  }

  ngOnInit(): void {
    console.log(this.userRegistrationForm);
    this.generatePets();
  }

  validateRegistration() {
    if (this.debounce) window.clearTimeout(this.debounce);
    console.log(this.userRegistrationForm);
    this.debounce = window.setTimeout(() => {
      if (this.userRegistrationForm.valid) {
        this.submitRegistration();
      } else {
        console.log('INVALID ! ! ', this.userRegistrationForm.valid);
        this.toastr.error('Error', 'Something happend');
        // TODO : Alert Box
        // TODO : Focus Field
      }
    }, 300);
  }

  submitRegistration() {
    console.log('This is fake submit, but you success !!!');
  }

  onSubmit(): void {
    console.log('validate');
  }

  registerOnChange() {
    console.log('register on change');
  }

  petChecked(pet: String) {
    if (this.isPet(pet)) {
      this.userRegistrationForm.value.pets = this.userRegistrationForm.value.pets.filter(
        (x) => x !== pet
      );
    } else {
      this.userRegistrationForm.value.pets.push(pet);
    }
  }

  isPet(pet: String): boolean {
    const findPet = this.userRegistrationForm.value.pets.find((p) => p === pet);
    if (findPet) {
      return true;
    }
    return false;
  }

  // test add pet
  addPet() {
    const petsFormArray = <FormArray>this.userRegistrationForm.controls.pets;
    petsFormArray.push(new FormControl('deggdf'));
  }
}

function ValidatePhone(
  control: AbstractControl
): { [key: string]: any } | null {
  if (control.value && control.value.length != 10) {
    return { phoneNumberInvalid: true };
  }
  return null;
}
