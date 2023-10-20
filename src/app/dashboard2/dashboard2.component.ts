import { Component, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css'],
})
export class Dashboard2Component {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, 'dark-mode');
    this.renderer.addClass(document.body, 'dark-mode');
  }

  ngOnInit(): void {}
}
