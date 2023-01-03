module.exports = {
    list: (req, res) => {

        res.render('index', {
            texto: `Bienvenido admin ${req.admin}`

        })
    },
    crear: (req, res) => {
        res.render('index', {
            texto: `Bienvenido admin ${req.admin}`

        })
    },
    editar: (req, res) => {
        res.render('index', {
            texto: `Bienvenido admin ${req.admin}`

        })
    },
    eliminar: (req, res) => {
        res.render('index', {
            texto: `Bienvenido admin ${req.admin}`

        })
    },

}