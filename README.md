# Decode Ethereum Transaction

JS tool to decode ethereum raw transactions.

Live demo: [decode-eth-tx](https://elxor.github.io/decode-eth-tx)

Try this tx:

```
0xf86c1b850165a0bc00825208949570d325a2e2e1ea3d83a57ccb2c2346171894a48803782dace9d90000802aa0f9f9d9a73248b92820e88efa290afca2cf75bdb8daf9d125e3143b21e471ace8a05280f0580d71d9c82d88a491faabd56ab7a70e28750e002b9a75b816f9d614be
```

It should be decoded to:

```
{
    "to": "0x9570d325a2e2e1ea3d83a57ccb2c2346171894a4",
    "nonce": 27,
    "value": "0.25",
    "data": "0x",
    "chainId": 3,
    "gasPrice": "6",
    "gasLimit": 21000,
    "from": "0xef01099d7bdcfa2c755089359e9681723c127f19",
    "r": "0xf9f9d9a73248b92820e88efa290afca2cf75bdb8daf9d125e3143b21e471ace8",
    "v": "0x2a",
    "s": "0x5280f0580d71d9c82d88a491faabd56ab7a70e28750e002b9a75b816f9d614be"
}
```