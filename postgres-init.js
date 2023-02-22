db.createUser(
    {
        user: 'postgres',
        pwd: 'postgres',
        roles:[
            {
                role:'readWrite',
                db:'test_task'
            }
            ]
    }
)