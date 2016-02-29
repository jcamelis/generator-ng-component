'use strict';
/**
 * @ng-doc service
 * @name <%= scriptAppName %>.factory:<%= cameledName %>Resource
 * @require ngResource
 * @description // @todo add description here
 * 
 * @example
<example module="<%= cameledName %>" deps="angular-resource.js">
   <file name="index.html">
   </file>
   <file name="script.js">
   </file>
</example>
 */
angular.module('<%= scriptAppName %>')
    .factory('<%= cameledName %>Resource', function <%= cameledName %>ResourceFactory($resource) {


        var URL_TEMPLATE = '/api/<%= cameledName %>/:id/:controller';

        // $resource instance
        return $resource(URL_TEMPLATE);
    });
