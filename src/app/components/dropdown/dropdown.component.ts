import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'cyberfab-dropdown',
  standalone: true,
  imports: [CommonModule, ListComponent, CheckboxComponent],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Input() placeholder: string = 'Select an option';
  @Input() isMultiSelect: boolean = false;
  @Input() selectedOptions: string[] = [];
  @Output() selectedOptionsChange: EventEmitter<string[]> = new EventEmitter<string[]>();

  isOpen = false;
  selectedOption: string | null = null;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  toggleOption(option: string, checked: boolean) {
    if (checked) {
      if (!this.selectedOptions.includes(option)) {
        this.selectedOptions.push(option);
      }
    } else {
      const index = this.selectedOptions.indexOf(option);
      if (index !== -1) {
        this.selectedOptions.splice(index, 1);
      }
    }
    this.selectedOptionsChange.emit(this.selectedOptions);
  }

  selectOption(option: string) {
    if (!this.isMultiSelect) {
      this.selectedOption = option;
      this.selectedOptions = [option];
      this.selectedOptionsChange.emit(this.selectedOptions);
      this.isOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (!event.target || !(event.target as HTMLElement).closest('.dropdown')) {
      this.isOpen = false;
    }
  }
}
