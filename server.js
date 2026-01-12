const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

// 모든 출처 허용 (Develop)
app.use(cors());

app.get('/', (req, res) => {
    res.send('안녕하세요.')
})

app.listen(port, () => {
    console.log(`서버가 ${port}에서 실행중입니다.`)
})

// Post id를 받으면 해당 JSON을 읽어와 값을 수정 시킨다.
// 그리고 저장

app.post("/update-status", function(req, res) {
    console.log(req.body);

    return res.send({success: true});
})