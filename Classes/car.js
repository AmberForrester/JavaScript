class Car {
    constructor(model, color, maker, maxSpeed, year) {
      this.model = model;
      this.color = color;
      this.maker = maker;
      this.maxSpeed = maxSpeed;
      this.year = year;
    }

    showCarDetails() {

      return `

      <h2>${this.maker}</h2>
      <h3>Model: ${this.model}</h3>
      <h3>Year: ${this.year}</h3>
      <h3>Color: ${this.color}</h3>
      <h3>Max Speed: ${this.maxSpeed}</h3>
      <h3>Age of my Car: ${this.age()} years</h3>

    `;

    }

    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }

    accelerate() {}
  }

  function createCarHTML(car) {

    return `<hr>${car.showCarDetails()}`;
  }

  const myHonda = new Car("CR-V", "White", "Honda", "180", "2022");

  const myMazda = new Car("sp", "red", "Mazda", "190", "2023");

  const myBMW = new Car("x5", "Blue", "BMW", "250", "2021");

  const myAcura = new Car("MDX", "Silver", "Acura", "280", "2023");

  const myNissan = new Car("Sentra", "Black", "Nissan", "180", "2010");


  document.getElementById("myCarContainer1").innerHTML = createCarHTML(myHonda);
  document.getElementById("myCarContainer2").innerHTML = createCarHTML(myMazda);
  document.getElementById("myCarContainer3").innerHTML = createCarHTML(myBMW);
  document.getElementById("myCarContainer4").innerHTML = createCarHTML(myAcura);
  document.getElementById("myCarContainer5").innerHTML = createCarHTML(myNissan);


  myHonda.showCarDetails();
  myMazda.showCarDetails();
  myBMW.showCarDetails();
  myAcura.showCarDetails();
  myNissan.showCarDetails();
