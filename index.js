const express = require("express")
const app = express()

const users = []

class User {
    constructor(id) {
        this.id = id
    }
}

app.get("/register", (req, res) => {
    const id = `${Math.random()}`

    const user = new User(id)
    users.push(user)
    res.send(id)
})

app.listen(8080,( ) => {
    console.log("Saori Online")
})