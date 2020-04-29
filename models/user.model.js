const db = require("./db")

// constructor
const User = function (user) {
    this.username = user.username
    this.age = user.age
    this.email = user.email
    this.password = user.password
    this.phone = user.phone
    this.language = user.language
    this.type = user.type
    this.profession = user.profession
    this.experience = user.experience
    this.country = user.country
    this.description = user.description
    this.skills = user.skills
}

User.create = (newUser, result) => {
    console.log('user email : ', newUser.email)
    let sqlCheck = `SELECT * FROM Users WHERE email = ${newUser.email}`
    console.log('sql check : ', sqlCheck)
    let sql = `INSERT INTO Users SET ?`
    db.query(sqlCheck, (err, res) => {
        if (err) {
            console.log(`error: `, err)
            result(err, null);
            return
        }

        if (res.length) {
            console.log(`found customer: `, res[0])
            result(null, res[0]);
            return
        }

        // not found Customer with the id
        result({
            kind: `not_found`
        }, null)
    })
    db.query(sql, newUser, (err, res) => {
        if (err)
            throw err;
        else {
            console.log(`created user: `, {
                id: res.insertId,
                ...newUser
            })
            result(null, {
                id: res.insertId,
                ...newUser
            })
        }
        console.log(`error: `, err)
        result(err, null)
        return
    })
}

User.getAll = result => {
    let sql = `SELECT * FROM Users`
    db.query(sql, (err, res) => {
        if (err) {
            console.log('error', err)
            result(null, err)
            return
        }
        console.log(`users: `, res)
        result(null, res)
    })
}

User.findById = (userId, result) => {
    let sql = `SELECT * FROM Users WHERE id = ${userId}`
    db.query(sql, (err, res) => {
        if (err) {
            console.log(`error: `, err)
            result(err, null);
            return
        }

        if (res.length) {
            console.log(`found customer: `, res[0])
            result(null, res[0]);
            return
        }

        // not found Customer with the id
        result({
            kind: `not_found`
        }, null)
    })
}

User.updateById = (id, user, result) => {
    // const param = [ req.body, req.params.id ]
    let sql = `UPDATE Users SET username=?, age=?, email=?, password=?, phone=?, 
    language=?, type=?, profession=?, experience=?, country=?, description=?, 
    skills=? WHERE id=?`;
    db.query(sql, [ user.username, user.age, user.email, user.password, user.phone,
        user.language, user.type, user.profession, user.experience, user.country,
        user.description, user.skills, id ], (err, res) => {
        if (err) {
            console.log(`error: `, err)
            result(null, err)
            return
        }

        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({
                kind: `not_found`
            }, null)
            return
        }

        console.log(`updated user: `, {
            id: id,
            ...user
        })
        result(null, {
            id: id,
            ...user
        })
    })
}

User.remove = (id, result) => {
    let sql = `DELETE FROM Users WHERE id = ?`;
    db.query(sql, id, (err, res) => {
        if (err) {
            console.log(`error: `, err)
            result(null, err)
            return
        }

        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({
                kind: `not_found`
            }, null)
            return
        }

        console.log(`deleted customer with id: `, id)
        result(null, res)
    })
}

User.removeAll = result => {
    let sql = `DELETE FROM Users`;
    db.query(sql, (err, res) => {
        if (err) {
            console.log(`error: `, err)
            result(null, err)
            return
        }

        console.log(`deleted ${res.affectedRows} users`);
        result(null, res)
    })

}

module.exports = User