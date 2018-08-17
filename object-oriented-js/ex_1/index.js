function Person(first, last, age, gender, interests)  {
  
    // property and method definitions
    this.first = first;
    this.last = last;
    this.age = age;
    this.gender = gender;
    this.stoofs = interests
  //...
  }

  var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
  var person2 = new Person('Jason', 'Monette', 15, 'male', ['music', 'dance']);
  console.log(person1)
  console.log(person2)