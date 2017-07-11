class ProviderController {
  /* @ngInject */
  constructor(openmrsRest) {
    var vm = this;
    vm.providers = [];
    vm.IsHidden = true;
    vm.notFound = false;
    vm.onsearch = () => {
      openmrsRest.getFull('provider', {q: vm.query, includeAll: true}).then(function (response) {
        if(response.results.length > 0) {
          vm.IsHidden = false;
          vm.notFound = true;
          vm.providers = response.results;
        }
        else {
          vm.IsHidden = true;
          vm.notFound = false;
        }
      })
    }
  }
}
export default ProviderController;
