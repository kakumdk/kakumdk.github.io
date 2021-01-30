db.createUser(
    {
        user: "peoplesblog-mongo-user",
        pwd: "peoplesblog-mongo-pass",
        roles : [
            {
                role: "readWrite",
                db: "peoplesblog-mongo"
            }
        ]
    }
)