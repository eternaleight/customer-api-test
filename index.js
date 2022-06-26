"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var PORT = 3001;
app.listen(PORT, console.log("DBに接続中"));
app.use(express.json());
app.get("/", function (req, res) {
    res.send("customer api");
});
//カスタマー情報
var customers = [
    { title: "tarou", id: 1 },
    { title: "jirou", id: 2 },
    { title: "saburou", id: 3 },
    { title: "shirou", id: 4 },
    { title: "gorou", id: 5 },
];
//(Create(POST), Read(GET), Update(PUT), Delete(DELETE))
//データを取得(GET)
app.get("/api/customers", function (req, res) {
    res.send(customers);
});
//カスタマーを取得(GET)
app.get("/api/customers/:id", function (req, res) {
    var customer = customers.find(function (cus) { return cus.id === parseInt(req.params.id); });
    res.send(customer);
});
//データを送信, 作成(POST)
app.post("/api/customers", function (req, res) {
    var customer = {
        title: req.body.title,
        id: customers.length + 1
    };
    customers.push(customer);
    res.send(customers);
});
//データを更新(PUT)
app.put("/api/customers/:id", function (req, res) {
    var customer = customers.find(function (cus) { return cus.id === parseInt(req.params.id); });
    customer.title = req.body.title;
    res.send(customer);
});
//データを削除(DELETE)
app["delete"]("/api/customers/:id", function (req, res) {
    var customer = customers.find(function (cus) { return cus.id === parseInt(req.params.id); });
    var index = customers.indexOf(customer);
    customers.splice(index, 1);
    res.send(customer);
});
