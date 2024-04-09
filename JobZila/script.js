fetch("job-listing.json") //// Replace with your actual JSON file or API endpoint URL
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);//testing to see if the data is pickedup from json file or not

    let jobListingContainer = document.getElementById("job-listings-container");
    for (let i = 0; i < data.length; i++) {
      let jobListing = data[i];
      let jobListingElement = document.createElement("div");
      jobListingElement.classList.add("job-listing");
      jobListingElement.innerHTML = `
      
            <h3>${jobListing.title}</h3>
            <p>${jobListing.company}</p>
            <p>${jobListing.location}</p>
            <p>${jobListing.description}</p>


`;
      jobListingContainer.appendChild(jobListingElement);
    }
  });