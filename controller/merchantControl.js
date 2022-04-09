const Merchant = require('.../model/merchantModel')
const db = require('.../config/db');
const { arrayBuffer } = require('stream/consumers');

class controllerMerchant{
    //menambah merchant ke db
    static addMerchant(req,res) {
        let values = [req.body.id,
            req.body.password,
            req.body.name,
            req.body.address,
            req.body.phone_number];
        
        db.query(Merchant.addMerchant(),[values],(err)=>{
            if(err){
                res.status(400).json(err)
                return
            }
            const data = req.body
                res.status (201)
                res.send(data)
        })
    }

    // get merchant from db
    static selectMerchant (req, res){
        db.query(Merchant.selectMerchant(),(err,result)=>{
            if(err) throw err;
            res.status(200)
            res.send(result)
        })
    }

    //update merchant to db
    static updateMerchant(req,res){
        const id = req.params.id;
        const name = req.body.name;
        const address = req.body.adress;
        const phone_number = req.body.phone_number;
        
        db.query(Merchant.updateMerchant(),[name,address,phone_number,id], function(err){
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

    //Delete merchant from DB
    static deleteMerchant(req,res){
        const id = req.params.id
        db.query(Merchant.deleteMerchant(),[id],(err, result)=>{
            if(err){res.status(400).json(err)
            return
            }
        result = ("id"+ id + " : Deleted Succes")
        res.status(200)
        res.send(result)
        });
    }
}