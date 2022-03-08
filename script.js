// Literal Math Method Exercise
// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs";

// 1b
console.log(warmHugs.toUpperCase());

// 1c
// console.log(warmHugs.replace("like", "love"));

warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";

// 2b
// beenImpaled = beenImpaled.slice(18, 36);
beenImpaled = beenImpaled.slice(-18);
console.log(beenImpaled);

// console.log(beenImpaled.slice(18, 36));

// 3a
let dotDotDot = "...";

// 3b
let skullBones = `I don't have a skull ${dotDotDot} or bones.`;
console.log(skullBones);

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.random(); // 0 through 0.99999
randomNumber *= 3; // 0 to 2.99999
randomNumber = Math.floor(randomNumber); //gets rid of decimal
randomNumber++;
console.log(randomNumber);
