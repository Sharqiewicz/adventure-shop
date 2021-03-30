export interface Product{
    name: String;
    description: String;
    price: Number;
    opinion: Number;
    image: String;
}

export interface User {
    username: String;
    full_name: String;
    basket: Product[];
}