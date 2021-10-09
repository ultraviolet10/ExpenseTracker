// @desc GET all transactions
const model = require('../database/models')
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await model.Transaction.findAll();
        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}

// @desc POST new transaction
exports.addTransactions = async (req, res, next) => {
    try {
        let transactionObj = {
            text: req.body.text,
            amount: req.body.amount
        }
    
        let createTransResult = await model.Transaction.create(transactionObj);
    
        return res.status(201).json({
            success: true,
            data: createTransResult
        })
    } catch (error) {
        if(error.name == 'SequelizeValidationError'){
            const errObj = {};
            error.errors.map( er => {
                errObj[er.path] = er.message;
            })
            return res.status(400).json({
                success: false,
                error: errObj
            })
        }
        else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            })
        }
        
        
    }
}

// @desc DELETE transaction by ID
exports.deleteTransaction = async  (req, res, next) => {
    try {
        let whereObj = {
            id: req.params.id
        }
        const transaction = await model.Transaction.findOne({where: whereObj});
        if(!transaction) {
            return res.status(404).json({
                success: false,
                error: `No error found with ID: ${req.params.id}`
            })
        }
        else {
            const deleteTrans = await model.Transaction.destroy({where: whereObj});
            return res.status(200).json({
                success: true,
                data: {}
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        })
    }
}