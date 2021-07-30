// SORRY KA MASIH BELUM LENGKAP, NTAR KALAU SUDAH DI PUSH LAGI KOK

// #Basic Array No1

function penambahan(arr){
    let angka = 0;
    for (i = 0; i < arr.length ; i++){
        angka += arr[i];
    }
    return angka;
}

console.log(penambahan([1,2,3]))



// #Basic Array No2

function rever(param){
    let data = [];
        for (i = param.length -1; i >= 0 ; i--){
            data.push(param[i])
        }
    return data
}

console.log(rever(['ganda', 'imas']))