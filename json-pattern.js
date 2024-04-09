fetch("products1.json") //// Replace with your actual JSON file or API endpoint URL
  .then((response) => response.json())
  .then((data) => {
    console.log(data); //testing to see if the data is pickedup from json file or not
  })
  .catch((error) =>
    console.error("Error fetching json data, please check your path", error)
  );