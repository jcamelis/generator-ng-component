'use strict';
/**
 * @ng-doc controller
 * @name <%= scriptAppName %>.controller:<%= cameledName %>Controller

 * @description // @todo add description here
 * 
 * @example
<example module="<%= cameledName %>">
   <file name="index.html">
   </file>
   <file name="script.js">
   </file>
</example>
 */
(function(){
<% if(hasFilter('es6')) { %>
class <%= classedName %>Controller {
  constructor() {
    this.message = 'Hello';
  }
}<% } else { %>
function <%= classedName %>Controller($scope) {
  $scope.message = 'Hello';
}<% } %>

angular.module('<%= scriptAppName %>')
  .controller('<%= classedName %>Controller', <%= classedName %>Controller);

})();
