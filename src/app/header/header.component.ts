import { Component, HostListener } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  activeMenu = 'home';

  closeMenu() {
    // Only on mobile
    if (window.innerWidth < 992) {
      const menu = document.getElementById('navbarNav');

      if (menu?.classList.contains('show')) {
        const bsCollapse =
          bootstrap.Collapse.getInstance(menu) ||
          new bootstrap.Collapse(menu, { toggle: false });

        bsCollapse.hide();
      }
    }
  }
  @HostListener('window:scroll', [])
  onScroll() {
    // Mobile View
    const offset = window.innerWidth < 992 ? 50 : 150;

    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 10) {
      this.activeMenu = 'contactus';
      return;
    }

    const sections = document.querySelectorAll('section');

    sections.forEach((section: any) => {
      const sectionTop = section.offsetTop - offset;
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
  // @HostListener('window:scroll', [])
  // onScroll() {
  //   const scrollPosition = window.scrollY + window.innerHeight;

  //   const pageHeight = document.documentElement.scrollHeight;

  //   if (scrollPosition >= pageHeight - 10) {
  //     this.activeMenu = 'contactus';
  //     return;
  //   }

  //   const sections = document.querySelectorAll('section');

  //   sections.forEach((section: any) => {
  //     const sectionTop = section.offsetTop - 150;
  //     const sectionHeight = section.offsetHeight;
  //     const sectionId = section.getAttribute('id');

  //     if (
  //       window.scrollY >= sectionTop &&
  //       window.scrollY < sectionTop + sectionHeight
  //     ) {
  //       this.activeMenu = sectionId;
  //     }
  //   });
  // }
}
