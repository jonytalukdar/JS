function explainCallback(name, age, task) {
  console.log('name :', name);
  console.log('your age : ', age);
  task();
}

function washHand() {
  console.log('wash your hand with soap');
}
function takeShower() {
  console.log('take a shower');
}
function scrollFb() {
  console.log('Scroll facebook dont like any post');
}

explainCallback('Joney Talukdar', 21, washHand);
explainCallback('roney talukdar', 30, takeShower);
explainCallback('jubayer talukdar', 2, scrollFb);

function sample(a, b, c, callBack) {
  let d = a + b;
  let e = b + c;
  let f = a + c;
  let result = callBack(d, e, f);
  return result;
}

let result = sample(12, 23, 21, function (d, e) {
  return d + e;
});
console.log(result);
