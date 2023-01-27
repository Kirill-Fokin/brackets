module.exports = function check(str, bracketsConfig) {
  // yourvar result;
	if (str.length % 2 !== 0)
  result = false;
while (1) {
let oldlength = str.length;
for (let i = 0; i < bracketsConfig.length; i++) {
str = str.replace(bracketsConfig[i].join(''), '');
}
if (str.length === oldlength || str.length === 0) {
break;
}
}
if(str.length === 0)
  result = true;
else 
  result = false;
return result;
} 
  
  
  

