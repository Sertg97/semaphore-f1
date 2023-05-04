import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'semaphore-f1';
  isRed = false;

  constructor() {}

  changeColor() {
    const light1 = document.getElementById("light1");
    const light2 = document.getElementById("light2");
    const light3 = document.getElementById("light3");
    const light4 = document.getElementById("light4");
    const light5 = document.getElementById("light5");
    const light6 = document.getElementById("light6");
    const light7 = document.getElementById("light7");
    const light8 = document.getElementById("light8");
    const light9 = document.getElementById("light9");
    const light10 = document.getElementById("light10");
  
    if (light1 && light2 && light3 && light4 && light5 && light6 && light7 && light8 && light9 && light10) {
      this.isRed = true;
  
      setTimeout(() => {
        //light1.classList.remove("red");
        light1.classList.add("red");
        light2.classList.add("red");
  
        setTimeout(() => {
          //light2.classList.remove("red");
          light3.classList.add("red");
          light4.classList.add("red");
  
          setTimeout(() => {
            //light3.classList.remove("red");
            light5.classList.add("red");
            light6.classList.add("red");
  
            setTimeout(() => {
              light7.classList.add("red");
              light8.classList.add("red");

              setTimeout(() => {
                light9.classList.add("red");
                light10.classList.add("red");

                /*setTimeout(() => {
                  //light4.classList.remove("red");
                  light1.classList.add("color-default");
                  light2.classList.add("color-default");
                  light3.classList.add("color-default");
                  light4.classList.add("color-default");
                  light5.classList.add("color-default");
                  light6.classList.add("color-default");
                  light7.classList.add("color-default");
                  light8.classList.add("color-default");
                  light9.classList.add("color-default");
                  light10.classList.add("color-default");
                  this.isRed = false;
                }, 1000);*/
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }
  }

  /*changeColor() {
    const light1 = document.getElementById("light1");
    const light2 = document.getElementById("light2");
    const light3 = document.getElementById("light3");
    const light4 = document.getElementById("light4");
    
    if (light1 && light2 && light3 && light4) {
      light1.classList.add("red");
      light2.classList.add("red");
      light3.classList.add("red");
      light4.classList.add("red");
    }
  }*/
}
