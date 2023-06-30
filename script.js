window.promises = [];

// cons div = document.getElementById("output");


const div = document.getElementById("output");

let prom1 = new Promise((res, rej) => {
	setTimeout(() => {
		res("two");
	}, 2000)
});

let prom2 = new Promise((res, rej) => {
	setTimeout(() => {
		res("four");
	}, 4000)
});

let prom3 = new Promise((res, rej) => {
	setTimeout(() => {
		res("three");
	}, 3000)
});

let prom4 = new Promise((res, rej) => {
	setTimeout(() => {
		res("one");
	}, 1000)
});

let prom5 = new Promise((res, rej) => {
	setTimeout(() => {
		res("five");
	}, 5000)
});


promises.push(prom1);
promises.push(prom2);
promises.push(prom3);
promises.push(prom4);
promises.push(prom5);


// prom1.then((data) => promises.push(data));
// prom2.then((data) => promises.push(data));
// prom3.then((data) => promises.push(data));
// prom4.then((data) => promises.push(data));
// prom5.then((data) => promises.push(data));


let ans = Promise.any(promises);
ans.then((data) => div.innerText = data);

// prom.then((data) => {
// 	div.innerText = data;
// })