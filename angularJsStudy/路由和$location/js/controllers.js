/**
 * Created by cmh on 2016/4/29.
 */
//为核心的AMail服务创建模块
var aMailServices = angular.module('AMail',[]);

//在URL，模板之间建立映射关系
function emailRouteConfing($routeProvider){
    $routeProvider.when('/',{
        controller:ListController,
        templateUrl:'../view/list.html'
    }),
        when('/view/:id',{
            controller:DetailController,
            templateUrl:'../view/detail.html'
        }),
        otherwise({
            redirectTo:'/'
        });
}
//配置我们的路由，以便AMail服务可以找到它
aMailServices.confing(emailRouteConfing);
//一些虚拟数据
messages = [{
    id:0,
    sender:'alllike@163.com',//发件人
    h1:'你好，老朋友',//标题
    date:'2016-04-06 14:23:45',//时间
    recipients:['4512154241@qq.com'],//收件人
    message:'伴随着法网出现的，永远是不知何时会落下的雨水。昨天法网参赛选手们，又一次遇到了他们的“老朋友”。原本18时（北京时间）开打的比赛被推迟到了19时进行，他们多出了一个小时的休整时间（当然，这并非他们的本意）。莎拉波娃之所以只用61分钟就轻取同胞佩尔瓦克，也许正是为了早点离场避雨；而德约科维奇就没有那么好运，雨水两次中断了他与索萨的比赛。不过也正因为这场雨，球迷才能找到平时发现不了的“彩蛋”——在场边等待比赛恢复时，德约邀请球童坐到了他身边，豪爽地干起饮料不说，还亲自给球童撑起了伞'
},
    {
    id:1,
    sender:'love@icloud.com',
    h1:'工资表已发送到邮箱',
    date:'2016-04-15 8:15:12',
    recipients:['989535212@qq.com'],
    message:'工资发过之后，如何证明公司已经给员工发过工资了？如果做一张工资表让员工签字的话，就违反了保密性了。请问如何在保证工资保密性的情况下，做一张表证明已经发过工资了。'
    },
    {
    id:2,
    sender:'dasds@163.com',
    h1:'iPhone6s只要4000元！',
    date:'2016-04-19 14:45:23',
    message:'武汉易通数码全新iPhone6低至3380元起售!iPhone6 plus仅3980起售!全场支持以旧换新,更可0首付分期付款!买手机不花一分钱,想购就购!店内其他机型同步'
    }];
//把我们的邮件信息发布到邮件列表
function ListController($scope){
    $scope.messages = messages;
}
//从路由信息（从url中解析出来的）中获取邮件ID，然后用它找到正确的对象
function DetailController($scope){
    $scope.message = messages[$routePrams.id];
}