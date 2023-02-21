// const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);


// for( const li of liCollection){
//     console.log(li.innerText);
// }

const sections = document.querySelectorAll('section');
console.log(sections);
for(section of sections){
section.style.border = '2px solid tomato';
}