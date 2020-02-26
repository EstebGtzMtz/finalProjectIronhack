exports.isAuth = (req, res, next) => {
    req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

exports.isAdmin = (req, res, next) => {
    if (req.isAuthenticated() && req.user.role === 'ADMIN') {
        next();
    } else {
        res.status(401).json({ ok: false, msg: 'Unauthorized' });
    }
};