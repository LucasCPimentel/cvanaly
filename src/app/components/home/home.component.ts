import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { PdfUploadComponent } from '../pdf-upload/pdf-upload.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, PdfUploadComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = "Lucas";
  dogUrl = ""

  teste(){
    console.log("Seja Bem vindo dog")
  }
}