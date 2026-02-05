const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const fs = require("fs");
const fileName = "./pageData.json";
const file = require(fileName);

// 모든 출처 허용 (Develop)
app.use(cors());

// JSON 파싱
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 서버 페이지 테스트
app.post("/", (req, res) => {
    res.send("서버가 열려있습니다.");
});

app.listen(port, () => {
    console.log(`서버가 ${port}에서 실행중입니다.`);
});

app.post("/create-info", function (req, res) {
    var data = req.body;

    console.log(data);

    file.push(data);

    fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
        if (err) {
            console.log(err);
            return res.status(500).send("파일 저장 중 오류 발생");
        }
        return res.send("상태가 변경되었습니다.");
    });
});

app.post("/update-info", function (req, res) {
    var data = req.body;
    var { id, title, url, body, status } = data;
    var parseStatus = status;

    for (let i = 0; i < file.length; i++) {
        if (file[i].id == id) {
            file[i].title = title;
            file[i].url = url;
            file[i].body = body;
            file[i].status = parseStatus;

            fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
                if (err) {
                    console.log(err);
                    return res.status(500).send("파일 저장 중 오류 발생");
                }
                return res.send("상태가 변경되었습니다.");
            });
        }
    }
});

app.post("/delete-info", function (req, res) {
    var data = req.body;
    var { id } = data;

    // 원본 배열 직접 삭제
    for (let i = 0; i < file.length; i++) {
        if (file[i].id === id) {
            file.splice(i, 1);
        }
    }

    fs.writeFile(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
        if (err) {
            console.log(err);
            return res.status(500).send("파일 저장 중 오류 발생");
        }
        return res.send("상태가 변경되었습니다.");
    });
});
