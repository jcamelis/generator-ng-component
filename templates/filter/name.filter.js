'use strict';
/**
 * @ng-doc service
 * @name <%= scriptAppName %>.filter:<%= cameledName %>
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
    .filter('<%= cameledName %>', function () {
        return function (input) {
            return '<%= cameledName %> filter: ' + input;
        };
    });
