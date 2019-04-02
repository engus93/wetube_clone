# Wetube Clone

> "Youtube"라는 사이트 메인페이지를 클론 코딩 한 사이트입니다.

- [완성된 사이트 이동하기]()

- [Nomad Coder](https://academy.nomadcoders.co/p/javascript-fullstack-from-zero-to-hero)의 강의를 보고 만든 사이트 입니다.

### [Github - TIL로 이동하기](https://github.com/engus93/TIL)

---
## 환경 설정

### 1. NodeJS 설치 

> [NodeJS 공식홈페이지](https://nodejs.org/ko/)에서 LTS버전 다운로드

### 2. Express & 환경 구성

#### 2-1. package.json 생성 

```bash
cd 해당 폴더로 이동
npm init    #package.json 생성
```

#### 2-2. Express 설치 

```bash
npm install express --save
```

### 3. Babel 설치 

```bash
npm install @babel/node --save  
npm install @babel/core --save
npm install @babel/preset-env --save
```

### 4. nodemon 설치 

```bash
npm install nodemon -D
```

> 맨 끝에 -D는 package.json에 `dependencies`가 아닌 `devDependencies`로 들어가게 된다.
`dependencies`는 프로젝트에 필요한 라이브러리, `devDependencies`는 개발시에 필요한 라이브러리이다.

### 5. Middleware 설치 

#### 5-1. morgan

```bash
npm install morgan --save
```

> `morgan`은 http에 대한 요청을 로깅하는 미들웨어이다.

#### 5-2. helmet 

```bash
npm install helmet --save
```

> `helmet`은 다양한 HTTP 헤더를 설정하여 Express 응용 프로그램의 보안을 유지하도록 도와주는 미들웨어이다.

#### 5-3. body-parser

```bash
npm install body-parser --save 
```

> `body-parser`는 클라이언트 `POST request data`의 `body`로부터 파라미터를 편리하게 추출합니다.

#### 5-4. cookie-parser 

```bash
npm install cookie-parser --save
```

> `cookie-parser`는 Cookie 헤더를 구문 분석 req.cookies하고 쿠키 이름으로 키가 된 객체로 채 웁니다.