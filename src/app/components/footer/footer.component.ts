import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer mt-auto py-3">
      <div class="container footer-container">
        <span class="text-muted">
          Made with <span class="heart">❤</span> in Angular
        </span>
      </div>
    </footer>
  `,
  styles: [
    `
      .heart {
        color: #e25555;
      }
      .footer-container {
        margin-top: 20px;
        text-align: center;
      }
    `,
  ],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
