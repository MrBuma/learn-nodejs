function Cat(name){
    this.stomash =[];

}
Cat.prototype.eat() = function(mouse){
    this.stomash.push(mouse);
};
module.exports = Cat;