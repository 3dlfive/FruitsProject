const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true,
useUnifiedTopology: true  },
);
//Создание схемы базы данных
const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});
//Создание модели, происходит связь с схемы и бд
const Fruit = mongoose.model("Fruit", fruitSchema);
//mongoose создание данных в бд
const fruit = new Fruit ({
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

const People = mongoose.model("People", peopleSchema);//Создаем модель
const people = new People ({
  name: "Oleg",
  age: 37
});
//people.save();



//Поиск в коллекции
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits)
    callback(fruits);
  });
}
