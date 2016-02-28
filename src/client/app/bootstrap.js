import angular from "angular";
import "bootstrap";

import "./app.module";
import "./app.controller";

angular.element(document).ready(function(){
    angular.bootstrap(document, ['app']);
});
