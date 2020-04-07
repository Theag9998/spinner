//refactor code
const spinDial = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let time = 100;
for (let dialPos of spinDial) {
setTimeout(() => {
  process.stdout.write(`\r${dialPos}   `);
}, time);
time += 200;
};


