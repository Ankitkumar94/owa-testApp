
"use strict";

import '../app/js/home/home';

describe('component: helloComponent', () => {
  beforeEach(angular.mock.module('home'));

  let component, scope, $componentController;

  beforeEach(inject(($rootScope, _$componentController_) => {

    scope = $rootScope.$new();
    $componentController = _$componentController_;

  }));

  it('Should print Hello! :)', () => {

    component = $componentController('helloComponent',
      {
        $scope: scope
      }
    );

    expect(component.hello).toEqual('Hello! :)');

  })
});







