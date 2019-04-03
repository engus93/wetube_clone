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

### 4. Babel

```bash
npm install @babel/node --save  
npm install @babel/core --save
npm install @babel/preset-env --save
```

### 5. nodemon

```bash
npm install nodemon -D
```

> 맨 끝에 -D는 package.json에 `dependencies`가 아닌 `devDependencies`로 들어가게 된다.
`dependencies`는 프로젝트에 필요한 라이브러리, `devDependencies`는 개발시에 필요한 라이브러리이다.

### 6. morgan

```bash
npm install morgan --save
```

> `morgan`은 http에 대한 요청을 로깅하는 미들웨어이다.

### 7. helmet 

```bash
npm install helmet --save
```

> `helmet`은 다양한 HTTP 헤더를 설정하여 Express 응용 프로그램의 보안을 유지하도록 도와주는 미들웨어이다.

### 8. body-parser

```bash
npm install body-parser --save 
```

> `body-parser`는 클라이언트 `POST request data`의 `body`로부터 파라미터를 편리하게 추출합니다.

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

> 잘 모름 나중에 설명 해준다고 함