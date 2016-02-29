'use strict';
/**
 * @ng-doc controller
 * @name <%= scriptAppName %>.controller:<%= cameledName %>
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
    .controller('<%= classedName %>Ctrl', function ($scope) {
        $scope.message = 'Hello';
    });
