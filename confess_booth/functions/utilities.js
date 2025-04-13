const bcrypt = require("bcrypt")
export const hashPassword = (newPassword) => {
    try{
      const passwordHash = bcrypt.hash(newPassword);
      return passwordHash;
    }catch(e){
        console.log(e)
    }
}