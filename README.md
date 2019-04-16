# Wetube Clone

> "Youtube"라는 사이트 메인페이지를 클론 코딩 한 사이트입니다.

- [완성된 사이트 이동하기]()

- [Nomad Coder](https://academy.nomadcoders.co/p/javascript-fullstack-from-zero-to-hero)의 강의를 보고 만든 사이트 입니다.

### [Github - TIL로 이동하기](https://github.com/engus93/TIL)

---

## 환경 설정

### 1. NodeJS 설치

[NodeJS 공식홈페이지로 이동](https://nodejs.org/ko/)

> 공식 홈페이지로 가서 LTS버전 다운로드

### 2. package.json 생성

```bash
cd 해당 폴더로 이동
npm init    #package.json 생성
```

### 3. Express

```bash
npm install express --save
```

> `Express`는 `Node.js`에서 동작하는 Framwork이고 안정적으로 빠르고 쉽게 서버 구축할 수 있도록 도와준다.

### 4. Babel

```bash
npm install @babel/node --save
npm install @babel/preset-env --save
npm install @babel/core --save
```

> `Babel`은 최신 버전의 자바스크립트 문법은 브라우저가 이해하지 못하는 상황 때문에 babel이 브라우저가 이해할 수 있는 문법으로 변환해준다.

### 5. nodemon

```bash
npm install nodemon -D
```

> 맨 끝에 -D는 package.json에 `dependencies`가 아닌 `devDependencies`로 들어가게 된다.
> `dependencies`는 프로젝트에 필요한 라이브러리, `devDependencies`는 개발시에 필요한 라이브러리이다.

### 6. morgan

```bash
npm install morgan --save
```

> `morgan`은 http에 대한 요청을 로깅하는 미들웨어이다.

###### ※ morgan("") → 괄호 안에 원하는 로그의 형태를 지정할 수 있다.

### 7. helmet

```bash
npm install helmet --save
```

> `helmet`은 다양한 HTTP 헤더를 설정하여 Express 응용 프로그램의 보안을 유지하도록 도와주는 미들웨어이다.

### 8. body-parser

```bash
npm install body-parser --save
```

> `body-parser`는 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어이다.

###### ※ json, urlencoded 등 원하는 파싱의 형태를 추가할 수 있다.

### 9. cookie-parser

```bash
npm install cookie-parser --save
```

> `cookie-parser`는 `cookie`를 전달받아서 사용할 수 있도록 만들어주는 미들웨어이다. 사용자 인증 같은 곳에서 쿠키를 검사할 때 사용한다.

### 10. pug

```bash
npm install pug --save
```

> 템플릿 엔진으로 더 HTML을 더 쉽고 빠르게 작성할 수 있도록 도와준다.

```JS
// app.js
app.set('view engine', "pug");
```

###### 위와 같이 js 파일에는 이런식으로 설정 해주고 작업 경로에 `views`라는 폴더를 만들어서 그 안에 `pug` 파일들을 넣어 놓으면 된다.

### 11. MongoDB

[MongoDB 공식홈페이지로 이동](https://www.mongodb.com/download-center/community)

> 공식홈페이지로 가서 `MongoDB Community Server` 설치

### 12. Mongoose

```bash
npm install mongoose --save
```

> `Mongoose`는 `MongoDB`와 `Node.JS` 이어줌

### 13. Dotenv

```bash
npm install dotenv --save
```

> `Dotenv`를 이용하면 설정되어 있는 환경 변수를 `.env` 파일에서 `process.env`로 불러올 수 있게 도와준다. 코드와 별도의 환경에 구성을 저장하는 `The Twelve-Factor App` 방법론을 기반으로 한다.

### 14. Multer

```bash
npm install multer --save
```

> `Multer`는 파일 업로드를 위해 사용되는 `multipart/form-data` 를 다루기 위한 `node.js` 의 미들웨어이다.

### ESlint

```bash
npm install eslint -D
npm install eslint-config-airbnb-base -D
npm install eslint-plugin-import -D
npm install prettier -D
npm install eslint-config-prettier -D
npm install eslint-plugin-prettier -D
```

### Webpack

```bash
npm install webpack webpack-cli --save
```

> 바꿔주는 역할

### extract-text-webpack-plugin

```bash
npm i extract-text-webpack-plugin@next

# Option
npm i css-loader
npm i postcss-loader
npm i sass-loader
```

> loder를 사용하게 돕는 플러그인

###### `@next`는 다음 버전의 최신 상태로 올리라는 뜻

### Passport

```bash
npm install passport-local-mongoose
npm install passport passport-local
```

### Express-session

```bash
npm install express-session
```

### localtunnel

```bash
npm install -g localtunnel
```

> localhost 환경을 http → https로 바꿔줌 안되서 ngrok으로 함

```bash
npm install ngrok -g
ngrok http port-number
```

```bash
npm install aws-sdk multer-s3
```

```bash
npm install get-blob-duration
```

> blob 파일의 total 재생 시간을 추출
