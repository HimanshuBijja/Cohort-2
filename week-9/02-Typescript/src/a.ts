import express from "express"
const app = express();

app.get("/", (req, res)=>{
    
})

function dosomething<b>(value: b): b {
	return value;
}

const obj1 = dosomething("hello");
const obj2 = dosomething<number>(5);


console.log(obj1);
console.log(obj2);

function dosomething2<b>(value: b): b {
    return value;
}

const obj3 = dosomething2(["ds", "dgagd"]);
const obj4 = dosomething2(5);


console.log(obj3);
console.log(obj4);


