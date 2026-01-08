let price = [120, 200, 150, 80, 70, 110, 130];
let fileteredPrice = price.filter((item) => item <= 120);
console.log(fileteredPrice); // [120, 80, 70, 110]


let Brands = ['Apple', 'Samsung', 'Mi', 'Oneplus', 'Oppo', 'Vivo'];
let fileteredBrands = Brands.filter(brand => brand.includes("Mi"));
console.log(fileteredBrands); // ['Mi']
