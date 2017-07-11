class PatientSearchController {
  /* @ngInject */
  constructor(openmrsRest) {
    var vm = this;
    vm.patients = [];
    vm.IsHidden = true;
    vm.notFound = false;
    vm.onsearch = () => {
      openmrsRest.getFull('patient', {q: vm.query, includeAll: true}).then(function (response) {
        if(response.results.length > 0){
          vm.IsHidden = false;
          vm.notFound = true;
          vm.patients = response.results;
        }
        else {
          vm.IsHidden = true;
          vm.notFound = false;
        }
      })
    }

  }
}
export default PatientSearchController;
