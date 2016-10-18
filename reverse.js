
const reverse = function(arr) {
let string = "";
for (let i=arr.length-2; i>-1 ; i=i-1)

    {
	string= string + (arr[i+1]+",");
     }
	 string=string + arr[0];
	 const stringo = string;
	 return stringo;

	 
}
console.log(reverse([1, 2, 3, 4, 5, 6, 7]));


