var button = document.getElementById('button');
var vineNames =
["Fre sha va ca do",
"Look at all those chickens",
"She needs some milk",
"Hi, welcome to Chili's",
"Michael with a B",

"Croissant",
"And they were roommates",
"I am confusion",
"WHAT ARE THOSE?",
"Your actions have consequences",

"Road work ahead",
"I didn't get no sleep 'cause of y'all",
"Sodium",
"0mg, cholesterol!",
"Why be mad",

"Nice, Ron",
"Ninki Minjaj",
"Abraham Lincoln",
"It's an avocado!",
"Duck army",

"Let me give you a kiss",
"Daddy?",
"Happy birthday Raven!",
"Would you not eat my pants",
"Colorado",

"Talent Show",
"Look at this graph",
"Watermelon",
"Freestyle dance teacher",
"Stress relief",

"Chicken strips",
"It is Wednesday my dudes",
"Hurricane tortilla",
"Baby shower",
"Who summoned me",
 
"Kung Fu Panda 2",
"I'm not answering your phone call for a reason",
"Thicker than a bowl of oatmeal",
"Power of god and anime",
"Freestyle dance teacher",
 
"B, where?",
"Happy birthday Raven!",
"Marlene, your speech was so good",
"Daddy?",
"Talent show",
 
"YEET",
"When Life gives you lemons",
"Sneezed on the beet",
"F you.",
"I love you, bitch",
 
"You can't kill me",
"Good evening",
"I won't hesitate",
"Why is that guy so good at bowling",
"Without me?",
 
"Big time rush",
"I'm not sure",
"I built this cage",
"Can I help you",
"Vaccum",
 

]

var vineLinks =
["https://www.youtube.com/embed/qBeHqz0c3Ww",
"https://www.youtube.com/embed/RUTyw9tIc-M",
"https://www.youtube.com/embed/e_vFCmv9KZ4",
"https://www.youtube.com/embed/bs53JQTuEc0",
"https://www.youtube.com/embed/s5BSAIUSUc4 ",

"https://www.youtube.com/embed/hRFUZBXOWZI ",
"https://www.youtube.com/embed/4ZuydxEUpFM",
"https://www.youtube.com/embed/tdyybvuacVc",
"https://www.youtube.com/embed/2NL2lRwlDbw",
"https://www.youtube.com/embed/iZlpsneDGBQ",

"https://www.youtube.com/embed/6AYv6rV3NXE",
"https://www.youtube.com/embed/110l4ynyhII",
"https://www.youtube.com/embed/GouWVUFQoJg",
"https://www.youtube.com/embed/94LHw8fa_GE",
"https://www.youtube.com/embed/EHQZkSIxGdE",

"https://www.youtube.com/embed/MUINFs1Sp94",
"https://www.youtube.com/embed/__8evF5L8fY",
"https://www.youtube.com/embed/jbabpVUa_pY",
"https://www.youtube.com/embed/wG2-y5Yf1Oo",
"https://www.youtube.com/embed/nHc288IPFzk",

"https://www.youtube.com/embed/UoZpZZnekvs",
"https://www.youtube.com/embed/_4Zascmf2aw",
"https://www.youtube.com/embed/HEPwfliNn2s",
"https://www.youtube.com/watch?v=qOoWVxsnLPQ",
"https://www.youtube.com/embed/crv99-LT4j8",

"https://www.youtube.com/embed/mf70J41eShI",
"https://www.youtube.com/embed/sIlNIVXpIns",
"https://www.youtube.com/embed/zTTTyoThFBU",
"https://www.youtube.com/embed/ZkNMZlkrzaU",
"https://www.youtube.com/embed/dAxptzgPUPg",

"https://www.youtube.com/watch?v=d7mrBC0zLZg",
"https://www.youtube.com/watch?v=du-TY1GUFGk",
"https://www.youtube.com/watch?v=21jLmc_Il3o",
"https://www.youtube.com/watch?v=im_3ClEtPHs",
"https://www.youtube.com/watch?v=CIezqiRltTo",
 
"https://www.youtube.com/watch?v=UqYhi8BDk5Q",
"https://www.youtube.com/watch?v=-y4PA6T01ds",
"https://www.youtube.com/watch?v=Beo6o-P4ndM",
"https://www.youtube.com/watch?v=Tlwda9S58Lg",
"https://www.youtube.com/watch?v=ZkNMZlkrzaU",
 
"https://www.youtube.com/watch?v=KKBLmMB70DA",
"https://www.youtube.com/watch?v=HEPwfliNn2s",
"https://www.youtube.com/watch?v=e2X5p7_LUIY",
"https://www.youtube.com/watch?v=87GUSKlanB0",
"https://www.youtube.com/watch?v=mlgstMp_nd0",
 
"https://www.youtube.com/watch?v=2Bjy5YQ5xPc",
"https://www.youtube.com/watch?v=EcLPNGLRHU8",
"https://www.youtube.com/watch?v=xnd8kaQj2zQ",
"https://www.youtube.com/watch?v=_wkQSF3TdQU",
"https://www.youtube.com/watch?v=psxBizrPIxg",
 
"https://www.youtube.com/watch?v=GaNGKD4MTV0",
"https://www.youtube.com/watch?v=OyBmEeojfKo",
"https://www.youtube.com/watch?v=P-IC3db0agY",
"https://www.youtube.com/watch?v=BEIGG3vrRfA",
"https://www.youtube.com/watch?v=mtL6wm1ef-g",
 
"https://www.youtube.com/watch?v=OyOcV3293qg",
"https://www.youtube.com/watch?v=mOtd_rBHebI",
"https://www.youtube.com/watch?v=b-nwRDNoJR4",
"https://www.youtube.com/watch?v=SALPlLKzuBA",
"https://www.youtube.com/watch?v=wtllL4AStVU",

// "https://www.youtube.com/embed/ ",
]


button.addEventListener("click", function() {
  // alert("The button works!!!!!!!!");
  // randNum(diceFaces);
  var number  = randNum(vineNames);
  changePara(number);
  changeVid(number);
})

//Math
function randNum(array) {
  var randDeci = Math.random();
  var randBig = randDeci * array.length;
  var random = Math.floor(randBig);
  return random;
}

randNum(vineNames);

function changePara(someNum) {
  var vineName = document.getElementById("vine-name");
  vineName.innerHTML = vineNames[someNum];
}

// function vidSwitch(someNum) {
//   var vineVid = document.getElementById("video");
//   vineVid.src = vineLink[someNum];
// }

function changeVid(someNum) {
    var vineLink = document.getElementById("video");
    vineLink.src = vineLinks[someNum];
};
