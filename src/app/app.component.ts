import { Component, Output } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() logged : boolean = false;
  ngOnInit(): void {
    $(document).ready(function(){
      $(window).scroll(function(){
          if ($(this).scrollTop() > 100) {
              $('.move-top').fadeIn();
          } else {
              $('.move-top').fadeOut();
          }
      });
  
      $('.move-top').click(function(){
          $('html, body').animate({scrollTop : 0},800);
          return false;
      });
  });
    
  }
}
