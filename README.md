# 🏫 Hue are you : 휴학을 알차고 유익하게
![image](https://github.com/user-attachments/assets/06987b1c-6bd3-4fa4-8032-ae65533e28ca)
- 배포 url: https://makneangeee.netlify.app/
- API 배포 url: https://maknaengee.p-e.kr

<br/>

## 프로젝트 소개
- 대학생 10명 중 6명 이상이 진로 정체감과 취업에 대한 불안으로 심리적 어려움을 겪고 있습니다.
- 실제로 63.6%의 대학생은 취업 준비, 진로 탐색, 휴식 등 의 시간을 원해 휴학까지 고민했습니다.
- 설문조사 결과, 휴학을 하고 싶다는 학생들이 많았으나 시간을 의미 있게 보내지 못할 것 같아 휴학을 포기했다는 학생들이 많았습니다.
- "휴알유"는 이러한 문제점을 파악하여, 대학생들이 이러한 걱정 없이 건강한 휴학 생활을 누릴 수 있도록 도와주는 서비스입니다.

<br/>

## 팀원 구성
| 기획 | 디자인 | 프론트엔드 | 백엔드 |
| --- | --- | --- | --- |
| 조하정 | 김은비 | [정선빈](https://github.com/jungsunbeen), [정은빈](https://github.com/eunkong0-0) | [박채린](https://github.com/cherrynniii), [이강록](https://github.com/kangroklee) |

<br/>

## 프로젝트 아키텍처
![아키텍처](https://github.com/user-attachments/assets/0b47bc0c-2232-45d9-937e-cc3de11a26f8)

<br/>

## 1. 개발 환경
- `FrontEnd`: Javascript, React, Netlify
- `BackEnd`: Django-Rest-Framework, AWS EC2, RDS, S3
- `Design`: Figma
- `Collaboration tool`: Notion, Slack
- `DB(BackEnd)`: ERD Cloud

<br/>

## 2. 채택한 개발 기술과 브랜치 전략
- GitHub Flow (기능 별 브랜치를 만들고 main에 병합하는 방식)
### branch (for FrontEnd)
- main (배포 브런치)
- sunbeen (선빈 개발 브런치)
- eunbin (은빈 개발 브런치)
<br/>

## 3. 프로젝트 구조
### FrontEnd
```
📦src
 ┣ 📂apis
 ┃ ┣ 📜authAxios.js
 ┃ ┣ 📜mypageapis.js
 ┃ ┣ 📜portFolioapis.js
 ┃ ┣ 📜reviewapis.js
 ┃ ┣ 📜testapis.js
 ┃ ┣ 📜user.js
 ┃ ┗ 📜viewResultapis.js
 ┣ 📂components
 ┃ ┣ 📂login
 ┃ ┃ ┗ 📜TermsModal.jsx
 ┃ ┣ 📂mypage
 ┃ ┃ ┗ 📜MyPageModal.jsx
 ┃ ┣ 📂notification
 ┃ ┃ ┗ 📜CommentSection.jsx
 ┃ ┣ 📂typetest
 ┃ ┃ ┣ 📜ProgressBar.js
 ┃ ┃ ┗ 📜YearSemesterSelector.js
 ┃ ┣ 📜FooterHook.js
 ┃ ┗ 📜HeaderHook.js
 ┣ 📂fonts
 ┃ ┣ 📜PretendardVariable.ttf
 ┃ ┗ 📜SB 어그로 B.ttf
 ┣ 📂hook
 ┃ ┗ 📜useForm.js
 ┣ 📂images
 ┃ ┣ 📜 ...
 ┣ 📂pages
 ┃ ┣ 📂bingo
 ┃ ┃ ┣ 📜BingoInfo.jsx
 ┃ ┃ ┣ 📜Bingomain.jsx
 ┃ ┃ ┣ 📜Bingomain2.jsx
 ┃ ┃ ┣ 📜CustomCalendar.jsx
 ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┣ 📜HueInfo.jsx
 ┃ ┃ ┣ 📜HueInfo2.jsx
 ┃ ┃ ┣ 📜Index.jsx
 ┃ ┃ ┣ 📜MadeBingo.jsx
 ┃ ┃ ┣ 📜MadeDragBingo.jsx
 ┃ ┃ ┣ 📜MadedBingo.jsx
 ┃ ┃ ┣ 📜MadedBingoEdit.jsx
 ┃ ┃ ┗ 📜MadedInClient.jsx
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┗ 📜Signup.jsx
 ┃ ┣ 📂myPage
 ┃ ┃ ┣ 📜Alarm.jsx
 ┃ ┃ ┣ 📜AlarmManage.jsx
 ┃ ┃ ┗ 📜MyPage.jsx
 ┃ ┣ 📂notification
 ┃ ┃ ┣ 📜ImageUploadForm.jsx
 ┃ ┃ ┣ 📜MadeDragReview.jsx
 ┃ ┃ ┣ 📜MadeReview.jsx
 ┃ ┃ ┣ 📜Noti.jsx
 ┃ ┃ ┣ 📜viewHue.jsx
 ┃ ┃ ┣ 📜viewNotice.jsx
 ┃ ┃ ┗ 📜viewReview.jsx
 ┃ ┣ 📂portFolio
 ┃ ┃ ┣ 📜ChangePortfolio.jsx
 ┃ ┃ ┗ 📜ReadPortfolio.jsx
 ┃ ┣ 📂typetest
 ┃ ┃ ┣ 📜Result.jsx
 ┃ ┃ ┣ 📜Test.jsx
 ┃ ┃ ┣ 📜Test1.jsx
 ┃ ┃ ┣ 📜Test2.jsx
 ┃ ┃ ┣ 📜Test3.jsx
 ┃ ┃ ┗ 📜ViewResult.jsx
 ┃ ┗ 📜Introduce.jsx
 ┣ 📂recoil
 ┃ ┣ 📜atoms.jsx
 ┃ ┗ 📜testatoms.jsx
 ┣ 📜.DS_Store
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜reportWebVitals.js
```

<br/>

## 4. 역할 분담
### 🐿️ 정선빈
- 유형화 테스트
- 빙고판 드래그앤드롭 및 빙고 페이지 구현
- 빙고 세부 항목 구현
- 빙고 만들기 구현
- 공고/후기 페이지 구햔
- 후기 만들기 구현

<br/>

### 🐱 정은빈
- 회원가입 및 로그인 
- 포트폴리오
- 마이페이지
- 홈 화면
<br/>

## 5. 개발 기간 및 작업 관리
- 개발 기간: 2024.7.19 ~ 2024.8.6
- 작업 관리
  - 슬랙: 채널에서 서로의 진행 상황을 공유
  - 노션: API 명세 공유 및 WBS, 백로그 작성

<br/>

## 6. 기능
![4 2  info_read](https://github.com/user-attachments/assets/33125ec7-d9bf-42aa-b972-1e1d0f44d7f9)

<br/>

## 7. library

- React-Router-Dom
- styled-components
- react-icons
- react-calendar
- babel
- recoil
- react-scroll
- --save-dev @babel/plugin-proposal-private-property-in-object

refactored by sunbeen