const form = document.querySelector('form');

var jkPria = document.getElementById("pria");
var jkWanita = document.getElementById("wanita");
var BeratBadan = document.getElementById("berat-badan");
var Usia = document.getElementById("usia");
var TinggiBadan = document.getElementById("tinggi-badan");
const resultElement = document.getElementById('result');
const statusbbElement = document.getElementById('statusbb');
const hasilBMIElement = document.getElementById('hasilBMI');
const betweenBMIElement = document.getElementById('between');
const categoryBMIElement = document.getElementById('category');
const explainBMIElement = document.getElementById('explain');


const reset = document.getElementById("reset");
const submitButton = document.getElementById("hitung");

if (submitButton) {
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    validasi();
  });
} else {
  console.error("Cannot find submit button with ID 'hitung'");
}

if (reset) {
  reset.addEventListener('click', (event) => {
    form.reset();
    resultElement.textContent = "";
  });
} else {
  console.error("Cannot find submit button with ID 'reest'");
}

function validasi() {
  if ((jkPria.checked == false && jkWanita.checked == false) || BeratBadan.value == '' || Usia.value == '' || TinggiBadan.value == '') {
    modalText.innerHTML = 'All fields are required !';
  } else {
    hitungBMI();
  }
}

function hitungBMI() {
  var UBT = [Usia.value, BeratBadan.value, TinggiBadan.value];
  if (jkPria.checked) {
    UBT.push("Pria");
  } else if (jkWanita.checked) {
    UBT.push("Wanita");
  }

  var BMI = Number(UBT[1]) / ((Number(UBT[2]) / 100) * (Number(UBT[2]) / 100));
  resultElement.textContent = `${BMI.toFixed(2)}`;

  var hasilBMI = '';
  if (BMI < 18.5){
      hasilBMI = 'Berat Badan Kurang';
      betweenBMI = 'kurang dari 18.5';
      exp= 'Utamakan hidup sehat dan perhatikan konsumsi harian';
  } else if (18.5 <= BMI && BMI <= 24.9){
      hasilBMI = 'Berat Badan Normal';
      betweenBMI ='diantara 18.5 dan 24.9';
      exp = 'Pastikan asupan kalori sesuai dengan kebutuhan kalori harian & konsumsi makanan sehat'
  } else if (25 <= BMI && BMI <= 29.9){
      hasilBMI = 'Berat Badan Berlebih';
      betweenBMI ='diantara 25 dan 29.9';
      exp = 'Diet yang baik dapat mempertahankan kesehatan & imun'
  } else if (30 <= BMI ){
      hasilBMI = 'Berat Badan Sangat Berlebih';
      betweenBMI = 'lebih dari 30';
      exp = 'Diet yang baik dapat mempertahankan kesehatan & imun. '
  }
  statusbbElement.textContent = `${hasilBMI}`;
  hasilBMIElement.textContent = `${hasilBMI}`;
  betweenBMIElement.textContent = `${betweenBMI}`;
  categoryBMIElement.textContent = `${hasilBMI}`;
  explainBMIElement.textContent = `${exp}`;
}


