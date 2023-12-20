var Demo = /** @class */ (function () {
    function Demo(A, B) {
        console.log("Inside Parametrised constructor");
        this.No1 = A;
        this.No2 = B;
    }
    // Behaviour
    Demo.prototype.Display = function () {
        console.log("Inside Display function of Demo class");
    };
    return Demo;
}());
var obj = new Demo();
var obj1 = new Demo(10, 11);
var obj1 = new Demo(20, 21);
var obj2 = new Demo(10, 11);
var obj2 = new Demo(20, 21);
