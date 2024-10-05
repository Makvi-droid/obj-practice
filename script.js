const person = {
    name: {
        first: 'Ben',
        last: 'Dover'
    },
    age: 24,
    height: '1.78',
    contactNumber: 93283,
    intro: function(){
       console.log(`Hello I am ${this.name} and I am ${this.age} years old`);
    },

    address(city){
        console.log(`I live in ${person[city]}`);
    }
    
};

