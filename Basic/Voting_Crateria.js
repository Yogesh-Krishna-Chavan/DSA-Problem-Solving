function vote(age) {
  if (age < 0) {
    console.log("Invalid age");
  } else if (age > 18) {
    console.log("Valid age for vote");
  } else {
    console.log("Not valid age for vote");
  }
}

vote(20);
vote(-1);
vote(17);
