const obj = {
    name: 'coding',
    b: function(word) {
       console.log(this.name, word);
    }
 }
 obj.b('is fun');