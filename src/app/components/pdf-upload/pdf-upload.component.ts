import { Component } from '@angular/core';

@Component({
  selector: 'app-pdf-upload',
  standalone: true,
  imports: [],
  templateUrl: './pdf-upload.component.html',
  styleUrl: './pdf-upload.component.css'
})
export class PdfUploadComponent {
  fileName: string = '';

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files && input.files.length > 0) {
      const file = input.files[0];
      if (file.type === 'application/pdf') {
        this.fileName = file.name;
        // Aqui você pode adicionar lógica para enviar o arquivo ao servidor ou realizar outras ações com o arquivo PDF
        this.uploadFile(file);
      } else {
        alert('Por favor, selecione um arquivo PDF válido.');
      }
    }
  }

  uploadFile(file: File): void {
    // Adicione sua lógica de upload aqui, por exemplo, enviar o arquivo para uma API usando HTTPClient
    const formData = new FormData();
    formData.append('file', file);

    // Exemplo de como você poderia enviar o arquivo para um servidor
    // this.httpClient.post('your-api-url', formData).subscribe(response => {
    //   console.log('Upload bem-sucedido!', response);
    // });
  }
}
