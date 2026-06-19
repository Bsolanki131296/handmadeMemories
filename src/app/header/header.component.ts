import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeMenu = 'home';

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY + window.innerHeight;

    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 10) {
      this.activeMenu = 'contactus';
      return;
    }

    const sections = document.querySelectorAll('section');

    sections.forEach((section: any) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        this.activeMenu = sectionId;
      }
    });
  }
}
