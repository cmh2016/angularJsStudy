/**
 * Created by cmh on 2016/4/11.
 */
function CarController($scope){
    $scope.items=[
        {title:"农夫山泉",quantity:8,price:2.5},
        {title:"雪碧",quantity:15,price:3.0},
        {title:"青岛啤酒",quantity:20,price:3.5}
    ];
    $scope.remove=function (index){
        $scope.items.splice(index,1);
    }
}