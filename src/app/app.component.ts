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
    const alertSound = document.getElementById("audio-alert") as HTMLAudioElement;
    const alertSound2 = document.getElementById("audio-start") as HTMLAudioElement;
  
    if (light1 && light2 && light3 && light4 && light5 && light6 && light7 && light8 && light9 && light10 && alertSound && alertSound2) {
      this.isRed = true;
  
      setTimeout(() => {
        light1.classList.add("red");
        light2.classList.add("red");
        alertSound.play(); // Reproduce el sonido
  
        setTimeout(() => {
          light3.classList.add("red");
          light4.classList.add("red");
          alertSound.play();
  
          setTimeout(() => {
            light5.classList.add("red");
            light6.classList.add("red");
            alertSound.play();
  
            setTimeout(() => {
              light7.classList.add("red");
              light8.classList.add("red");
              alertSound.play();

              setTimeout(() => {
                light9.classList.add("red");
                light10.classList.add("red");
                alertSound.play();

                setTimeout(() => {
                  this.changeToDefault();
                  this.isRed = false;

                  setTimeout(() => {
                    this.changeColorGreen();
                    alertSound2.play();

                    setTimeout(() => {
                      this.changeToDefaultGreen();
                    }, 4000);
                  }, 100);
                }, 4000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }
  }

  changeToDefault() {
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
    light1.classList.remove("red");
    light2.classList.remove("red");
    light3.classList.remove("red");
    light4.classList.remove("red");
    light5.classList.remove("red");
    light6.classList.remove("red"); 
    light7.classList.remove("red");
    light8.classList.remove("red");
    light9.classList.remove("red");
    light10.classList.remove("red");

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
    }
  }

  changeColorGreen() {
    const lightG1 = document.getElementById("lightG1");
    const lightG2 = document.getElementById("lightG2");
    const lightG3 = document.getElementById("lightG3");
    const lightG4 = document.getElementById("lightG4");
    const lightG5 = document.getElementById("lightG5");
    const lightG6 = document.getElementById("lightG6");
    const lightG7 = document.getElementById("lightG7");
    const lightG8 = document.getElementById("lightG8");
    const lightG9 = document.getElementById("lightG9");
    const lightG10 = document.getElementById("lightG10");

    if (lightG1 && lightG2 && lightG3 && lightG4 && lightG5 && lightG6 && lightG7 && lightG8 && lightG9 && lightG10) {
      lightG1.classList.add("green");
      lightG2.classList.add("green");
      lightG3.classList.add("green");
      lightG4.classList.add("green");
      lightG5.classList.add("green");
      lightG6.classList.add("green");
      lightG7.classList.add("green");
      lightG8.classList.add("green");
      lightG9.classList.add("green");
      lightG10.classList.add("green");
    }
  }

  changeToDefaultGreen() {
    const lightG1 = document.getElementById("lightG1");
    const lightG2 = document.getElementById("lightG2");
    const lightG3 = document.getElementById("lightG3");
    const lightG4 = document.getElementById("lightG4");
    const lightG5 = document.getElementById("lightG5");
    const lightG6 = document.getElementById("lightG6");
    const lightG7 = document.getElementById("lightG7");
    const lightG8 = document.getElementById("lightG8");
    const lightG9 = document.getElementById("lightG9");
    const lightG10 = document.getElementById("lightG10");

    if (lightG1 && lightG2 && lightG3 && lightG4 && lightG5 && lightG6 && lightG7 && lightG8 && lightG9 && lightG10) {
      lightG1.classList.remove("green");
      lightG2.classList.remove("green");
      lightG3.classList.remove("green");
      lightG4.classList.remove("green");
      lightG5.classList.remove("green");
      lightG6.classList.remove("green");
      lightG7.classList.remove("green");
      lightG8.classList.remove("green");
      lightG9.classList.remove("green");
      lightG10.classList.remove("green");

      lightG1.classList.add("color-default");
      lightG2.classList.add("color-default");
      lightG3.classList.add("color-default");
      lightG4.classList.add("color-default");
      lightG5.classList.add("color-default");
      lightG6.classList.add("color-default");
      lightG7.classList.add("color-default");
      lightG8.classList.add("color-default");
      lightG9.classList.add("color-default");
      lightG10.classList.add("color-default");
    }
  }
}







