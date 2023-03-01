class MyReporter {
    onBegin(config, suite) {
      console.log('\x1b[34m%s\x1b[0m', `Starting the run with ${suite.allTests().length} tests`);
    }
  
    onTestBegin(test) {
      console.log(`Starting test ${test.title}`);
    }
  
    onTestEnd(test, result) {
        if(result.status=='failed'){
            console.log('\x1b[31m%s\x1b[0m', `Finished test ${test.title}: ${result.status}`);
        }else if(result.status=='passed'){
            console.log('\x1b[32m%s\x1b[0m', `Finished test ${test.title}: ${result.status}`);
        }
     
    }
  
    onEnd(result) {
      console.log(`Finished the run: ${result.status}`);
    }
  }
  
  module.exports = MyReporter;