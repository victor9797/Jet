/*
 * Your customer ViewModel code goes here
 */
define(['knockout', 'accUtils', 'ojs/ojmodel', 'ojs/ojcollectiondataprovider', 'ojs/ojtable'],
 function(ko, accUtils, Model, CollectionDataProvider) {
    function RestViewModel() {

      // Rest vairables for airports
      this.serviceURLAirports = 'https://www.ryanair.com/api/locate/v1/autocomplete/airports';
      this.datasourceAirports = ko.observable();
      this.airCol = ko.observable();

      // Define custom parsing from backend
      this.parseAirports = function (response) {
        return {
          Name: response['name'],
          Country: response['country']['name'],
          City: response['city']['name'],
          Code: response['code'],
          Latitude: response['coordinates']['latitude'],
          Longitude: response['coordinates']['longitude'],
        };
      };

      this.AirportModel = Model.Model.extend({
        urlRoot: this.serviceURLAirports,
        parse: this.parseAirports
      });

      this.myAirportModel = new this.AirportModel();

      this.AirportsCollection = Model.Collection.extend({
        url: this.serviceURLAirports,
        model: this.myAirportModel
      });

      this.airCol(new this.AirportsCollection());

      this.datasourceAirports(new CollectionDataProvider(this.airCol()));

      // Rest variables for suggestions
      this.serviceURLSuggestions = 'https://www.ryanair.com/api/potd/v1/suggestions?market=en-us';
      this.datasourceSuggestions = ko.observable();
      this.sugCol = ko.observable();

      // Define custom parsing from backend
      this.parseSuggestions = function (response) {
        return {
          Departure: response['outbound']['departureAirport']['countryName'],
          Arrival: response['outbound']['arrivalAirport']['countryName']
        };
      };

      this.SuggestionModel = Model.Model.extend({
        urlRoot: this.serviceURLSuggestions,
        parse: this.parseSuggestions
      });

      this.mySuggestionModel = new this.SuggestionModel();

      this.SuggestionsCollection = Model.Collection.extend({
        url: this.serviceURLSuggestions,
        model: this.mySuggestionModel
      });

      this.sugCol(new this.SuggestionsCollection());

      this.datasourceSuggestions(new CollectionDataProvider(this.sugCol()));

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  
       */
      this.connected = () => {
        accUtils.announce('Rests page loaded.', 'assertive');
        document.title = "Rests";
        // Implement further logic if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return RestViewModel;
  }
);
