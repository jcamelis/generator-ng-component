'use strict';
/**
 * @ng-doc service
 * @name <%= scriptAppName %>.decorator:<%= cameledName %>
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
    .config(function ($provide) {
        $provide.decorator('<%= cameledName %>', function ($delegate) {
            // decorate the $delegate
            return $delegate;
        });
    });
