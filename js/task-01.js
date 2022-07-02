const quantityCategory = document.querySelector('ul#categories').children;
console.log(`Number of categories: ${quantityCategory.length}`);

for(const element of quantityCategory){
const nameCategory = element.querySelector('li.item h2').textContent;
const quantityElements = element.querySelector('li.item  ul').children.length;
console.log(`Category: ${nameCategory} \nElements: ${quantityElements}`);
};