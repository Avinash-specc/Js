class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const avinash = new User("Avinash")
// console.log(avinash.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const iPhone = new Teacher ('iphone','i@phone.com')
console.log(iPhone)

console.log(iPhone.createId()) // static prevents it from printing