class product {
    constructor({ id, name, price, description }) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;

        this.validate();
    }

    validate() {
        if (!this.name || this.name.trim() === '') throw new Error('Product name requires a string');
        if (this.price <= 0) throw new Error('Product price must be greater that zero');
    }
}

module.exports = product; 