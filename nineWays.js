function print_str(message) {
    console.log(message);
}
print_str("I love Javascript!!!");

var print_str = function(message) {
    console.log(message);
}
print_str("I love Javascript!!!");

var print_str = (message) => {
    console.log(message);
} 
print_str("I love Javascript!!!");

(function(message) {
    console.log(message);
})("I love Javascript!!!");

var print_str = new Function('message', 'console.log(message);');
print_str("I love Javascript!!!");

var print_str = console.log.bind(console);
print_str("I love Javascript!!!");

function print_str(message) {
    this.message = message;
}
print_str.prototype.print = function() {
    console.log(this.message);
};
var obj = new print_str("I love Javascript!!!");
obj.print();

var print_str = console.log;
print_str.apply(console, ["I love Javascript!!!"]);

var print_str = console.log;
print_str.call(console, "I love Javascript!!!");


