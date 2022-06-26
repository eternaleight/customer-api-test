import * as Express from "express";
const express = require("express");
const app = express();
const PORT = 3001;
type Req = Express.Request;
type Res = Express.Response;
app.listen(PORT, console.log("DBに接続中"));
app.use(express.json());

app.get("/", (req: Req, res: Res) => {
  res.send("customer api");
});

//カスタマー情報
const customers = [
  { title: "tarou", id: 1 },
  { title: "jirou", id: 2 },
  { title: "saburou", id: 3 },
  { title: "shirou", id: 4 },
  { title: "gorou", id: 5 },
];

//(Create(POST), Read(GET), Update(PUT), Delete(DELETE))
//データを取得(GET)
app.get("/api/customers", (req: Req, res: Res) => {
  res.send(customers);
});
//カスタマーを取得(GET)
app.get("/api/customers/:id", (req: Req, res: Res) => {
  const customer = customers.find((cus) => cus.id === parseInt(req.params.id));
  res.send(customer);
});
//データを送信, 作成(POST)
app.post("/api/customers", (req: Req, res: Res) => {
  const customer = {
    title: req.body.title,
    id: customers.length + 1,
  };
  customers.push(customer);
  res.send(customers);
});
//データを更新(PUT)
app.put("/api/customers/:id", (req: Req, res: Res) => {
  const customer:any = customers.find((cus) => cus.id === parseInt(req.params.id));
  customer.title = req.body.title;
  res.send(customer);
});
//データを削除(DELETE)
app.delete("/api/customers/:id", (req: Req, res: Res) => {
  const customer:any = customers.find((cus) => cus.id === parseInt(req.params.id));
  const index = customers.indexOf(customer)
  customers.splice(index,1)
  res.send(customer);
});
