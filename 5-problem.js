class BankAccount {
    constructor(ownerName, accountNumber) {
        this.ownerName = ownerName;
        this.accountNumber = accountNumber;
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient balance');
            return;
        }
        this.balance -= amount;
    }

    showBalance() {
        console.log('Balance: ', this.balance);
    }
}   


const account1 = new BankAccount('John Doe', '1234');
const account2 = new BankAccount('Jane Doe', '5678');

account1.deposit(1000);
account1.showBalance();
account1.withdraw(500);
account1.showBalance();


account2.deposit(2000);
account2.showBalance();
account2.withdraw(1000);
account2.showBalance();


