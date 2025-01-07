class product {
    constructor({ id, name, price, description, review, comment }) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.review = review;
        this.comment = comment;

        this.validate();
    }

    validate() {
        if (!this.name || this.name === '') throw new Error('Product can not be empty');
        if (this.price <= 0) throw new Error('Price can not zero');
    }
}

module.exports = product;

