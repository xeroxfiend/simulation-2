module.exports = {
    getAll : (req, res) => {
        const db = req.app.get('db')
        db.get_houses().then(result => {
            res.status(200).send(result)
        }).catch(err => console.log(err))
    },

    add: (req, res) => {
        const {name, address, city, state, zipcode, img, mortgage, rent} = req.body
        const db = req.app.get('db')
        db.add({name, address, city, state, zipcode, image: img, monthly_mortgage: mortgage, desired_rent: rent}).then(result => {
            res.status(200).send(result)
        }).catch(err => console.log(err))
    },

    delete: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.delete(id).then(result => {
            res.status(200).send(result)
        }).catch(err => console.log(err))
    }
}