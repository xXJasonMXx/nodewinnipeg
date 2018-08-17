window.onload = function() {
    var input = document.querySelector('input');
      var btn = document.querySelector('button');
      var para = document.querySelector('p');
      btn.onclick = function() {
        var code = input.value;
        para.textContent = eval(code);
      }
      function Person(first, last, age, gender, interests) {
        this.name = {
          first,
          last
        };
        this.age = age;
        this.gender = gender;
        this.interests = interests;
      };
      Person.prototype.bio = function() {

        var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';

        var pronoun;

        if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
          pronoun = 'He likes ';
        } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
          pronoun = 'She likes ';
        } else {
          pronoun = 'They like ';
        }

        string += pronoun;

        if(this.interests.length === 1) {
          string += this.interests[0] + '.';
        } else if(this.interests.length === 2) {
          string += this.interests[0] + ' and ' + this.interests[1] + '.';
        } else {

          for(var i = 0; i < this.interests.length; i++) {
            if(i === this.interests.length - 1) {
              string += 'and ' + this.interests[i] + '.';
            } else {
              string += this.interests[i] + ', ';
            }
          }
        }
        alert(string);
      };
      Person.prototype.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
      };
      Person.prototype.farewell = function() {
        alert(this.name.first + ' has left the building. Bye for now!');
      }
      var person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);
    

      console.log(person1)
        function Teacher(first, last, age, gender, interests, subject) {
    Person.call(this, first, last, age, gender, interests);

    this.subject = subject;
    }

    Teacher.prototype = Object.create(Person.prototype);
    Teacher.prototype.constructor = Teacher

    var teacher1 = new Teacher('Dan', 'Simair', 'idk', 'male', 'stoofs', 'coding')
    var teacher2 = new Teacher('Bob', 'Clinton', '3000BC', 'helicopter', 'none', 'everything')
    console.log(teacher1)
    console.log(teacher1.name.first)
    console.log(teacher2)

    Teacher.prototype.greeting = function() {
        alert(`lululu, I\'m the teacher: ${this.name.first.toUpperCase()} ${this.name.last.toUpperCase()}`)
    }
    person1.greeting()
    teacher1.greeting()

    Teacher.prototype.farewell = function() {
        alert(`Pineapples, Pinapples I love Pineapples ${this.name.first.toUpperCase()} ${this.name.last.toUpperCase()}`)
    }
    
    teacher2.farewell()

    let people = [teacher1, teacher2, person1];

    people.forEach(function(person) {
        person.farewell()
    })
}