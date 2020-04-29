module.exports = (app) => {
    const user = require("../controllers/userController")
    app.post(`/add/user`, user.create)
    app.get(`/list/users`, user.findAll)
    app.get(`/find/user/:userId`, user.findOne)
    app.put(`/edit/user/:userId`, user.update)
    app.delete(`/delete/user/:userId`, user.delete)
    app.delete(`delete/users`, user.deleteAll)
} 