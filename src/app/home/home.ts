// app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

interface MenuItem {
  title: string;
  description: string;
  icon: string;
  route?: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink,RouterModule,RouterOutlet],
  template: `
    <div class="home-container">
      <header class="header">
        <h1 class="main-title">MUDA MUDI TANGSI 18</h1>
        <p class="subtitle">WEB RESMI MUDA MUDI TANGSI 18</p>
      </header>

      <main class="main-content">
        <div class="menu-container">
          <div 
            class="menu-item" 
            *ngFor="let item of menuItems; trackBy: trackByTitle"
            (click)="onMenuClick(item)"
            [attr.data-title]="item.title" routerLink="{{item.route}}"
          >
            <div class="menu-icon" >
              <img [src]="item.icon" [alt]="item.title + ' icon'" />
            </div>
            <div class="menu-content">
              <h2 class="menu-title">{{ item.title }}</h2>
              <p class="menu-description">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </main>

      <footer class="footer">
        <div class="social-icons">
          <a href="#" class="social-link" title="Facebook">
            <div class="social-icon">f</div>
          </a>
          <a href="#" class="social-link" title="Twitter">
            <div class="social-icon">t</div>
          </a>
          <a href="#" class="social-link" title="Instagram">
            <div class="social-icon">ig</div>
          </a>
        </div>
        <p class="footer-text">mudamudi_tangsi18</p>
      </footer>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    /* Gunakan styles yang sama seperti sebelumnya */
    .home-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      color: #ffffff;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      display: flex;
      flex-direction: column;
    }

    .header {
      text-align: center;
      padding: 60px 20px 40px;
    }

    .main-title {
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: 3px;
      margin-bottom: 10px;
      color: #ffffff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }

    .subtitle {
      font-size: 0.95rem;
      color: #a0a0a0;
      letter-spacing: 1px;
      font-weight: 300;
    }

    .main-content {
      flex: 1;
      display: flex;
      justify-content: center;
      padding: 0 20px;
    }

    .menu-container {
      max-width: 800px;
      width: 100%;
    }

    .menu-item {
      display: flex;
      align-items: center;
      padding: 30px 40px;
      margin: 20px 0;
      background: transparent;
      border: none;
      border-bottom: 2px solid #333333;
      border-radius: 0;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .menu-item:hover {
      background: transparent;
      border-bottom-color: #4ade80;
      transform: translateX(10px);
      box-shadow: 0 4px 20px rgba(74, 222, 128, 0.3);
    }

    .menu-icon {
      margin-right: 30px;
      flex-shrink: 0;
    }

    .menu-icon img {
      width: 24px;
      height: 24px;
      filter: brightness(0) saturate(100%) invert(56%) sepia(97%) saturate(347%) hue-rotate(85deg) brightness(98%) contrast(89%);
      transition: all 0.3s ease;
    }

    .menu-item:hover .menu-icon img {
      filter: brightness(0) saturate(100%) invert(71%) sepia(77%) saturate(295%) hue-rotate(85deg) brightness(103%) contrast(90%);
      transform: translateX(5px) scale(1.3);
    }

    .menu-content {
      flex: 1;
    }

    .menu-title {
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 8px;
      color: #ffffff;
    }

    .menu-description {
      font-size: 0.95rem;
      color: #b0b0b0;
      line-height: 1.4;
    }

    .footer {
      text-align: center;
      padding: 40px 20px 30px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      margin-top: 60px;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      gap: 15px;
      margin-bottom: 20px;
    }

    .social-link {
      text-decoration: none;
      color: inherit;
    }

    .social-icon {
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.9rem;
      font-weight: 600;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .social-icon:hover {
      background: rgba(74, 222, 128, 0.2);
      border-color: #4ade80;
      transform: translateY(-2px);
    }

    .footer-text {
      font-size: 0.9rem;
      color: #808080;
    }

    @media (max-width: 768px) {
      .main-title {
        font-size: 2rem;
        letter-spacing: 2px;
      }

      .menu-item {
        padding: 25px 25px;
        margin: 15px 0;
      }

      .menu-icon {
        margin-right: 20px;
      }

      .menu-title {
        font-size: 1.3rem;
      }

      .menu-description {
        font-size: 0.9rem;
      }
    }
  `]
})
export class AppHome {
  menuItems = [
    {
      title: 'Struktur Pemuda',
      description: 'Struktur kepanitiaan Muda Mudi Tangsi dalam acara menyambut HUT RI - 80 (2025)',
      icon: 'https://res.cloudinary.com/dqbpmesug/image/upload/v1751039220/panah_qeqhj4.png',
      route: '/struktur-pemuda'
    },
    {
      title: 'Agenda Acara',
      description: 'Susunan acara yang akan dilaksanakan oleh Muda Mudi Tangsi',
      icon: 'https://res.cloudinary.com/dqbpmesug/image/upload/v1751039220/panah_qeqhj4.png',
      route: '/agenda-acara'
    },
    {
      title: 'Sosial Media',
      description: 'Berikut adalah sosial media resmi Muda Mudi Tangsi 18',
      icon: 'https://res.cloudinary.com/dqbpmesug/image/upload/v1751039220/panah_qeqhj4.png',
      route: '/sosial-media'
    },
    {
      title: 'Kerja Sama',
      description: 'Syarat & ketentuan untuk partner kerja sama',
      icon: 'https://res.cloudinary.com/dqbpmesug/image/upload/v1751039220/panah_qeqhj4.png',
      route: '/kerja-sama'
    }
  ];

  constructor(private router: Router) {}

  trackByTitle(index: number, item: any): string {
    return item.title;
  }

  onMenuClick(item: any): void {
    this.router.navigate([item.route]);
  }
}