function ExecuteRandomNumberGenerator() {

  var generator = RandomNumberGenerator();

  var uiWorkflow = [
    { type: "prompt",  message: "Please provide your lowest number!",  placeholder: "type a number", call : generator.lowestNumberEntered  },
    { type: "prompt",  message: "Please provide your highest number!", placeholder: "type a number", call : generator.highestNumberEntered },
    { type: "alert", message: generator.evaluation }
  ];

  var app = UiWorkflowProcessor(uiWorkflow);
  app.run();
}
