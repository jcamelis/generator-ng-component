'use strict';
/**
 * @ng-doc component
 * @name <%= scriptAppName %>.component:<%= cameledName %>
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
    .component('<%= cameledName %>', {
        template: '<h1>Hello {{ $ctrl.message }}</h1>',
        bindings: {
            message: '<'
        },
        controller: function <%= cameledName %>Controller() {
            this.message = 'World'
        }
    });
