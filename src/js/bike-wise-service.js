export default class BikeWise {
  static getNearbyCrashesWithZipCode(zipcode) {
    return fetch(
      `https://bikewise.org:443/api/v2/incidents?page=1&incident_type=crash&zipcode=${zipcode}&proximity_square=100`
    )
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}
