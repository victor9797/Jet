/*
 * Your Component ViewModel code goes here
 */
define(['accUtils', 'hello-world/loader', 'dropdown-with-chart/loader', 'demo-card/loader'],
 function(accUtils) {
    function ComponentViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      this.employees = [
        {
          name: 'Deb Raphaely',
          avatar: null,
          title: 'Purchasing Director',
          work: 5171278899,
          email: 'deb.raphaely@oracle.com'
        },
        {
          name: 'Adam Fripp',
          avatar: null,
          title: 'IT Manager',
          work: 6501232234,
          email: 'adam.fripp@oracle.com'
        }
      ];

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Component page loaded.', 'assertive');
        document.title = "Component";
        // Implement further logic if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return ComponentViewModel;
  }
);
