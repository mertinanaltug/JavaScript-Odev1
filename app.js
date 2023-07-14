const myName = document.querySelector("#myName");
const tarih = document.querySelector("#myClock")

myName.innerHTML = prompt("Bir Ad Giriniz");

const showTime = () => {
    const guncelTarih = new Date();

    const saat = guncelTarih.getHours();
    const dakika = guncelTarih.getMinutes();
    const saniye = guncelTarih.getSeconds();
    const gun = guncelTarih.getDay();
    const gunler = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"]

    tarih.innerHTML = `${saat}:${dakika}:${saniye},${gunler[gun]}`
    setInterval(showTime, 1000)
}
showTime()

