import template from '../hello.html';
import controller from '../controllers/hello.controller.js';

let helloComponent = {
    restrict: 'E',
    bindings: {},
    template: template,
    controller: controller,
    controllerAs: 'vm'
};

export default helloComponent;
