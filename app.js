const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, );
//Создание схемы базы данных
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});
//Создание модели, происходит связь с схемы и бд
const Fruit = mongoose.model("Fruit", fruitSchema);
//mongoose создание данных в бд
const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as a fruit"
});
//fruit.save(); Сохраняет в бд каждый раз как вызывается
//Задание создание бд людей
const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number
});

const People = mongoose.model("People", peopleSchema); //Создаем модель
const people = new People({
  name: "Oleg",
  age: 37
});
//people.save();
const kiwi = new Fruit({
  name: "kiwi",
  rating: 2,
  review: "Good"
});
const orange = new Fruit({
  name: "orange",
  rating: 7,
  review: "Best fruit"
});
const banana = new Fruit({
  name: "banana",
  rating: 4,
  review: "Yellow fruit"
});
const peach = new Fruit({
  name: "peach",
  rating: 10,
  review: "Swetty"
});
// Добавление множество записей в бд

// Fruit.insertMany([kiwi,orange,banana,peach],function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully save all the fruits!");
//   }
// });

// Чтение с дб циклом
Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
    // for (let i = 0; i<fruits.length;i++){
    //   console.log(fruits[i].name);
  }
});
