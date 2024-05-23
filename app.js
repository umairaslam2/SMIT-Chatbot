var userInput = document.querySelectorAll(".userInput");
var sendBtn = document.querySelector(".sendBtn");
var cahtList = document.querySelector(".chatList");
var loadingImg = document.querySelector(".loadingImg");
var count = 0;
var urduGreetings = [
  "assalam o alaikum",
  "salam",
  "asalam o alikum",
  "asalam o alaikum",
  "aslam o alikum",
  "assalamu alaikum",
  "salaam",
  "salaam alaikum",
  "assalamualaikum",
  "salamoona",
  "assalamo alaikum",
  "as-salaam alaikum",
  "salam alaikum",
];

var abilities = [
  "ap mujhe kya information de skte ho",
  "ap mujhe konsi information de skte ho",
  "ap mujhe konsi information doge",
  "ap meri kya help kr skte ho",
  "konsi information",
  "kis kisam ki information",
  "kis kisam ki information de skte ho",
  "kis qisam ki information",
  "kis cheez ki information de skte ho",
  "kis bare men information",
  "kis bare men information de skte ho",
  "kis bare men",
  "kesi information",
  "kis bare men de skte ho",
  "kya information de skte ho",
];

var greetings = [
  "or sunao",
  "kya hal hai",
  "kese mijaz hen",
  "aadaab",
  "kya haal hai",
  "kese ho",
  "kaise ho",
  "kya haal chal",
  "kya chal raha hai",
  "kya ho raha hai",
  "kya haal hain",
  "sab theek",
];

var replyGreetings = [
  "men bhi theak hun",
  "men theak hun",
  "men thek hun",
  "men thik hun",
  "mast",
  "behtareen",
  "boht acha",
  "fi fat",
  "fit",
  "alhamdullillah",
  "zabardast",
  "Mein theek hun tumhare kya haal hain?",
  "Mein theek hun tum kaise ho?",
  "Mein theek hun tum kaise ho?",
  "Sab theek chal raha hai tumhare kya haal hain?",
  "Sab theek chal raha hai tumhare kya haal hain?",
  "Kuch khaas nahi tumhare kya ho raha hai?",
  "Mein theek hun tumhare kya haal hain?",
  "Haan, sab theek hai. Tumhare kya haal hain?",
];
var englishGreetings = [
  "hello",
  "hi",
  "hey",
  "greetings",
  "good morning",
  "good afternoon",
  "good evening",
  "hi there",
  "hey there",
  "howdy",
  "what's up",
  "sup",
  "hiya",
  "good day",
  "salutations",
  "as-salamu alaykum",
  "hello there",
  "hey buddy",
  "yo",
  "hey man",
  "hey dude",
  "how are you",
  "how are you doing",
  "how do you do",
  "what's going on",
  "hello everyone",
  "hi everyone",
  "hey everyone",
  "good to see you",
  "hello friend",
  "hey friend",
  "hi friend",
  "salamu alaikum",
  "how's it going",
  "how's everything",
  "what's new",
];

var registrationProcess = [
  "registration ka process kya hai",
  "registration kaise karni hai",
  "registration krwane ke liye kya karna hoga",
  "registration krne ke liye kya karna hoga",
  "acha mene registration krwani hai",
  "acha mene registration krni hai",
  "acha mene registration krwani hai registration ka process kya hai",
  "acha mene registration krni hai registration ka process kya hai",
  "acha mene registration krwani hai iska process kya hai",
  "acha mene registration krni hai iska process kya hai",
  "acha mene registration krwani hai iska kya process hai",
  "acha mene registration krni hai iska kya process hai",
  "acha mene registration krwani hai is ka kya process hai",
  "acha mene registration krni hai is ka kya process hai",
  "acha mene registration krwani hai kese hogi",
  "acha registration kese hogi",
  "mene smit men registration krwani hai",
  "mene smit k courses men registration lena hai",
  "mene smit k it courses men registration lena hai",
  "mujhe registration lena hai",
  "acha mujhe registration lena hai",
  "acha mujhe registration lena hai registration ka process kya hai",
  "acha mujhe registration lena hai iska ka process kya hai",
  "men theak hun or mujhe registration lena hai iska process kya hai",
  "men theak hun mujhe registration lena hai iska ka kya process hai",
  "men theak hun mujhe registration lena hai to registration kese milega",
  "men theak hun mujhe registration lena hai to kese milega",
  "men theak hun mujhe registration lena hai to kese lunga",
  "men theak hun mujhe registration lena hai",
  "men theak hun mujhe registration lena hai to registration kaise milega",
  "mujhe smit men registration lena hai",
  "mujhe it men registration lena hai",
  "mujhe smit k courses men registration lena hai",
  "mujhe smit k it courses men registration lena hai",
  "mujhe registration chahie",
  "mujhe dakhila chahie",
  "registration ke liye requirements kya hain",
  "registration ke liye documents kya chahiye",
];

var registrationInCourseOf = [
  "web development",
  "web and app development",
  "web & app development",
  "mern stack web development",
  "mujhe web & app development men registration krwani hai",
  "mujhe web and app development men registration krwani hai",
  "mujhe web & app development men registration  hai",
  "mujhe web & app men registration  hai",
  "mujhe web development men registration krwani hai",
  "mujhe mern stack men registration krwani hai",
  "mujhe mern stack development men registration krwani hai",
  "mujhe it men registration krwani hai",
  "mujhe it k kisi course men registration krwani hai",
];

var testLocation = "test khan per hota hai";
var registrationFees = [
  "registration fees kitni hai",
  "registration ki fees kitni hai",
  "registration ki kya fees hai",
  "kya registration ki koi fees bhi hai",
];

var registrationForm = [
  "registration form kahan milega",
  "registration form kaise fill karna hai",
];

var registrationDate = [
  "registration kab open hain",
  "registrations kab shuru hain",
  "registration kab se start hain",
  "registration ka last date kya hai",
];
var userName = false;
var userQualification = false;

function sendMessage(val) {
  var value = "";
  //* THIS CONDITION IS FOR "SEND BTN" BECAUSE WHEN "SEND BTN" IS CLICKED THEN VALUE IS GOTTEN IN "val" BY THIS CONDITION
  if (val && userName) {
    value = val;
    userName = val;
  } else if (val && userQualification) {
    value = val;
    userQualification = val;
  } else if (val) {
    value = val;
  }
  //* THIS CONDITION IS FOR "KEY BOARD 'ENTER' KEY" BECAUSE WHEN "ENTER" IS PRESSED THEN VALUE IS GOTTEN BY "EVENT"
  else if (userName && event.target.value) {
    value = event.target.value;
    userName = event.target.value;
  } else if (userQualification && event.target.value) {
    value = event.target.value;
    userQualification = event.target.value;
  } else {
    value = event.target.value;
  }
  //* EXECUTING REPLYES BASED UPON THE USER INPUT VIA CONDITIONS
  if (event.keyCode == 13 || count == 1) {
    if (greetings.indexOf(value.toLowerCase()) != -1) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";

      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBot">Men theak hun zabardast. ap kese ho?</li>`;
      }, 2000);
    } else if (replyGreetings.indexOf(value.toLowerCase()) != -1) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";

      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBot">Allah apke lye asani kre or hamesha khush rakhe. Ameen!</li>`;
      }, 2000);
    } else if (urduGreetings.indexOf(value.toLowerCase()) != -1) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";

      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBot">Walikum Assalam!</li>`;
        loadingImg.style.display = "block";
      }, 2000);
      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBot">Kaise ho? Mein SMIT ChatBot hun or SMIT men addmission lene k hawale se apko thori boht information de skta hun.</li>`;
        loadingImg.style.display = "block";
      }, 3500);
      setTimeout(() => {
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>kesi information</button>`;
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>kis bare men information</button>`;
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>kis bare men information de skte ho</button>`;
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>konsi information</button>`;
        loadingImg.style.display = "none";
      }, 4500);
    } else if (englishGreetings.indexOf(value.toLowerCase()) != -1) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";

      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBot">Hello!</li>`;
        loadingImg.style.display = "block";
      }, 2000);
      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBot">Kaise ho? Mein SMIT ChatBot hun or SMIT men addmission lene k hawale se apko thori boht information de skta hun.</li>`;
        loadingImg.style.display = "block";
      }, 3500);
      setTimeout(() => {
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>kesi information</button>`;
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>kis bare men information</button>`;
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>kis bare men information de skte ho</button>`;
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>konsi information</button>`;
        loadingImg.style.display = "none";
      }, 4500);
    } else if (abilities.indexOf(value.toLowerCase()) != -1) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";
      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBot">men apko in cheezun k bare men bta skta hun k<br>
        SMIT men registration kese hogi <br>
        SMIT men kon konse courses hote hen<br>
        in courses ki fees kya hai<br>
        in courses ki duration kya hai<br></li>`;
        loadingImg.style.display = "block";
      }, 2000);
      setTimeout(() => {
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>acha mene registration krwani hai kese hogi</button>`;
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>registration ka process kya hai</button>`;

        loadingImg.style.display = "none";
      }, 4500);
    } else if (registrationProcess.indexOf(value.toLowerCase()) != -1) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";

      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBot">registration ka process ye hai k apko SMIT k official FaceBook page per update rehna hoga jab SMIT k FaceBook page per ya website per apko courses open hone k bare men koi update mile to ap online hi SMIT ki website per registration form fill krenge phr apko chand din baad test k hawale se update mil jaengi phr ap age ka process follow krte jaeiga. or apko kis course men registration krwana chahte hen</li>`;
        loadingImg.style.display = "block";
      }, 2000);
      setTimeout(() => {
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>registration fees kitni hai</button>`;
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>test khan per hota hai</button>`;
        loadingImg.style.display = "none";
      }, 3500);
    } else if (value.toLowerCase() == testLocation) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";

      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBot">test apka kisi na kisi pakistan k  stadium men hoga mujhe jinho ne banaya hai unka "pakistan national staduim" men huwa tha to ap jab registration krwa loge to apko apke test ki location bta di jaegi.</li>`;
        loadingImg.style.display = "block";
      }, 2000);
      setTimeout(() => {
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>registration fees kitni hai</button>`;
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>test khan per hota hai</button>`;
        loadingImg.style.display = "none";
      }, 3500);
    } else if (registrationFees.indexOf(value.toLowerCase()) != -1) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";

      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBot">registration ki fees k bare men apko registration k waqt bta diya jaega zyada nhi hoti bas 500 ya 1000 hogi.</li>`;
      }, 2000);
    } else if (registrationInCourseOf.indexOf(value.toLowerCase()) != -1) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";
      userName = true;
      console.log(userName);
      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBot">acha to apka name kya hai.</li>`;
      }, 2000);
    } else if (userName == value) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";
      userQualification = true;
      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<li class="ChatBot">acha ${userName} apki qualification kya hai?</li>`;
        userName = false;
        loadingImg.style.display = "block";
      }, 2000);
      setTimeout(() => {
        loadingImg.style.display = "none";
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>intermediate se zyada hai</button>`;
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>intermediate</button>`;
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>metric</button>`;
        cahtList.innerHTML += `<button class='btn' onclick='sendMessageBtn(this.innerHTML)'>middle pass</button>`;
      }, 3000);
    } else if (userQualification == value) {
      cahtList.innerHTML += `<li class="user">${value}</li>`;
      loadingImg.style.display = "block";
      setTimeout(() => {
        loadingImg.style.display = "none";
        if (userQualification.toLowerCase() == "intermediate") {
          cahtList.innerHTML += `<li class="ChatBot">acha ${userQualification} kafi hai apke eligible hone k lye.</li>`;
        } else if (userQualification.toLowerCase() == "metric") {
          cahtList.innerHTML += `<li class="ChatBot">acha ${userQualification} bhi chalegi bas apko english conversational ani chahie take apko seekhne men asani ho</li>`;
        } else if (userQualification.toLowerCase() == "middle pass") {
          cahtList.innerHTML += `<li class="ChatBot">agar apne ${userQualification} kya huwa hai to apko mazeed thori education leleni chahie wrna apko course krne men mushkilat ka samna krna parega</li>`;
        }

        userQualification = false;
      }, 2000);
    } else {
      loadingImg.style.display = "block";

      setTimeout(() => {
        cahtList.innerHTML += `<li class="ChatBot">sorry men samjha nhi ap kya kehna chahte hen</li>`;
        loadingImg.style.display = "none";
      }, 2000);
    }
    count = 0;
    event.target.value = "";
  }
}

//! FUNCTION TO SEND MESSAGES VIA BUTTUNS
function sendMessageBtn(val) {
  count = 1;
  if (val) {
    var spaceOfStrTrimed = val.trim();
    sendMessage(spaceOfStrTrimed);
  }
  userInput.forEach((item) => {
    sendMessage(item.value);
  });
}
