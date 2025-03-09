import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: 'input[type="file"][maxterdev-upload]',
  standalone: true,
})
export class CyberfabUploadDirective {
  @Input() multiple: boolean = false; // Enable multiple file selection
  @Output() fileSelected = new EventEmitter<FileList>();

  @HostListener('change', ['$event.target.files'])
  onFileSelected(files: FileList | null): void {
    if (files) {
      this.fileSelected.emit(files); // Emit the selected files
    }
  }
}
