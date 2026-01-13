const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;
const bodyParser = require('body-parser')

const fs = require('fs');
const fileName = './pageData.json';
const file = require(fileName);

// 모든 출처 허용 (Develop)
app.use(cors());

// Json Parse
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send('안녕하세요.')
})

app.listen(port, () => {
    console.log(`서버가 ${port}에서 실행중입니다.`)
})

// 완료 여부 체크
app.post("/update-status", function(req, res) {
    var data = req.body;
    var targetPage = file.find((page) => page.id == data.id);

    console.log(targetPage)

    if (targetPage) {
        targetPage.status = data.status;

        fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
        if (err) {
            console.log(err);
            return res.status(500).send("파일 저장 중 오류 발생");
        }
            console.log('Updated ID:', data.id, 'to Status:', data.status);
            return res.send("상태가 변경되었습니다.");
        });
    } else {
        return res.status(404).send("해당 페이지를 찾을 수 없습니다.");
    }
    
    return res.send("제목 변경");
})