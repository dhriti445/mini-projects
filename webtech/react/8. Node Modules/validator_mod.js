import validator from "validator";

var email = "pavanac@pes.edu";
console.log(validator.isEmail(email));

email='pavanac@.edu'
console.log(val.isEmail(email))

var name='john'
console.log(val.isLowercase(name))

name='JOHN'
console.log(val.isLowercase(name))

var name=''
console.log(val.isEmpty(name))

name='Smith'
console.log(val.isEmpty(name))
