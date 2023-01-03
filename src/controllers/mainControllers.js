module.exports = {
    main: (req, res) => {
        res.render('index', {
            texto: "Home Page"
        })
    },
    about: (req, res) => {
        res.send('Bienvenidos a la vista about')
    },
    register: (req, res) => {
        res.send('Bienvenidos a la vista register')
    },
    processRegister: (req, res) => {
        res.redirect('/')
    },
    login: (req, res) => {
        res.render('login')
    },
    processLogin: (req, res) => {
        res.redirect('/')
    }
}