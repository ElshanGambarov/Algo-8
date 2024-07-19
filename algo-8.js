// Funksiya: Bir ədədin sadə olub olmadığını yoxlayır
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    
    // İkinci döngü sadə ədədləri yoxlamaq üçün istifadə olunur
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    
    return true;
}

// Funksiya: Verilmiş arraydəki sadə ədədlərin cəmini tapır
function sumOfPrimes(arr) {
    let sum = 0;
    
    // Arraydəki hər bir ədəd üçün yoxlama aparır
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            sum += arr[i];
        }
    }
    
    // Sadə ədədlərin cəmini qaytarır
    return sum;
}

// Nümunə istifadəsi
const numbersArray = [3, 4, 5, 6, 7, 8, 9, 10, 19];
const primeSum = sumOfPrimes(numbersArray);
console.log("Sadə ədədlərin cəmi:", primeSum);