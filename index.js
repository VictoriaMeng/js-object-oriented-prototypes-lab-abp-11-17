let BoardMember = function (name, homeState, training) {
  this.name = name;
  this.homestate = homeState;
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
  return `Hi, my name is ${name}. I am from ${homestate}, and I was trained in ${training}.`;
}
