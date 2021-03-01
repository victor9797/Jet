/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
'use strict';
define(
    ['knockout', 
    'ojL10n!./resources/nls/field-text-strings', 
    'ojs/ojcontext', 
    'ojs/ojknockout'], 
    function (ko, componentStrings, Context) {
    
    function FieldTextModel(context) {
        var self = this;
    
        //At the start of your viewModel constructor
        var busyContext = Context.getContext(context.element).getBusyContext();
        var options = {"description": "Web Component Startup - Waiting for data"};
        self.busyResolve = busyContext.addBusyState(options);

        self.composite = context.element;

        //Example observable
        self.messageText = ko.observable('Hello from field-text');
        self.properties = context.properties;
        self.res = componentStrings['field-text'];

        // Example for parsing context properties
        self.text = "Hello"
        if (context.properties.text) {
          self.text = context.properties.text
        } 


        //Once all startup and async activities have finished, relocate if there are any async activities
        self.busyResolve();
    };

    FieldTextModel.prototype.onClick = function (event) {
      var self = this;

      console.log("Custom defined event")

      //Raise the custom event
      self.composite.dispatchEvent(new CustomEvent('onClick', {}));
    };

    // FieldTextModel.prototype.propertyChanged = function(context){
    // };


    
    //Lifecycle methods - uncomment and implement if necessary 
    //FieldTextModel.prototype.activated = function(context){
    //};

    FieldTextModel.prototype.connected = function(context){
      var self = this;
      //Wire the custom event raise function into the click on the component
      self.composite.addEventListener('click', function (event) {
        self.onClick(event);
      });
    };

    //FieldTextModel.prototype.bindingsApplied = function(context){
    //};

    //FieldTextModel.prototype.disconnected = function(context){
    //};

    return FieldTextModel;
});
