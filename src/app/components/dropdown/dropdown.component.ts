// dropdown.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'cyberfab-dropdown',
  standalone: true,
  imports: [CommonModule, ListComponent],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() options: string[] = ["test", "Test2"]; // Dynamic list of options from parent
  @Input() placeholder: string = 'Select an option'; // Placeholder text
  
  isOpen = false;
  selectedOption: string | null = null;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
  }
}
