class Car {
    constructor(model, color, maker, maxSpeed, year) {
      this.model = model;
      this.color = color;
      this.maker = maker;
      this.maxSpeed = maxSpeed;
      this.year = year;
    }

    showHtmlDetails() {
      return `<hr><h2> ${this.maker}</h2>
    <h3>Year : ${this.year}</h3>
  <h3>Color : ${this.color}</h3>
  <h3>Max Speed : ${this.maxSpeed}</h3>
  <h3>Age of my Car : ${this.age()} years</h3>


    `;
    }

    showCarDetails() {
      console.log(
        "My Cars " +
          this.maker +
          "is a " +
          this.model +
          "\nThe year was made in : " +
          this.year +
          "\n its color is :" +
          this.color +
          "\nwith a max speed of " +
          this.maxSpeed
      );
    }

    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }

    accelerate() {}
  }
  //let myhtml;
  let html = [];
  const myHonda = new Car("HR-V", "Grey", "Honda", "180", "2022");

  //myhtml = myHonda.showHtmlDetails();

  html.push(myHonda.showHtmlDetails());
  /*
  let html = `<h2> ${myHonda.maker}</h2>
    <h3>Year : ${myHonda.year}</h3>
  <h3>Color : ${myHonda.color}</h3>
  <h3>Max Speed : ${myHonda.maxSpeed}</h3>
  <h3>Age of my Car : ${myHonda.age()} years</h3>


    `;
*/

  const myVolvo = new Car("sp", "Blue", "Volvo", "190", "2023");

  //myhtml = myMazda.showHtmlDetails();

  html.push(myVolvo.showHtmlDetails());

  const myMazda = new Car("sp", "Blue", "Mazda", "190", "2023");

  //myhtml = myMazda.showHtmlDetails();

  html.push(myMazda.showHtmlDetails());

  /*
  let html2 = `<hr><h2> ${myMazda.maker}</h2>
    <h3>Year : ${myMazda.year}</h3>
  <h3>Color : ${myMazda.color}</h3>
  <h3>Max Speed : ${myMazda.maxSpeed}</h3>
  <h3>Age of my Car : ${myMazda.age()} years</h3>


    `;
*/
  const myBMW = new Car("xyz", "Yellow", "BMW", "250", "2021");

  html.push(myBMW.showHtmlDetails());
  //myhtml = myBMW.showHtmlDetails();

  //html.push(myhtml);
  //html.push(myBMW.showHtmlDetails());

  const myTesla = new Car("xyz", "Black", "Tesla", "300", "2023");
  html.push(myTesla.showHtmlDetails());
  //      myhtml = myTesla.showHtmlDetails();

  //html.push(myhtml);

  /*
  
  let html3 = `<hr><h2> ${myBMW.maker}</h2>
    <h3>Year : ${myBMW.year}</h3>
  <h3>Color : ${myBMW.color}</h3>
  <h3>Max Speed : ${myBMW.maxSpeed}</h3>
  <h3>Age of my Car : ${myBMW.age()} years</h3>


    `;

*/

  const mySuzuki = new Car("swift", "Red", "Suzuki", "120", "2016");
  html.push(mySuzuki.showHtmlDetails());

  const myAbc = new Car("Abc", "Red", "Abc", "120", "2016");
  html.push(myAbc.showHtmlDetails());

  document.getElementById("myCarContainer1").innerHTML = html;

  //myHonda.model.age();

  //myMazda.showCarDetails();

  //myBMW.showCarDetails();
  /*
  class Pen {
    constructor() {}

    showPrice() {}
  }

  const myPen = new Pen();

  myPen.showPrice();
  */