const bcrypt = require("bcrypt")
const db = require("./db.js")
export const checkPassword = async (req, res, next) => {
    const {id} = req.params
    const {password} = req.body
       try{
          const userData = await db.collection("confessions").doc(id).get();
          const isPasswordMatch = await bcrypt.compare(password, userData.data().password)
          if(isPasswordMatch){
             req.isPasswordValid = true
             next();
          }
          else{
             req.isPasswordValid = false;
             next();
          }
       }catch(e){
          console.log(e)
          return res.status(500).json({ error: "Server/Database error." });
       }
}
