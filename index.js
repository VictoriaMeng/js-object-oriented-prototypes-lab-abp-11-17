let BoardMember = function (name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

BoardMember.prototype.veto = function () {
  return "No, I must disagree";
}

BoardMember.prototype.approve = function () {
  return "You can do that!";
}
