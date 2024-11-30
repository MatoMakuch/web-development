import { Component, ContentChild, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'cyberfab-list',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() items: any[] = [];
  @Input() isMultiSelect: boolean = false;
  @Input() selectedItems: any[] = [];
  @Output() selectedItemsChange = new EventEmitter<any[]>();
  @Output() itemSelected = new EventEmitter<any>();

  @ContentChild(TemplateRef) itemTemplate!: TemplateRef<any>;

  toggleItem(item: any, checked: boolean) {
    if (checked) {
      if (!this.selectedItems.includes(item)) {
        this.selectedItems.push(item);
      }
    } else {
      const index = this.selectedItems.indexOf(item);
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
      }
    }
    this.selectedItemsChange.emit(this.selectedItems);
  }

  selectItem(item: any) {
    this.itemSelected.emit(item);
  }
}
