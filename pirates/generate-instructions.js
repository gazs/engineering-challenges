function turn() {
  const degrees = Math.random() > 0.5 ? 90 : 270;
  return `TURN ${degrees}`;
}

function walk() {
  const distance = 5 + Math.ceil(Math.random() * 10);
  return `WALK ${distance}`;
}

function generate(iterations) {
  const instructions = [];
  for (let index = 0; index < iterations; index++) {
    instructions.push(walk());
    instructions.push(turn());
  }
  instructions.push(walk());
  return instructions;
}

module.exports = exports = generate;
