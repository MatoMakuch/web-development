import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'cyberfab-checkbox',
  standalone: true,
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() checked: boolean = false; // Checkbox state
  @Input() disabled: boolean = false; // Disabled state
  @Input() id: string = `checkbox-${Math.random().toString(36).substr(2, 9)}`; // Unique ID
  @Input() label?: string; // Optional label

  @Output() change = new EventEmitter<boolean>(); // Emit changes

  private onTouched = () => {};
  private onChange = (value: boolean) => {};

  toggleCheckbox(): void {
    if (this.disabled) return; // Do nothing if disabled
    this.checked = !this.checked;
    this.onChange(this.checked);
    this.change.emit(this.checked); // Emit change to parent
  }

  // ControlValueAccessor implementation
  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
