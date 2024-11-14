import React from "react";

const fruits = [
  { fruitId: 1, fruitName: "Apel", fruitType: "IMPORT", stock: 10 },
  { fruitId: 2, fruitName: "Kurma", fruitType: "IMPORT", stock: 20 },
  { fruitId: 3, fruitName: "apel", fruitType: "IMPORT", stock: 50 },
  { fruitId: 4, fruitName: "Manggis", fruitType: "LOCAL", stock: 100 },
  { fruitId: 5, fruitName: "Jeruk Bali", fruitType: "LOCAL", stock: 10 },
  { fruitId: 5, fruitName: "KURMA", fruitType: "IMPORT", stock: 20 },
  { fruitId: 5, fruitName: "Salak", fruitType: "LOCAL", stock: 150 },
];

//mencegah duplikat
const getUniqueFruitNames = (fruits) => {
  const uniqueNames = new Set();
  fruits.forEach((fruit) => {
    uniqueNames.add(fruit.fruitName.toLowerCase());
  });
  return Array.from(uniqueNames);
};

//grouping buah berdasarkan fruit type
const groupFruitsByType = (fruits) => {
  return fruits.reduce((acc, fruit) => {
    if (!acc[fruit.fruitType]) {
      acc[fruit.fruitType] = [];
    }
    acc[fruit.fruitType].push(fruit.fruitName);
    return acc;
  }, {});
};

//menghitung total stock buah berdasarkan fruit type
const getTotalStockByType = (fruits) => {
  return fruits.reduce((acc, fruit) => {
    if (!acc[fruit.fruitType]) {
      acc[fruit.fruitType] = 0;
    }
    acc[fruit.fruitType] += fruit.stock;
    return acc;
  }, {});
};

const CaseOne = () => {
  //1. Buah apa saja yang dimiliki Andi?
  const uniqueFruitNames = getUniqueFruitNames(fruits);

  //2. Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?
  const fruitsByType = groupFruitsByType(fruits);
  const containerCount = Object.keys(fruitsByType).length;

  //3. Berapa total stock buah yang ada di masing-masing wadah?
  const totalStockByType = getTotalStockByType(fruits);

  //4. Komentar
  const comments = `Andi memiliki buah dengan nama yang sama namun dengan huruf kapital yang berbeda (misalnya "Apel" dan "apel", "Kurma" dan "KURMA"), yang bisa menyebabkan kebingungan. Selain itu, beberapa buah memiliki ID yang sama, padahal ID seharusnya unik untuk setiap buah, yang bisa menimbulkan masalah jika digunakan untuk membedakan setiap buah.`;

  return (
    <div style={{margin: "0 30em 0 30em"}}>
      <h2>Case 1 Answers</h2>
      <div>
        <h3>1. Buah apa saja yang dimiliki Andi?</h3>
        <p>Answer : {uniqueFruitNames.join(", ")}</p>
      </div>
      <div>
        <h3>2a. Jumlah wadah yang dibutuhkan</h3>
        <p>Answer : {containerCount}</p>
        <h3>2b. Buah di masing-masing wadah:</h3>
        <ul>
          {Object.entries(fruitsByType).map(([type, fruitNames]) => (
            <li key={type}>
              <strong>{type}:</strong> {fruitNames.join(", ")}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>3. Total stock buah di masing-masing wadah:</h3>
        <ul>
          {Object.entries(totalStockByType).map(([type, totalStock]) => (
            <li key={type}>
              <strong>{type}:</strong> {totalStock}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>4. Komentar</h3>
        <p>{comments}</p>
      </div>
    </div>
  );
};

export default CaseOne;
