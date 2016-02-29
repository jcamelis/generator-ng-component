'use strict';
/**
 * @ng-doc directive
 * @name <%= scriptAppName %>.directive:<%= cameledName %>
 * @description // @todo add description here
 * 
 * @example
<example module="<%= cameledName %>" >
   <file name="index.html">
   </file>
   <file name="script.js">
   </file>
</example>
 */
angular.module('<%= scriptAppName %>')
    .directive('<%= cameledName %>', function <%= cameledName %>DirectiveFactory () {
        return {
            template: '<div></div>',
            restrict: 'EA',
            link: function <%= cameledName %>Link(scope, element, attrs) {
                element.text('this is the <%= cameledName %> directive');
            },
            controller: function <%= cameledName %>Controller($scope) {
                var self = this;
            }
        };
    });
