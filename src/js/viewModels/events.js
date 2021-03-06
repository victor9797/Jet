/*
 * Your dashboard ViewModel code goes here
 */
define(['knockout','accUtils', 'field-text/loader'],
 function(ko, accUtils) {
    function DashboardViewModel() {
        // Below are a set of the ViewModel methods invoked by the oj-module component.
        // Please reference the oj-module jsDoc for additional information.
        
        
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

    this.onClick = function(event) {
        console.log("Build-in event")
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return DashboardViewModel;
  }
);
