'use strict';
/**
 * @ng-doc service
 * @name <%= scriptAppName %>.provider:<%= cameledName %>Resource
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
angular.module('<%= scriptAppName %>')
    .provider('<%= cameledName %>', function <%= cameledName %>ProviderFactory() {

        // Private variables
        var salutation = 'Hello';

        // Private constructor
        function Greeter() {
            this.greet = function () {
                return salutation;
            };
        }

        // Public API for configuration
        this.setSalutation = function (s) {
            salutation = s;
        };

        // Method for instantiating
        this.$get = function () {
            return new Greeter();
        };
    });
