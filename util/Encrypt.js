const bcrypt = require('bcrypt');
const saltRounds = 10
 
const hashPassward1 = async(passward) => {
    const hash = await bcrypt.hash(password, saltRounds)
    return hash;
}
const comparePassward1 = async(passward,hashPassward) =>{
    const result = await bcrypt.compare(passward,hashPassward)
    return result;
}
module.exprorts= {hashPassward1}