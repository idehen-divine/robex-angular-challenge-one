import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{


  ngOnInit() { 
    const toggle = document.querySelector(".navbar__toggle");
        const nav = document.querySelector(".navbar__nav");
        const swapOff = document.querySelector(".swap-off");
        const swapOn = document.querySelector(".swap-on");
    
        function updateIconState() {
            const isOpen = nav?.classList.contains("open");
            swapOff?.classList.toggle("hidden", isOpen);
            swapOn?.classList.toggle("hidden", !isOpen);
            swapOff?.classList.toggle("show", !isOpen);
        }
    
        function closeMenu() {
            nav?.classList.remove("open");
            updateIconState();
        }
    
        toggle?.addEventListener("click", function () {
            nav?.classList.toggle("open");
            updateIconState();
        });
        updateIconState();
  }
}
