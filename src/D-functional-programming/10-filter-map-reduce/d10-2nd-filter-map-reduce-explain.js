/**
 * d10-filter-map-reduce
 * Explain
 *
 * #Cel:
 * Przypomnienie podstawowych metod tablicowych, które nie mutując danych - pozwalają na ich transformację.
 */

// Programowanie funkcyjne z użyciem metod tablicowych najczęściej wykorzystuje się do transformacji danych.
// Niewątpliwą zaletą metod: map / filter / reduce - jest możliwość ich "chain'owania" - łączenia
// i wywoływania jedna po drugiej.

// Mapowanie
// Transformacja elementów
const mapped = [1, 2, 3, 4, 5].map(nr => 'Chapter #' + nr);
console.log(mapped);

// Filtrowanie
// Zmiana ilości elementów
// predykat to nazwa funkcji która dla podanej wartości zwraca boolean -> true / false
console.log(1 % 2)
console.log(2 % 2)
console.log(3 % 2)
console.log(4 % 2)
const oddNumbers = [1, 2, 3, 4, 5].filter(nr => nr % 2);
console.log(oddNumbers);

// "Redukcja" elementów
// Gdzie map i filter nie może tam reduce pośle!
const sumOfElements = [1, 2, 3, 4, 5, undefined].filter(Boolean).reduce((acc, value) => acc + value);
// acc = 1, value = 2  => 3
// acc = 3, value = 3  => 6
// acc = 6, value = 4  => 10
// acc = 10, value = 5 => 15
console.log(sumOfElements);

[1, 2, 3, 4, 5].reduce((acc, value) => acc + value, 10); //=
// acc = 10, value = 1  => 11
// acc = 11, value = 2  => 13
// acc = 13, value = 3  => 16
// acc = 16, value = 4  => 20
// acc = 20, value = 5 => 15

[1, 2, 3, 4, 5].reduce((acc, value) => {
	acc.sum += value;
	return acc;
}, { sum: 0 }); //= { sum: 15 }

// Rozważmy następujący przykład:
// Podsumowanie wartości wszystkich operacji uznania na koncie:

const cashBalance = [
	{ id: 5, cash: 100, type: 'IN' },
	{ id: 4, cash: -300, type: 'OUT' },
	{ id: 3, cash: -1200, type: 'OUT' },
	{ id: 2, cash: 400, type: 'IN' },
	{ id: 1, cash: 2000, type: 'IN' },
]

const inCash = cashBalance.filter((operation) => operation.type === 'IN').map(o => o.cash).reduce((a, b) => a + b);
console.log(inCash);

// Korzystając z bardziej funkcyjnego podejścia można to zapisać bardziej przejrzyście:

const operationTypeIn = o => o.type === 'IN';
const pluckCash = o => o.cash;
const sum = (a, b) => a + b;
console.log(cashBalance.filter(operationTypeIn).map(pluckCash).reduce(sum));

// Teraz nasze małe pomocnicze funkcje są re-używalne, możemy szybko policzyć aktualny stan konta
const currentBalance = cashBalance.map(pluckCash).reduce(sum);
console.log(currentBalance);

// Dodając dodatkowy filtr - możemy policzyć obciążenia:
const operationTypeOut = o => o.type === 'OUT';
console.log(cashBalance.filter(operationTypeOut).map(pluckCash).reduce(sum));

// Ilość przykładów można mnożyć:
// 1 Policz ilość wszystkich operacji IN:
console.log(cashBalance.filter(operationTypeIn).length)

// 2 Policz ilość wszystkich operacji OUT:
console.log(cashBalance.filter(operationTypeOut).length)

// 3 Odtwórz stan konta po 3 operacji:
const idLowerOrEqual3 = o => o.id <= 3;
console.log(cashBalance.filter(idLowerOrEqual3).map(pluckCash).reduce(sum))
