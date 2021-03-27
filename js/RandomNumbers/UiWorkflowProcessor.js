function UiWorkflowProcessor(uiWorkflow) {
    var api = {};
  
    api.workflow = uiWorkflow;
    api.position = 0;
  
    api.processStep = function(value) {
      var uiWorkflowStep = api.workflow[api.position];
  
      if (uiWorkflowStep.call !== undefined) {
        uiWorkflowStep.call(value);
      }
  
      api.position ++;
      // Wenn wir noch eine weitere Position im Workflow haben, 
      // dann führen wir den nächsten Schritt aus.
      if ( api.position < api.workflow.length) {
        api.startStep();
      }
    }
  
    api.startStep = function() {
      var uiWorkflowStep = api.workflow[api.position];
    
      var message = uiWorkflowStep.message;
      if ( typeof message === "function" ) {
        // Wenn message keine Zeichenkette ist, dann ist sie eine Funktion.
        message = message();
      }
  
      if (uiWorkflowStep.type === "alert") {
        vex.dialog.alert({ 
          message: message,
          callback : api.processStep
        });
      }
  
      if (uiWorkflowStep.type === "prompt") {
        vex.dialog.prompt({
          message: message,
          placeholder: uiWorkflowStep.placeholder,
          callback: api.processStep
        });      
      }
    };
  
    api.run = () => {
      api.startStep();
    };
  
    return api;
  }
