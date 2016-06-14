var addProduit = function ($timeout) {
    return{
      restrict:'EA',
      templateUrl: 'app/produit/addProduit/template.html',
      scope: {
        idstock:'=',
        quantite:'=',
        idoperation:'=',
        pcb:'=',
        frompanier:'=',
      },
      controllerAs:'vm',
      link:function(vm,elem,attr){
      }
    };
  };

angular.module('app.directives.addProduit', [])
  .directive('addProduit', ['$timeout', addProduit]);
