import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import BikeService from "./js/bike-wise-service.js";

$("#submit").on("click", (event) => {
  event.preventDefault();
  const zipcode = $("#zipcode").val();
  BikeService.getNearbyCrashesWithZipCode(zipcode).then(function (response) {
    showIncidents(response);
  });
});
//const showUrl = (idNumber) => {};
$(".results").on("click", ".url", (e) => {
  location.href = `${e.target.id}`;
});
const showIncidents = (response) => {
  if (response.incidents) {
    getElements(response.incidents);
  } else {
    $(".show-errors").text(`Looks like there was an error: ${response}`);
  }
};

const getElements = (incidents) => {
  incidents.forEach((incident) => {
    $(".results").append(`<h5>${incident.title}</h5>`);
    $(".results").append(`<p>${incident.description}</p>`);
    $(".results").append(
      `<button id="${incident.url}" class="url btn-primary">Go to url</button>`
    );
  });
};
