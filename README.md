# 로컬 퍼블리싱 현황관리 시스템

<img src="/assets/readme_thumbnail.jpg" alt="로컬 퍼블리싱 현황관리 시스템 섬네일"/>
로컬 환경에서 웹 퍼블리싱 작업의 진척 현황을 관리하고 프론트엔드 페이지를 한 곳에서 체계적으로 관리할 수 있는 Dashboard 시스템입니다.

- 📋 **미리보기** : https://beingborn.github.io/nodejs_indexTable_test/pages/index.html
  <br><br>

## 프로젝트 소개📄

### 주요 기능

- **JSON 기반 페이지 관리** : JSON 파일을 통해 퍼블리싱 작업의 진척 현황을 체계적으로 관리
- **대시보드 인터페이스** : 프로젝트의 엔트리 포인트로 사이트맵 역할을 수행하며, 모든 페이지를 한눈에 확인
- **검색 기능** : 개발 중인 페이지를 빠르게 찾아 탐색 가능
- **CRUD 작업** : 페이지 생성, 읽기, 수정, 삭제 기능 지원
- **진척률 추적** : 페이지별 개발 완료 여부를 상태(Status)로 관리
- **프로젝트 템플릿** : 새로운 퍼블리싱 프로젝트의 초기 구축 템플릿으로 활용 가능

### 사용 시나리오

- 팀 프로젝트에서 여러 페이지의 개발 진행 상황을 한 곳에서 모니터링
- 퍼블리싱 작업 완료 현황을 빠르게 확인 및 보고

    <br><br>

## 프로젝트 기술 스택💻

#### 📌 백엔드

- **Node.js** : 서버 런타임 환경
- **Express.js v5.2.1** : 웹 서버 프레임워크
- **Nodemon v3.1.11** : 개발 환경에서의 자동 재시작 도구
- **CORS v2.8.5** : 크로스 오리진 요청 처리
- **Body-parser v2.2.2** : HTTP 요청 바디 파싱

#### 🎨 프론트엔드

- **HTML5** : 마크업
- **CSS3** : 스타일링
- **Vanilla JavaScript** : 클라이언트 로직
- **Bootstrap v5.3.8** : 반응형 UI 프레임워크
- **Font Awesome v6.5.1** : 아이콘 라이브러리
- **Pretendard Font** : 한글/영문 웹폰트

#### 📦 데이터 관리

- **JSON** : 페이지 데이터 저장 (pageData.json)
- **File System (fs)** : 서버 파일 시스템 API

#### 🛠️ 개발 도구

- **npm** : 패키지 관리
  <br><br>

## 프로젝트 주요 기능 상세⚙️

### 1️⃣ 페이지 대시보드

- 모든 페이지를 테이블 형식으로 표시
- 페이지 ID, 제목, URL, 설명, 진행 상태를 한눈에 확인
- 진행 상태 필터링 (완료/미완료)

### 2️⃣ 검색 기능

- 페이지 제목 기반 실시간 검색
- 찾는 페이지를 빠르게 탐색 가능

### 3️⃣ CRUD 작업

- **Create** : 새로운 페이지 추가 (제목, URL, 설명, 상태)
- **Read** : 페이지 정보 조회
- **Update** : 기존 페이지 정보 수정
- **Delete** : 페이지 삭제

### 4️⃣ 상태 관리

- 각 페이지의 개발 완료 여부를 true/false로 관리
- 상태별로 시각적 표시 (완료: ✓, 미완료: ✗)

### 5️⃣ 백엔드 API

- `POST /create-info` : 새 페이지 정보 생성
- `POST /update-info` : 페이지 정보 수정
- `POST /delete-info` : 페이지 정보 삭제
- `POST /` : 서버 상태 확인
  <br><br>

## 프로젝트 구조📁

```
nodejs_test/
├── server.js                 # Express 서버 메인 파일
├── package.json              # 프로젝트 의존성 및 설정
├── pageData.json             # 페이지 데이터 저장 파일 (JSON)
├── README.md
├── pages/
│   └── index.html            # 메인 대시보드 페이지
├── resources/
│   └── style.css             # 전역 스타일시트
├── assets/                   # 이미지, 아이콘 등 정적 파일
    ├── ico/
    └── logo/
```

<br><br>

## 설치 및 실행🚀

### 필수 요구사항

- Node.js 12.0 이상
- npm 6.0 이상

### 설치

```bash
# 프로젝트 폴더로 이동
cd nodejs_test

# 의존성 설치
npm install
```

### 실행

```bash
# 개발 서버 실행 (nodemon으로 자동 재시작)
npm start

# 라이브 서버 실행 ex) port:5500
http://localhost:5500/pages/index.html
```

<br><br>

## 트러블 슈팅🧑‍💻

### 문제: 포트 3000이 이미 사용 중일 경우

**해결** : server.js에서 포트 번호 변경

```javascript
const port = 3001; // 다른 포트로 변경
```

### 문제: CORS 오류 발생

**해결** : 이미 CORS 미들웨어가 설정되어 있습니다. 필요시 특정 도메인만 허용하도록 수정:

```javascript
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    }),
);
```

### 문제: pageData.json 파일이 손상된 경우

**해결** : 파일을 초기 상태로 복구하거나 대시보드에서 데이터 재입력
<br><br>

## 향후 개선 계획🔮

- [ ] 데이터베이스 연동 (MongoDB, MySQL 등)
- [ ] 사용자 인증 및 권한 관리 기능
- [ ] 페이지 미리보기 iframe 통합
- [ ] 엑셀 다운로드 기능
- [ ] 진행률 통계 및 차트 시각화
- [ ] 페이지 카테고리별 그룹화
- [ ] 태그 기반 필터링
- [ ] 댓글/피드백 기능
- [ ] 변경 이력(History) 추적
- [ ] Webpack/Build 자동화 구성

<br><br>

## 프로젝트 후기✍️

로컬 퍼블리싱 프로젝트의 현황 URL을 정적으로 작업하는 데 리소스를 줄이기 위해 개발했습니다.
JSON 파일을 활용한 경량 구조로 별도의 데이터베이스 없이도 효율적인 관리가 가능하며,
Express.js 기반의 간단한 API로 CRUD 작업을 쉽게 구현할 수 있습니다.

향후 데이터베이스 연동, 사용자 인증, Tailwind Version 생성 등으로 더욱 강화할 계획입니다.

<br><br>

## 라이센스📜

ISC License

<br><br>

## 문의 및 피드백💬

프로젝트에 대한 의견이나 개선 사항이 있으시면 이슈를 등록해주세요.
