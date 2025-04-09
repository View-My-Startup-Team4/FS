# 🚀 ViewMyStartup - Team4

## 프로젝트 주제 
**ViewMyStartup**
![ViewMyStartup Logo](https://pplx-res.cloudinary.com/image/upload/v1744104891/user_uploads/HKBlYxFIrgHYJyC/img_thumbnail_view-my-startup.jpg)

스타트업 기업 정보를 쉽게 검색하고, 비교하고, 투자 정보까지 관리할 수 있는 올인원 플랫폼.

## 목차
- [프로젝트 기간](#프로젝트-기간)  
- [배포](#배포)
- [로컬 실행 방법](#-로컬-실행-방법)  
- [주요 기능](#주요-기능)  
- [팀원](#팀원)  
- [기술 스택](#기술-스택)  
- [프로젝트 구조 예시](#프로젝트-구조-예시)

## 프로젝트 기간
2025.03.21 ~ 2025.04.10

## 배포 

🖥️ [ViewMyStartup 접속하기 (FE)](https://viewmystartup4team.netlify.app/)

## 로컬 실행 방법

1. 레포지토리를 클론합니다:
   ```bash
   git clone https://github.com/your-repo/ViewMyStartup.git
   ```

2. 프로젝트 디렉토리로 이동합니다:
   ```bash
   cd ViewMyStartup
   ```

3. 프론트엔드와 백엔드 디렉토리에서 의존성 패키지를 설치합니다:
   ```bash
   cd FE
   npm install
   cd ../BE
   npm install
   ```

4. 프론트엔드와 백엔드 서버를 각각 실행합니다:
   ```bash
   # 프론트엔드
   cd FE
   npm start

   # 백엔드
   cd BE
   npm run dev
   ```

5. 이제 로컬에서 `http://localhost:5050`으로 접근할 수 있습니다.


## 주요 기능

- 🔍 **스타트업 기업 정보 검색**  
- 📊 **여러 스타트업 간 정보 비교 기능**
- 💰 **투자 정보 등록/수정/삭제(CRUD)**  
- 📈 **투자 내역 기반 비교 페이지 제공**

## 팀원
| 이름 | 깃허브 | 
|------|------|
| 김수빈 | [GitHub](https://github.com/subinkim9755) |
| 홍상훈 |[GitHub](https://github.com/az0319h) |
| 심유빈 | [GitHub](https://github.com/shimyubin) |
| 김재욱 | [GitHub](https://github.com/WooGie911) |
| 황수정 |[GitHub](https://github.com/suejeong) |

## 기술 스택

| 영역        | 기술 스택                           |
|-------------|-------------------------------------|
| 프론트엔드   |<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">|
| 백엔드      |<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white">|
| 데이터베이스 |<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white">|
| 협업        |<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">|
| 배포        |<img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/Render-000000?style=for-the-badge&logo=git&logoColor=white"> |


## 프로젝트 구조 예시

```bash
├── BE
│   └── src
│      ├── modules #백엔드 API
│   ├── db 
│    │   ├── prisma 
│   │   │   ├── migrations 
│   │   │   ├── schema.prisma #DB 스키마.
│   │   │   └── seed.js #DB seed 데이터.
│   └── app.js
├── FE
│   └── src
│      ├── common 
│      │   ├── Error #API 통신 과정 에러처리.
│      │   ├── Header 
│      │   ├── IsLoading 
│      │   └── Layout
│      ├── assets/images
│      │   ├── companies #기업 로고 이미지.
│      │   ├── favicon 
│      │   ├── icons
│      │   └── logos
│      ├── apis
│      │   ├── Common.js 
│      │   ├── Company.js #기업 관련 API
│      │   └── Invest.js #투자 관련 API
│      ├── components
│      ├── pages
│      ├── App.jsx
│      ├── main.jsx #라우팅 처리.
│      └── styles
└── public
```
[목차로](#목차)
