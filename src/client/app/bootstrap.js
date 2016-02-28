import angular from "angular";
import "bootstrap";

import "./app.module";
import "./app.controller";
import "./app.directive";

angular.element(document).ready(function(){
    angular.bootstrap(document, ['app']);
});
