let BoardMember = function (name, homestate, training) {
  this.name = name;
  this.homestate = homestate;
  this.training = training;
}

BoardMember.prototype.veto = function () {
  return "No, I must disagree";
}

BoardMember.prototype.approve = function () {
  return "You can do that!";
}

BoardMember.prototype.doCharity = function () {
  return "I like to help people.";
}

BoardMember.prototype.releasePressStatement = function () {
  return "You will see great things from Scuber.";
}

BoardMember.prototype.sayHi = function () {
  return `Hi, my name is ${name}. I am from ${homeState}, and I was trained in ${training}.`;
}

BoardMember.prototype.printHomeState = function () {
  console.log(`${homestate}`);
}

let sue = new BoardMember("Sue", "NY", "sales")
//console.log(sue.homeState)
sue.printHomeState
sue.releasePressStatement
