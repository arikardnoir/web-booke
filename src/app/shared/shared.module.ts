import { NgModule } from "@angular/core";
import { InputComponent } from "./input/input.component";
import { SnackbarComponent } from "./messages/snackbar/snackbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";



@NgModule({
    declarations: [
        InputComponent,
        SnackbarComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        InputComponent,
        SnackbarComponent,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class SharedModule {

} 