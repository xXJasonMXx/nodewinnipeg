const user = {
    username: null,
    password: null,
    greet: function (){
        if (this.username !== null) {
        return 'Hello, I\'m user ' + this.username + ' and my assword is ' + this.password
        } else {
            return 'Please assign a usename value'
        }
    },

    updateUsername: function(){
        this.username = 'hiiii';
    },

    updatePassword: function() {
        this.password = 'peanutbutter'
    }
}

user.updateUsername()
user.updatePassword()
user.greet()

console.log(user.greet())