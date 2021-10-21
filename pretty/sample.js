// should enforce single quotes
// + eslint - should enforce no unused variables
const name = "bing";

// + eslint - should enforce use of const on variables
//            that are not reassigned
let list = ['bing', "bong", 'bang'];

// + eslint - should check and highlight undefined objects (variables, methods)
list.forEach(item => print(item));

// + eslint - should check and highlight undefined objects (variables, methods)
newList.forEach(item => console.log(item));    

// + eslint - should enforce no unused variables
// + eslint - should check and highlight duplicate parameters
const getPersonDetails = function(firstName, lastName, age, firstName) {

  console.log(`name: ${firstName}`);
};
