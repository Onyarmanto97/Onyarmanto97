const Product = require('.../model/ProductModel')
const db = require('.../config/db');
const { arrayBuffer } = require('stream/consumers');

class controllerProduct{
    //menambah Product ke db
    static addProduct(req,res) {
        let values = [req.body.id,
            req.body.password,
            req.body.name,
            req.body.address,
            req.body.phone_number];
        
        db.query(Product.addProduct(),[values],(err)=>{
            if(err){
                res.status(400).json(err)
                return
            }
            const data = req.body
                res.status (201)
                res.send(data)
        })
    }

    // get Product from db
    static selectProduct (req, res){
        db.query(Product.selectProduct(),(err,result)=>{
            if(err) throw err;
            res.status(200)
            res.send(result)
        })
    }

    //update Product to db
    static updateProduct(req,res){
        const id = req.params.id;
        const name = req.body.name;
        const address = req.body.adress;
        const phone_number = req.body.phone_number;
        
        db.query(Product.updateProduct(),[name,address,phone_number,id], function(err){
            if(err){res.status(400).json(err)
            return
            }
            if(req.body.id!=id){
                res.send('update Error')
            }
            res.status(201)
            res.send(req.body)
        });
    }

    //Delete Product from DB
    static deleteProduct(req,res){
        const id = req.params.id
        db.query(Product.deleteProduct(),[id],(err, result)=>{
            if(err){res.status(400).json(err)
            return
            }
        result = ("id"+ id + " : Deleted Succes")
        res.status(200)
        res.send(result)
        });
    }
}