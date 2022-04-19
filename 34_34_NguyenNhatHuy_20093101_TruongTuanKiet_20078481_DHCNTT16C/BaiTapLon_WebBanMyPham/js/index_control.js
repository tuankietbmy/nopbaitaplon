let suaruamat = document.getElementById('Sữa Rữa Mặt');
let son = document.getElementById('Son');
let kemduongda = document.getElementById('Kem Dưỡng Da');
let phan = document.getElementById('Phấn Trang Điểm');
let kemchongnang = document.getElementById('Kem Chống Nắng');

suaruamat.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
} 
son.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}  
kemduongda.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
} 
phan.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}
kemchongnang.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}