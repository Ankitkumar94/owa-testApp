class EncounterController {
  /* @ngInject */
  constructor(openmrsRest) {
    var vm = this;
    vm.encounters = [];
    vm.IsHidden = true;
    vm.notFound = false;
    vm.onsearch = () => {
      openmrsRest.getFull('encounter', {q: vm.query, includeAll: true}).then(function (response) {
        if(response.results.length > 0){
          vm.IsHidden = false;
          vm.notFound = true;
          vm.encounters = response.results;
        }
        else {
          vm.IsHidden = true;
          vm.notFound = false;
        }
      })
    }

  }
}
export default EncounterController;
