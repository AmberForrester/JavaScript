class Car {
    constructor(model, color, maker, maxSpeed, year) {
      this.model = model;
      this.color = color;
      this.maker = maker;
      this.maxSpeed = maxSpeed;
      this.year = year;
    }

    showHtmlCarDetails() {
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

  let html = [];

  const myHonda = new Car("HR-V", "Grey", "Honda", "180", "2022");

  html.push(myHonda.showHtmlCarDetails());

  const myMazda = new Car("sp", "Blue", "Mazda", "190", "2023");

  html.push(myMazda.showHtmlCarDetails());

  const myBMW = new Car("xyz", "Yellow", "BMW", "250", "2021");
  html.push(myBMW.showHtmlCarDetails());

  const myTesla = new Car("Tesla-X", "Yellow", "Tesla", "250", "2023");
  html.push(myTesla.showHtmlCarDetails());

  const mySuzuki = new Car("swift", "Red", "Suzuki", "120", "2016");
  html.push(mySuzuki.showHtmlCarDetails());

  const myAbc = new Car("Abc", "Red", "Abc", "120", "2016");
  html.push(myAbc.showHtmlCarDetails());

  document.getElementById("myCarContainer1").innerHTML = html;