/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['knockout', 'accUtils', 'ojs/ojarraydataprovider', 'ojs/ojbootstrap', 'ojs/ojmodule-element-utils', 'ojs/ojlogger'],
 function(ko, accUtils, ArrayDataProvider, Bootstrap, ModuleElementUtils, Logger) {
    function IncidentsViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      // Foreach Knockout binding
      this.people = [
        { firstName: 'Bert', lastName: 'Bertington' },
        { firstName: 'Charles', lastName: 'Charlesforth' },
        { firstName: 'Denise', lastName: 'Dentiste' }
      ]

      // Foreach Ojet binding
      
      var tableViewModel = { people: this.people }; // view model  for the table
      // load view and update module config
      var viewPromise = ModuleElementUtils.createView({'viewPath':'views/binding_table.html'});
      this.moduleConfig = viewPromise.then(
        function(tableView) {
          return {'view':tableView,'viewModel':tableViewModel};
        }.bind(this), 
        function(error){
          Logger.error('Error during loading view: ' + error.message);
          return {'view':[]};
        }
      );

      // If knockout
      this.displayMessage = ko.observable(false)

      // If ojet
      this.displayMessageOj = ko.observable("off")

      // Text binding knockout
      this.myMessage = "Hello world!!"

      // Text binding ojet
      this.myMessageOj = "Hello world from JET!"

  
      
  
      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Incidents page loaded.', 'assertive');
        document.title = "Incidents";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return IncidentsViewModel;
  }
);
