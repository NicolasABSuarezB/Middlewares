const adminLogs = (req, res, next) => {
    const { user } = req.query;
    const admins = ["Ada", "Greta", "Vim", "Tim", "Fede"]

    if (admins.includes(user)) {
        req.admin = user
        return next()
    } else {
        res.render('index', {
            texto: "No tienes los privilegios para ingresar"
        })
    }
}

module.exports = adminLogs
