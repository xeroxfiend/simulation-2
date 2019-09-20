module.exports = {
    getAll : (req, res) => {
        const db = req.app.get('db')
        db.get_houses().then(result => {
            res.status(200).send(result)
        }).catch(err => console.log(err))
    }
}