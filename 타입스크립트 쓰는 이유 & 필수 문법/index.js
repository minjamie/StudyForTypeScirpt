var 이름 = "minjae"; // Union type 다양한 타입 들어올 수 있게 해준다.
var 이름들 = ["kim", "park"];
var 이름쌍 = { name: "kim" };
// 함수에도 타입 지장
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var jane = { name: "kim" };
// 클래스도 타입지정 가능
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
