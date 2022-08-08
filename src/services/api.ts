import axios from 'axios';
import md5 from 'md5';



const publicKey = 'e068fc610b4f385417fa8af7f506b3dc';
const privateKey = '98b1f9d38bb50ca6bcf35e79610544e47c7d9880';

const ts = Number(new Date());

const hash = md5(ts + privateKey + privateKey );

const api = axios.create ({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: publicKey,
        hash,
    },
});

export default api;