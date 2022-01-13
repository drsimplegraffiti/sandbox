const authMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) return next()
    res.redirect('/login')
        // next()
}

module.exports = authMiddleware