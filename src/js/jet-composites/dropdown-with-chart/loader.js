/**
  Copyright (c) 2015, 2021, Oracle and/or its affiliates.
  Licensed under The Universal Permissive License (UPL), Version 1.0
  as shown at https://oss.oracle.com/licenses/upl/

*/
define(['ojs/ojcomposite', 'text!./dropdown-with-chart-view.html', './dropdown-with-chart-viewModel', 'text!./component.json', 'css!./dropdown-with-chart-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('dropdown-with-chart', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);