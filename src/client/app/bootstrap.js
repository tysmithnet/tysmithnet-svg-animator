import angular from "angular";
import "bootstrap";

import "./app.boot";
import "./navbar/navbar.boot";

angular.element(document).ready(function(){
    angular.bootstrap(document, ['app']);
});
