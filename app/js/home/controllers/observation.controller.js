class ObservationController {
  /* @ngInject */
  constructor(openmrsRest) {
    var vm = this;
    vm.observations = [];
    vm.IsHidden = true;
    vm.notFound = false;
    vm.onsearch = () => {
      openmrsRest.getFull('obs', {q: vm.query, includeAll: true}).then(function (response) {
        if(response.results.length > 0){
          vm.IsHidden = false;
          vm.notFound = true;
          vm.observations = response.results;
        }
        else {
          vm.IsHidden = true;
          vm.notFound = false;
        }
      })
    }
  }
}
export default ObservationController;
