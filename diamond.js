

const stars = function(k)
{ let returnv = "";
for (let i = k ; i>=1 ; i=i-1) {
returnv=returnv+"*"
}
const returnvv=returnv;
return returnvv;
}
const spaces = function(k)
{ let returna = "";
for (let i = k ; i>=1 ; i=i-1) {
returna=returna+" "
}
const returnaa=returna;
return returnaa;
}
const diamond = function(a) {
if(a%2 === 0)   // check if even

a = a + 1;
let p=0;
 for (let i=1; i<=a; i=i+2)
 {
  
console.log(spaces(((a-1)/2)-p) + stars(i) + spaces(((a-1)/2)-p) + "\n" );
p=p+1;
}
p=1
for (let i=a-2; i>=1; i=i-2)
 {
  
console.log(spaces(p) + stars(i) + spaces(p) + "\n" );
p=p+1

}
}
diamond(100);
