class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    showDetails(){
        console.log(`${this.name}, $${this.price}.00`);
    }
}

const product = new Product("Water", 5);
product.showDetails();

class Electronic extends Product{
    constructor(name, price, warranty){
        super(name, price);
        this.warranty = warranty;
    }
     showDetails(){
        console.log(`${this.name}, $${this.price}.00 (${this.warranty} warranty)`);
    }
}

const cellphone = new Electronic("iPhone", 500, "One-year");
cellphone.showDetails();