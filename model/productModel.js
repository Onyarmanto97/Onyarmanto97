const fs = require('fs')
const db = require('../config/db')

class product{
    static addProduct(){
        let sql =`INSERT INTO Product(id_product,name,quantity,price) VALUES (?)`
        return sql
    }
    static selectProduct(){
        let selectQuery = `SELECT * FROM Product`;
        return selectQuery
    }
    static updateProduct(){
        let updateQuery = `UPDATE Product SET name = ?, address = ?, phone_number = ? WHERE id = ?`
    }
    static deleteProduct(){
        let deleteQuery = ` DELETE FROM Product WHERE id = ?`
    }
}