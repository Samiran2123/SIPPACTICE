class User{
    constructor (name,mobile,accountNo,balence){
        this.name = name;
        this.mobile = mobile;
        this.accountNo = accountNo;
        this.balence = balence;
    }
    getUser(){
        console.log(`User Name : ${this.name}`)
        console.log(`Mobile No : ${this.mobile}`)
        console.log(`Acount no: ${this.accountNo}`)
        console.log(`Your Balence: ${this.balence}`)

    }
    Withdraw(amount){
     this.balence = this.balence - amount
        console.log(`Your Balence After Deduction ${this.balence}`)
    }
    diposit(amount){
        this.balence = this.balence + amount;
        console.log(`Your Balence After Deduction ${this.balence}`)

    }

}

const user1 = new User ("Aditya",9732456412,1500000000000,150000)
user1.getUser()