import {Component, HostListener, Input, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
 selector: 'app-go-top-button',
 templateUrl: './go-top-button.component.html',
 styleUrls: ['./go-top-button.component.css'],
 animations: [
     trigger('appearInOut', [
         state('in', style({
             'display': 'block',
             'opacity': '0.85'
         })),
         state('out', style({
             'display': 'none',
             'opacity': '0'
         })),
         transition('in => out', animate('400ms ease-in-out')),
         transition('out => in', animate('400ms ease-in-out'))
     ]) ]
})
export class GoTopButtonComponent implements OnInit {
  animationState = 'out';
  private timerID: any = null;
  /**
   * Default button styles
   * position: string;
   * top: string;
   * bottom: string;
   * right: string;
   * width: string;
   * height: string;
   * line-height: string;
   * text-decoration: string;
   * color: string;
   * background: string;
   * border: string;
   * border-radius: string}}
   */
  private defaultStyles: any = {
      'position': 'fixed',
      'top': '50%',
      'bottom': '50%',
      'right': '0',
      'width': '35px',
      'height': '35px',
      'line-height': '35px',
      'text-decoration': 'none',
      'color': 'white',
      'background': 'rgba(0, 0, 0, 0.3)',
      'border': 'none',
      'border-radius': '3px 0 0 3px'
  };

  /**
   * Go top button will appear when user scrolls Y to this position
   */
  @Input() scrollDistance = 200;

  /**
   * User styles config object
   */
  @Input() styles: any = {};

  /**
   * If true scrolling to top will be animated
   */
  @Input() animate = false;

  /**
   * Animated scrolling speed
   */
  @Input() speed = 80;

  /**
   * Acceleration coefficient, added to speed when using animated scroll
   */
  @Input() acceleration = 0;

  ngOnInit() {
      this.validateInputs();
  }

  private validateInputs() {
      const errorMessagePrefix = 'GoTopButton component input validation error: ';

      if (this.scrollDistance < 0) {
          throw Error(errorMessagePrefix + 'scrollDistance parameter must be greater or equal to 0');
      }

      if (this.speed < 1) {
          throw Error(errorMessagePrefix + 'speed parameter must be a positive number');
      }

      if (this.acceleration < 0) {
          throw Error(errorMessagePrefix + '\'acceleration\' parameter must be greater or equal to 0');
      }
  }

  /**
   * Listens to window scroll and animates the button
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
      if (this.isBrowser()) {
          this.animationState = this.getCurrentScrollTop() > this.scrollDistance ? 'in' : 'out';
      }
  }

  /**
   * Scrolls window to top
   * @param event
   */
  scrollTop(event: any) {
      if (!this.isBrowser()) {
          return;
      }

      event.preventDefault();
      if (this.animate) {
          this.animateScrollTop();
      } else {
          window.scrollTo(0, 0);
      }
  }

  /**
   * Performs the animated scroll to top
   */
  animateScrollTop() {
      if (this.timerID !== null) {
          return;
      }

      let initialSpeed = this.speed;
      const that = this;
      this.timerID = setInterval(function() {
          window.scrollBy(0, -initialSpeed);
          initialSpeed = initialSpeed + that.acceleration;
          if (that.getCurrentScrollTop() === 0) {
              clearInterval(that.timerID);
              that.timerID = null;
          }
      }, 15);
  }

  /**
   * Get current Y scroll position
   */
  getCurrentScrollTop() {
      if (typeof window.scrollY !== 'undefined' && window.scrollY >= 0) {
          return window.scrollY;
      }

      if (typeof window.pageYOffset !== 'undefined' && window.pageYOffset >= 0) {
          return window.pageYOffset;
      }

      if (typeof document.body.scrollTop !== 'undefined' && document.body.scrollTop >= 0) {
          return document.body.scrollTop;
      }

      if (typeof document.documentElement.scrollTop !== 'undefined' && document.documentElement.scrollTop >= 0) {
          return document.documentElement.scrollTop;
      }

      return 0;
  }

  /**
   * Get button style
   */
  getStyle() {
      return this.mergeOptions(this.defaultStyles, this.styles);
  }

  /**
   * This check will prevent 'window' logic to be executed
   * while executing the server rendering
   */
  isBrowser(): boolean {
      return typeof (window) !== 'undefined';
  }

  private mergeOptions(obj1: { [key: string]: string }, obj2: { [key: string]: string }) {
      const obj3: { [key: string]: string } = {};

      for (const attrname of Object.keys(obj1)) {
          obj3[attrname] = obj1[attrname];
      }

      for (const attrname of Object.keys(obj2)) {
          obj3[attrname] = obj2[attrname];
      }
      return obj3;
  }
}
