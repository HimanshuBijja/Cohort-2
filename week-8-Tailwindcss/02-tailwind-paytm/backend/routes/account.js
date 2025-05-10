const express = require("express");
const { authMiddleware } = require("../middleware");
const { Account, User } = require("../db");
const { default: mongoose } = require("mongoose");

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
	try {
		const account = await Account.findOne({ userId: req.userId });

		res.json({
			balance: account.balance,
		});
	} catch (err) {
		res.json({
			error: err.message,
		});
	}
});

router.post("/transaction", authMiddleware, async (req, res) => {
	const session = await mongoose.startSession();
	session.startTransaction();

	const { amount, to } = req.body;

	const account = await Account.findOne({ userId: req.userId }).session(session);

	if (!amount || account.balance < amount) {
        await session.abortTransaction();
		return res.status(400).json({
			msg: "Insufficient funds",
		});
	}

	const toaccount = await User.findOne({
		username: to,
	}).session(session);

	if (!toaccount) {
        await session.abortTransaction();
		return res.json({
			msg: "Invalid account details",
		});
	}
	await Account.updateOne(
		{
			userId: req.userId,
		},
		{
			$inc: {
				balance: -amount,
			},
		}
	).session(session);

	await Account.updateOne(
		{
			userId: toaccount._id,
		},
		{
			$inc: {
				balance: amount,
			},
		}
	).session(session);

	await session.commitTransaction();

	res.json({
		msg: "Transaction successful",
	});
});

module.exports = router;
