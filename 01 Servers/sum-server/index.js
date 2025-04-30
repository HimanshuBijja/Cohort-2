const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const todos = [
	{ id: 1, title: "go to gym", description: "at 6:30", completed: false },
	{
		id: 2,
		title: "buy groceries",
		description: "get milk and eggs",
		completed: false,
	},
	{
		id: 3,
		title: "read a book",
		description: "finish chapter 5",
		completed: false,
	},
	{
		id: 4,
		title: "morning run",
		description: "5km around the park",
		completed: false,
	},
	{
		id: 5,
		title: "call mom",
		description: "wish her happy birthday",
		completed: false,
	},
	{
		id: 6,
		title: "finish project",
		description: "submit by 10pm",
		completed: false,
	},
	{
		id: 7,
		title: "study react",
		description: "learn about hooks",
		completed: false,
	},
	{ id: 8, title: "meditate", description: "for 15 minutes", completed: false },
	{
		id: 9,
		title: "drink water",
		description: "8 glasses today",
		completed: false,
	},
	{
		id: 10,
		title: "practice dsa",
		description: "solve 3 leetcode problems",
		completed: false,
	},
	{
		id: 11,
		title: "cook dinner",
		description: "try a new recipe",
		completed: false,
	},
	{
		id: 12,
		title: "write blog",
		description: "post on medium",
		completed: false,
	},
	{
		id: 13,
		title: "clean room",
		description: "organize workspace",
		completed: false,
	},
	{
		id: 14,
		title: "watch tutorial",
		description: "js advanced concepts",
		completed: false,
	},
	{
		id: 15,
		title: "reply emails",
		description: "check inbox",
		completed: false,
	},
];

app.get("/todo", (req, res) => {
	const todo = todos.find((t) => t.id == req.query.id);
	res.json({
		todos: todo,
	});
});

app.get("/todos", (req, res) => {
	const randomTodos = [];
	for (let i = 0; i < 15; i++) {
		if (Math.random() > 0.6) {
			randomTodos.push(todos[i]);
		}
	}
	res.json({
		todos: randomTodos,
	});
});

app.get("/sum", (req, res) => {
	const a = parseInt(req.query.a);
	const b = parseInt(req.query.b);
	const sum = a + b;
	res.send(sum.toString());
});

app.get("/interest", (req, res) => {
	const principal = parseInt(req.query.principal);
	const rate = parseInt(req.query.rate);
	const time = parseInt(req.query.time);
	const interest = (principal * rate * time) / 100;
	const total = principal + interest;
	// res.send({
	//   total: total,
	//   interest: interest
	// })
	res.send(interest.toString());
});

function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}

app.get("/notifications", (req, res) => {
	res.json({
		network: getRandomNumber(10),
		jobs: getRandomNumber(10),
		messaging: getRandomNumber(10),
		notifications: getRandomNumber(10),
	});
});

app.listen(3000, () => {
	console.log("connected to 3000");
});
