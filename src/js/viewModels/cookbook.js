/*
 * Your dashboard ViewModel code goes here
 */
define(['knockout','accUtils', 'ojs/ojbootstrap', 'ojs/ojarraydataprovider', 'ojs/ojchart', 'ojs/ojselectsingle'],
 function(ko, accUtils, Bootstrap, ArrayDataProvider) {
    function DashboardViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      this.val = ko.observable('pie');
  
      var browsers = [
        { value: 'pie', label: 'Pie' },
        { value: 'line', label: 'Line' },
        { value: 'bar', label: 'Bar' },

      ];
  
      this.browsersDP = new ArrayDataProvider(browsers, { keyAttributes: 'value' });

      //

      let data =   [
        {
          "id": 0,
          "series": "Series 1",
          "group": "Group A",
          "value": 42
        },
        {
          "id": 1,
          "series": "Series 1",
          "group": "Group B",
          "value": 34
        },
        {
          "id": 2,
          "series": "Series 2",
          "group": "Group A",
          "value": 55
        },
        {
          "id": 3,
          "series": "Series 2",
          "group": "Group B",
          "value": 30
        },
        {
          "id": 4,
          "series": "Series 3",
          "group": "Group A",
          "value": 36
        },
        {
          "id": 5,
          "series": "Series 3",
          "group": "Group B",
          "value": 50
        },
        {
          "id": 6,
          "series": "Series 4",
          "group": "Group A",
          "value": 22
        },
        {
          "id": 7,
          "series": "Series 4",
          "group": "Group B",
          "value": 46
        },
        {
          "id": 8,
          "series": "Series 5",
          "group": "Group A",
          "value": 22
        },
        {
          "id": 9,
          "series": "Series 5",
          "group": "Group B",
          "value": 46
        }
      ];

      this.stackValue = ko.observable('off');
      this.orientationValue = ko.observable('vertical');
      this.dataProvider = new ArrayDataProvider(data, {keyAttributes: 'id'});

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboard";
        // Implement further logic if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);
