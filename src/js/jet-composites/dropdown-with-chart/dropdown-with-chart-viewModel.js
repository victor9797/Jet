/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
'use strict';
define(
    [ 'knockout', 'ojL10n!./resources/nls/dropdown-with-chart-strings', 'ojs/ojcontext',
      'ojs/ojbootstrap', 'ojs/ojarraydataprovider', 'ojs/ojchart', 'ojs/ojselectsingle'], 
    function (ko, componentStrings, Context, Bootstrap, ArrayDataProvider) {
    
    function ExampleComponentModel(context) {
        var self = this;
        
        //At the start of your viewModel constructor
        self.val = ko.observable('pie');
  
        var browsers = [
          { value: 'pie', label: 'Pie' },
          { value: 'line', label: 'Line' },
          { value: 'bar', label: 'Bar' },

        ];
    
        self.browsersDP = new ArrayDataProvider(browsers, { keyAttributes: 'value' });

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

        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');
        self.dataProvider = new ArrayDataProvider(data, {keyAttributes: 'id'});


        var busyContext = Context.getContext(context.element).getBusyContext();
        var options = {"description": "Web Component Startup - Waiting for data"};
        self.busyResolve = busyContext.addBusyState(options);

        self.composite = context.element;

        //Example observable
        self.messageText = ko.observable('Hello from dropdown-with-chart');
        self.properties = context.properties;
        self.res = componentStrings['dropdown-with-chart'];
        // Example for parsing context properties
        // if (context.properties.name) {
        //     parse the context properties here
        // }

        //Once all startup and async activities have finished, relocate if there are any async activities
        self.busyResolve();
    };
    
    //Lifecycle methods - uncomment and implement if necessary 
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    //ExampleComponentModel.prototype.connected = function(context){
    //};

    //ExampleComponentModel.prototype.bindingsApplied = function(context){
    //};

    //ExampleComponentModel.prototype.disconnected = function(context){
    //};

    //ExampleComponentModel.prototype.propertyChanged = function(context){
    //};

    return ExampleComponentModel;
});
