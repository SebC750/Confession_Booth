const {onRequest} = require("firebase-functions/v2/https");
const { FieldValue } = require("firebase-admin/firestore");
const express = require("express")
const app = express();
const CORS = require("cors")
const db = require("./db.js")
const {checkPassword} = require("./middleware.js")

app.use(express.json())

app.use(CORS())

app.get("/", (res) => {
    return res.json({message:"Welcome to the confession booth server."})
})

app.get("/confessions", async (res) => {
    try{
        const allConfessions = await db.collection("confessions").get()  
        const confessionList = allConfessions.docs.map((confession) => ({
            id: confession.id,
            ...confession.data()
        }))
        console.log(confessionList)
        return res.json({confessions : confessionList})
    }catch(e){
        return res.status(500).json({error: "Server/Database error."})
    }
    
})

app.get("/confessions/:id", async (req,res) => {
    const {id} = req.params
    try {
        const confessionDoc = await db.collection("confessions").doc(id).get();
        if (!confessionDoc.exists) {
            return res.status(404).json({ error: "Confession not found" });
        }
        const confessionData = confessionDoc.data();
        return res.json({ confession: confessionData });
    } catch (e) {
        return res.status(500).json({ error: "Server/Database error. ERROR: "+e });
    }
})

app.post("/confessions/:id", async (req,res) => {
    const {data} = req.body
    try{
        if(!data){
            return res.status(400).json({error: "Could not create a new confession because the data required has not been provided."})
        }
        await db.collection("confessions").add(data)
        return res.status(200).json({"message": "Thank you child! Your sins have been forgiven."})
    }catch(e){
        return res.status(500).json({ error: "Server/Database error. ERROR: "+e });
    }
    
})

app.post("/confessions/:id/like", async (req,res) => {
    const {id} = req.body
    try{
        await db.collection("collections").doc(id).update({like: FieldValue.increment(1)})
        res.status(200).json({message: "Confession liked!"})
    }catch(e){
        return res.status(500).json({error: "Server/Database error."})
    }
})

app.patch("/confessions/:id/dislike", async (req,res) => {
    const {id} = req.params
    try{
        await db.collection("collections").doc(id).update({dislike: FieldValue.increment(1)})
        res.status(200).json({message: "Confession liked!"})
    }catch(e){
        return res.status(500).json({error: "Server/Database error."})
    }
})

app.delete("/confessions/:id", checkPassword, async (req, res) => {
    const {id} = req.params
    const {password} = req.body
    try{
        if(!id){
            return res.status(400).json({error: "Could not delete the confession because its id has not been provided."})
        }
        if(!password){
            return res.status(401).json({error: "No password given. Deletion request denied."})
        }
        if(!req.isPasswordValid){
            return res.status(401).json({error: "Invalid password. Deletion request denied."})
        }
        await db.collection("confessions").doc(id).delete();
        return res.status(200).json({message: "Confession deleted successfully. Be careful next time."})
    }catch(e){
        return res.status(500).json({ error: "Server/Database error. ERROR: "+e  });
    }
    
})

exports.api = onRequest(app)