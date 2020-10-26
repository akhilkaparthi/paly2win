const router = require('express').Router();

const HederaClient = require('./hedera-client');
const { Client,AccountBalanceQuery, CryptoTransferTransaction } = require('@hashgraph/sdk');

router.route('/bal').post(async (req, res) => {
    console.log(req.body)
    alert("iam here");
    const client = Client.forTestnet();
    client.setOperator(req.body.account, req.body.pk);
    const balance = await new AccountBalanceQuery()
    .setAccountId(req.body.account)
    .execute(HederaClient)
    .catch(err=>{
        console.log(err)
    });
    res.json(balance.value());
  });

  router.route('/five').post(async (req, res) => {
    const client = Client.forTestnet();
    client.setOperator(req.body.account, req.body.pk);
    receipt =await( await new CryptoTransferTransaction()
    .addSender(req.body.account, 500_000_000)
    .addRecipient('0.0.17187', 500_000_000)
    .build(client)
    .execute(client))
    .getReceipt(client);
    res.json(receipt);
  });

  router.route('/ten').post(async (req, res) => {
    const client = Client.forTestnet();
    client.setOperator(req.body.account, req.body.pk);
    receipt =await (await new CryptoTransferTransaction()
    .addSender(req.body.account, 1000_000_000)
    .addRecipient('0.0.17187', 1000_000_000)
    .build(client)
    .execute(client))
    .getReceipt(client);
    res.json(receipt);
  });

  router.route('/fiveh').post(async (req, res) => {
    console.log(req.body.message)
    receipt =await (await new CryptoTransferTransaction()
    .addSender('0.0.17187', 100_000_000_000)
    .addRecipient(req.body.account, 100_000_000_000)
    .build(HederaClient)
    .execute(HederaClient))
    .getReceipt(HederaClient);
    console.log(receipt);
    res.json(receipt);
  });

  router.route('/tenh').post(async (req, res) => {
    console.log(req.body.message)
    receipt =await (await new CryptoTransferTransaction()
    .addSender('0.0.17187', 1000_000_000_000)
    .addRecipient(req.body.account, 1000_000_000_000)
    .build(HederaClient)
    .execute(HederaClient))
    .getReceipt(HederaClient);
    res.json(receipt);
  });


  module.exports = router;
