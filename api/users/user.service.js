const mysql = require('../../config/database');

module.exports = {
    create: (data, callBack) => {
        mysql.query(
            `INSERT INTO Users(username, age, email, password, phone, language, type, profession, experience, country, description, skills)
            values(?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.username,
                data.age,
                data.email,
                data.password,
                data.phone,
                data.language,
                data.type,
                data.profession,
                data.experience,
                data.country,
                data.description,
                data.skills
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    getUsers: callBack => {
        mysql.query(
            `SELECT id, username, age, email, password, phone, language, type, profession, experience, country, description, skills FROM Users`,
            [],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getUserById: (id, callBack) => {
        mysql.query(
            `SELECT id, username, age, email, password, phone, language, type, profession, experience, country, description, skills FROM Users WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        )
    },
    updateUser: (data, callBack) => {
        mysql.query(
            `UPDATE Users SET username=?, age=?, email=?, password=?, phone=?, 
            language=?, type=?, profession=?, experience=?, country=?, description=?, 
            skills=? WHERE id = ?`,
            [ data.username, data.age, data.email, data.password, data.phone, 
                data.language, data.type, data.profession, data.experience, 
                data.country, data.description, data.skills, data.id 
            ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    deleteUser: (data, callBack) => {
        mysql.query(
            `DELETE FROM Users WHERE id = ?`,
            [ data.id ],
            (error, results, fields) => {
                if(error) {
                    return callBack(error)
                }
                return callBack(null, results);
            }
        )
    },
    getUserByEmail: (email, callBack) => {
        mysql.query(
            `SELECT * FROM Users WHERE email = ?`,
            [email],
            (error, results, fields) => {
                if(error) {
                    return callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
}

    