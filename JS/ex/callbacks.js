function doSomething(functionAsAParameter) {
    console.log('do something');
    functionAsAParameter();
  }
  
  const done = function() {
    console.log('done');
  }
  
  doSomething(done);