function solution(instructions) {
  let x = 0;
  let y = 0;
  let direction = 0;

  for (const instruction of instructions) {
    let [word, value] = instruction.split(" ");
    value = Number.parseFloat(value);

    if (word === "WALK") {
      let theta = direction * (Math.PI / 180);
      x += value * Math.cos(theta);
      y += value * Math.sin(theta);
    } else {
      direction += value;
    }
  }
  return [
    "TURN " + Math.atan2(y, x) / (Math.PI / 180),
    "WALK " + Math.hypot(x, y)
  ];
}

module.exports = exports = solution;
