let BoardMember = function (name, homeState, training) {
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

Boardprototype.veto = function () {
  return "No, I must disagree";
}
