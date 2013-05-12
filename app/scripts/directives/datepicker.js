'use strict';

angular.module('pgrcApp')
  .directive('datepicker', function($parse) {
  return function(scope, element, attrs) {
    var ngModel = $parse(attrs.ngModel);
    $(function() {
      element.datepicker({
        inline: true,
        dateFormat: 'mm/dd/yy',
        onSelect: function (dateText, inst) {
          scope.$apply(function(scope){
            ngModel.assign(scope, dateText);
          });
        }
      });
    });
   };
});