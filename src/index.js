import EthereumTx from 'ethereumjs-tx';
import web3Utils from 'web3-utils';
import './main.css';


const decodeBtn = document.querySelector('.decodeBtn');
const inputArea = document.querySelector('#inputarea');
const outputArea = document.querySelector('#outputarea');

decodeBtn.addEventListener('click', decodeHandler);

function decodeHandler() {
    const serializedTx = inputArea.value.trim();
    let outputtext = '';

    try {
        const txData = decodeTx(serializedTx);
        outputtext = JSON.stringify(txData, null, 4);
    } catch (err) {
        outputtext = err.toString();
    }

    outputArea.value = outputtext;
}

function decodeTx(hex) {
    const tx = new EthereumTx(hex);

    const gasPriceStr = web3Utils
        .hexToNumberString('0x' + tx.gasPrice.toString('hex'));

    const valueStr = web3Utils
        .hexToNumberString('0x' + tx.value.toString('hex'));

    const txData = {
        to: '0x' + tx.to.toString('hex'),
        nonce: parseInt(tx.nonce.toString('hex') || '0', 16),
        value: web3Utils.fromWei(valueStr, 'ether'),
        data: '0x' + tx.data.toString('hex'),
        chainId: tx._chainId,
        gasPrice: web3Utils.fromWei(gasPriceStr, 'gwei'),
        gasLimit: parseInt(tx.gasLimit.toString('hex'), 16) || '0'
    };

    if (tx.r.length) {
        const extendedTxData = {
            ...txData,
            from: '0x' + tx.from.toString('hex'),
            r: '0x' + tx.r.toString('hex'),
            v: '0x' + tx.v.toString('hex'),
            s: '0x' + tx.s.toString('hex')
        }

        return extendedTxData;
    }

    return txData;
}