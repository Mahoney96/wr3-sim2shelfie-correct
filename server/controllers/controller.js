module.exports={
    getAllShoes:(req, res)=>{               //getAllShoes is the Axios Promise handler => getting db
        const db = req.app.get('db')
        db.getAllShoes().then(shoes=>{
            res.status(200).send(shoes)
        })
    },

    addShoes:(req,res)=>{
        const db = req.app.get('db')
        const {shoe_image, description, price} = req.body
        db.add_shoe([shoe_image, description])
    }
}