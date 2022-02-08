const Transaction = require('../models/TransactionSchema')

const transactions = async (req, res) => {
    try {
        const { Name, Sender, Receiver, TransactionType, Amount, Status } = req.body;
        const newTransaction = new Transaction({
            Name, Sender, Receiver, TransactionType, Amount, Status
        })
        newTransaction.save()
        res.send('Transaction Saved')
    }
    catch (error) {
        res.send(error)
    }
}

const transactionDetails = async (req, res) => {
    try {
        const Transactions = await Transaction.find()
        res.send(Transactions)
    } catch (error) {
        res.send(error)
    }
}

const transactionDelete = async (req, res) => {
    try {
        const transaction = await Transaction.findByIdAndDelete(req.params.id)
        transaction.save()
        res.send('Deleted')
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = { transactions, transactionDetails, transactionDelete }