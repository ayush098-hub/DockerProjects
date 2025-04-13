import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    // replace with your actual backend URL
    const apiUrl = 'http://localhost:3000/api/contact'

    this.http.post(apiUrl, this.contactForm).subscribe({
      next: (res) => {
        alert('Message sent successfully!');
        // reset form
        this.contactForm = { name: '', email: '', message: '' };
      },
      error: (err) => {
        console.error('Error:', err);
        alert('Failed to send message!');
      },
    });
  }
}

