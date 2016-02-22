import angular from "angular";

import "./app.module";
import "./app.controller";

angular.element(document).ready(function(){
    angular.bootstrap(document, ['app']);
});
