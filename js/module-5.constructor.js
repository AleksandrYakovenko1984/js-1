function Constructor(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
}
const newObj = new Constructor()

const User = function (login, password) {
    this.login = login;
    this.password = password;
    this.showLogin = function () {
    console.log(this.login);
}
}
User.prototype.showPassword = function () {
    console.log(this.password);
}

const user1 = new User("user", "qweqwe")
console.log(user1);
console.log(User.prototype);


function NewUser(name, age, login, password) {
    User.call(this, login, password)
    this.name = name;
    this.age = age;
}

NewUser.prototype = Object.create(User.prototype)
NewUser.prototype.constructor = NewUser
NewUser.prototype.updateAge = function () {
    return (this.age += 1)
    
}

const newUser1 = new NewUser("Igor", 17, 'new_user1', "qwerty")
console.log(newUser1);

newUser1.showLogin()
newUser1.showPassword()
console.log(newUser1.updateAge);