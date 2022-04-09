class Merchant {
    static addMerchant(){
        let sql = `INSERT INTO merchant (id,password,name,address,phone_number) VALUES (?)`;
        return sql;
    }
    static selectMerchant(){
        let selectQuery = `SELECT * FROM merchant`;
        return selectQuery
    }
    static updateMerchant(){
        let updateQuery = `UPDATE merchant SET name = ?, address = ?, phone_number = ? WHERE id = ?`
    }
    static deleteMerchant(){
        let deleteQuery = ` DELETE FROM merchant WHERE id = ?`
    }
}