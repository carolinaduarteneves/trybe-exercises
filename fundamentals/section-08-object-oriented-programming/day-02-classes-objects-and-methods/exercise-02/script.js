class BankAccount {
  owner = "";
  balance = 0;

  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(valueDeposited) {
    console.log(`Deposit completed!`);
    console.log(
      `Current balance: $${(this.balance = this.balance + valueDeposited)}`,
    );
  }

  withdraw(valueWithdrawn) {
    if (this.balance > valueWithdrawn && valueWithdrawn > 0) {
      console.log(`Withdrawal completed!`);
      console.log(
        `Current balance: $${(this.balance = this.balance - valueWithdrawn)}`,
      );
    } else {
      console.log(`Insufficient balance!`);
    }
  }

  showBalance() {
    console.log(`Owner: ${this.owner} | Current balance: $${this.balance}`);
  }
}

const bankAccount1 = new BankAccount("Ana", 0);
bankAccount1.deposit(100);
bankAccount1.withdraw(50);
bankAccount1.showBalance();
