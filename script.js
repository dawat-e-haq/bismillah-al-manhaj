const quran = [
  "اور ہم نے انسان کو پیدا کیا اور ہم جانتے ہیں جو اس کا نفس وسوسہ ڈالتا ہے - سورہ ق 16",
  "بے شک مشکل کے ساتھ آسانی ہے - سورہ الشرح 6",
  "اللہ کے ذکر سے دلوں کو سکون ملتا ہے - سورہ الرعد 28"
];

const hadees = [
  "مسلمان وہ ہے جس کی زبان اور ہاتھ سے دوسرے مسلمان محفوظ رہیں",
  "تم میں بہتر وہ ہے جو قرآن سیکھے اور سکھائے",
  "مسکرا کر بات کرنا بھی صدقہ ہے"
];

const dua = [
  "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
  "اللهم إني أسألك العفو والعافية",
  "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ"
];

function randomQuran() {
  document.getElementById("result").innerText = quran[Math.floor(Math.random()*quran.length)];
}
function randomHadees() {
  document.getElementById("result").innerText = hadees[Math.floor(Math.random()*hadees.length)];
}
function randomDua() {
  document.getElementById("result").innerText = dua[Math.floor(Math.random()*dua.length)];
}
