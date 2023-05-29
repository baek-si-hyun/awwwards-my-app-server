import express from 'express';
import projectsCtrl from '../controllers/projectsCtrl.js'

const router = express.Router();

router.route('/')
    .get(projectsCtrl.getProjects)

export default router

// ('Netflix', 'NETFLIX CLONE', 'SOON', 'https://drive.google.com/uc?id=1QyK35jAoe_dzww0TJ1dxOpz6ZUbqzL7G', 'https://drive.google.com/uc?id=1Ck8k-w0JtMsGiXgDvtI4knRi88o1zLuS', 'Nomad Coders, SiHyun Baek', 'https://drive.google.com/uc?id=1c5q17PYME1hdeO4GwTo30qkq96IUw6Jm', 'https://drive.google.com/uc?id=13nS1RHwx8tFOdBSpMaq4ji-hVsFNA0e8', '', '', '["SourceSansPro"]', '["#e51013"]', '"nomadcoders"라는 강의 사이트에서 진행하는 코드 챌린지로 인해 제작되었습니다.React와 typescript를 조합하였고 그외에 Styled Components, framer-motion을 사용하였습니다. 해당 프로젝트는 "framer-motion"을 활용하기 위해 제작되었습니다. 안타깝게도 해당 프로젝트의 완성이 늦춰지고 있습니다. 사유는 1.데이터를 제공해주는 TMDB의 회원가입이 거부당하는 문제가 있습니다.(제보한지 1달이 넘었는데도 답변 안오고, 문제 해결도 안됨) 2.강의에 찍힌 넷플릭스의 홈페이지가 리메이크 되면서 클론코딩을 하기 어려워졌습니다.(리메이크전 홈페이지구조를 알 방법이 없다. 그렇다고 리메이크된 홈페이지를 클론코딩하자니 framer-motion을 사용할 필요가 없어 프로젝트 취지에 어긋남) 해당 문제들이 해결될 경우 프로젝트가 다시 진행될 예정입니다.', 'Due to a code challenge conducted on a lecture site called "nomadcoders" It was created. React and typescript were combined and other Styled Components, framer-motion were used. that project Built to take advantage of "framer-motion". Unfortunately Completion of the project is being delayed. Reason 1. Data The problem of being denied join the membership of TMDB provided There is. (It has been more than a month since I reported it, but there is no answer, and there is a problem 2. Netflix homepage taken in the lecture was remade It has become difficult to do clone coding. no method. So, lets clone-code the remade homepage? No need to use framer-motion, which goes against the purpose of the project) The project will resume once these issues are resolved.'),
// ('Kanban', 'KANBAN BOARD', '2023. 2. 1.', 'https://drive.google.com/uc?id=1FotT44rTjAaAj2fdBmijAXGuD6h1NaWw', 'https://drive.google.com/uc?id=1Ck8k-w0JtMsGiXgDvtI4knRi88o1zLuS', 'Nomad Coders, SiHyun Baek', 'https://drive.google.com/uc?id=1GUVWTLD7To19JKV9TQeoud8uYazRGYqh', 'https://drive.google.com/uc?id=1L-CTea7Khtt9-use-lPTPAFd5IXbEshQ', 'https://drive.google.com/uc?id=1Ja4HL87kaM7u_ZwBokCL6Py5YXXwCDO_','https://drive.google.com/uc?id=1KcKsiYItgQsk4YwvmeIHOz_5BUH9Td_z' , '["Pretendard"]', '["#efefef", "#626262"]', '"nomadcoders"라는 강의 사이트에서 진행하는 코드 챌린지로 인해 제작되었습니다.React와 typescript를 조합하였고 그외에 Styled Components, Recoil, react beautiful dnd, react hook form을 사용하였습니다. 디자인은 "김주이(te6-in)" 님의 코드 챌린지를 참고했습니다. 해당 프로젝트는 "보드 옮기기", "새로운 보드 생성하기", "localStorage에 저장 및 로드하기"의 업데이트를 준비중입니다.', 'Due to a code challenge conducted on a lecture site called "nomadcoders" It was created. React and typescript were combined and other Styled Components, Recoil, react beautiful dnd, react hook form Used. The design is "Kim Joo-i (te6-in)"s code challenge Referenced. The project is "Move Board", "New Board" Update "Creating", "Saving and Loading to localStorage" Coming soon.'),
// ('Coin', 'CRYPTO TRACKER', '2023. 1. 11.', 'https://drive.google.com/uc?id=1hZTgc9uxedlYmiStZssy5QWitCEx0_m3', 'https://drive.google.com/uc?id=1Ck8k-w0JtMsGiXgDvtI4knRi88o1zLuS', 'Nomad Coders, SiHyun Baek', 'https://drive.google.com/uc?id=1EQ5Ca_7caY88SNXWYhhZ8miQGMj4Wkv9', 'https://drive.google.com/uc?id=1-FAc4IfXaKQoQ2xtAg5I_OjxKLSpSw17', 'https://drive.google.com/uc?id=1plCG4LpJGz_xG1-nc359fR8W6-Hh1-5y', 'https://drive.google.com/uc?id=1fVNkE4GHtV_eZpSCNhiUrwkvVf69_SXY', '["Pretendard"]', '["#3b3b3b", "#222222"]', '"nomadcoders"라는 강의 사이트에서 진행하는 코드 챌린지로 인해 제작되었습니다.React와 typescript를 조합하였고 그외에 Styled Components, Recoil, React Query, apexcharts를 사용하였습니다.', 'Due to a code challenge conducted on a lecture site called "nomadcoders" it was created React and typescript combined and different styled Components, Recoil, React Query and apexcharts were used.'),
// ('Myapp', 'MY APP', '2022. 12. 25.', 'https://drive.google.com/uc?id=1yaxtWZldLj4rAF7DA1QGEHeccm_Cwl7o', 'https://drive.google.com/uc?id=1DUof6Qrebo6gV8njscY6hnrufbAGlUZt', 'SiHyun Baek', 'https://drive.google.com/uc?id=1sZHtJNkE6UmtmK8F3r1jPDxw13JGXRWs', 'https://drive.google.com/uc?id=112Fh8tT6mrb1KEjOGOStHj2gl0zMaXCz', 'https://drive.google.com/uc?id=1L9O0GzTNPjvJ8KKNxIKfVvhuv_TaCk-X', 'https://drive.google.com/uc?id=1nUNmxtR7G7pJOjPCH39Q50VzURRL-3-a', '["Yasashii", "Exo2", "NanumSquareRound"]', '["#3e9d89", "#1e3d5c"]', '제가 처음 리액트를 배운것들을 활용해 보기 위해 제작 되었습니다. module css를 사용했으며 다른 특별한 라이브러리들은 사용하지 않은 순수 리액트 프로젝트입니다. 첫 Header 컴포넌트의 디자인은 프론트엔드 프리랜서 "henriheymans"님의 개인 사이트를 참고하여 제작했습니다. Contact 컴포넌트의 디자인은 "wanderful" 이라는 해외 숙소 소개 사이트를 참고하였습니다.', 'It is built to use what you first learned about React. I used module css and no other special libraries. This is a pure React project. The design of the first header component is as follows. Refer to the personal homepage of front-end freelancer "henriheymans" production. The design of the Contact component was referred to an overseas accommodation introduction site called "wanderful".'),
// ('Airbnb', 'AIRBNB CLONE', '2022. 9. 1.', 'https://drive.google.com/uc?id=1xfdCP6LzN40oJ7XS4yCI9MkqgEPvTXux', 'https://drive.google.com/uc?id=1DUof6Qrebo6gV8njscY6hnrufbAGlUZt', 'SiHyun Baek, 4 others', 'https://drive.google.com/uc?id=1OXFL0jgQUXZ75eKD3xt0GrD9qJhdIBDU', 'https://drive.google.com/uc?id=1xZF2mAkPBA8aLG68UNFfyP2oyNE0HkEg', 'https://drive.google.com/uc?id=1MyEP0ZS-z8EDUg1T5SnYrJ0EDGXwoEEO', 'https://drive.google.com/uc?id=1DvIxLSAhgOFXMJm38AC13pPyatinwwLh','["GothamMedium", "Helvetica", "ProductSans", "Roboto"]', '["#ff385c"]', '국비지원학원에서 팀프로젝트로 만든 최초의 프로젝트 입니다. 팀은 총 5명으로 이루어 졌으며 1명 프론트 1명 백엔드로 짝을 이뤄 프로젝트를 진행했습니다. 나머지 1명은 DB를 관리 및 설계 하였습니다. 해당 프로젝트에는 백엔드는 JAVA, Spring, Spring Boot, Oracle Cloud를 사용 하였으며 프론트엔드는 주로 JQuery를 사용했고 javascript, Vue는 배운것을 활용해 보기위해 중간중간 사용하였습니다. 총 2달 동안 진행된 이 프로젝트는 1달은 설계 및 사이트분석을 하였고 나머지 1달은 개발을 진행하였습니다. 시간 관계상 html과 css 개발은 기존 에어비앤비의 코드를 가져와 사용하였고 기능, 기술구현만 직접 개발 하였습니다.', 'This is the first project made as a team project at a government-supported academy. The team consisted of 5 people, 1 front-end and 1 back-end. The other managed and designed the DB. did. The backend of the project is JAVA, Spring, Spring Boot, Oracle Cloud was used, and the front end mainly used JQuery. Javascript, Vue is a medium to use what you learn. used. This project, which took a total of two months, took one month to design and manufacture. We spent the rest of the month analyzing and developing the site. hour html and css development brought the existing Airbnb code as it is. I have used it and developed only the features and technology implementation myself.');







// 넷플릭스 1
// https://drive.google.com/uc?id=1c5q17PYME1hdeO4GwTo30qkq96IUw6Jm
// 넷플릭스 2
// https://drive.google.com/uc?id=13nS1RHwx8tFOdBSpMaq4ji-hVsFNA0e8

// 칸반 1
// https://drive.google.com/uc?id=1GUVWTLD7To19JKV9TQeoud8uYazRGYqh
// 칸반 2
// https://drive.google.com/uc?id=1Ja4HL87kaM7u_ZwBokCL6Py5YXXwCDO_
// 칸반 3
// https://drive.google.com/uc?id=1KcKsiYItgQsk4YwvmeIHOz_5BUH9Td_z
// 칸반 4
// https://drive.google.com/uc?id=1L-CTea7Khtt9-use-lPTPAFd5IXbEshQ

// 코인 1
// https://drive.google.com/uc?id=1EQ5Ca_7caY88SNXWYhhZ8miQGMj4Wkv9
// 코인 2
// https://drive.google.com/uc?id=1-FAc4IfXaKQoQ2xtAg5I_OjxKLSpSw17
// 코인 3
// https://drive.google.com/uc?id=1plCG4LpJGz_xG1-nc359fR8W6-Hh1-5y
// 코인 4
// https://drive.google.com/uc?id=1fVNkE4GHtV_eZpSCNhiUrwkvVf69_SXY

// 마이앱 1
// https://drive.google.com/uc?id=1sZHtJNkE6UmtmK8F3r1jPDxw13JGXRWs
// 마이앱 2
// https://drive.google.com/uc?id=112Fh8tT6mrb1KEjOGOStHj2gl0zMaXCz
// 마이앱 3
// https://drive.google.com/uc?id=1L9O0GzTNPjvJ8KKNxIKfVvhuv_TaCk-X
// 마이앱 4
// https://drive.google.com/uc?id=1nUNmxtR7G7pJOjPCH39Q50VzURRL-3-a

// 에어비앤비 1
// https://drive.google.com/uc?id=1OXFL0jgQUXZ75eKD3xt0GrD9qJhdIBDU
// 에어비앤비 2
// https://drive.google.com/uc?id=1xZF2mAkPBA8aLG68UNFfyP2oyNE0HkEg
// 에어비앤비 3
// https://drive.google.com/uc?id=1MyEP0ZS-z8EDUg1T5SnYrJ0EDGXwoEEO
// 에어비앤비 4
// https://drive.google.com/uc?id=1DvIxLSAhgOFXMJm38AC13pPyatinwwLh

// 노마드 로고
// https://drive.google.com/uc?id=1Ck8k-w0JtMsGiXgDvtI4knRi88o1zLuS
// 내로고
// https://drive.google.com/uc?id=1DUof6Qrebo6gV8njscY6hnrufbAGlUZt

// 넷플릭스 썸네일
// https://drive.google.com/uc?id=1QyK35jAoe_dzww0TJ1dxOpz6ZUbqzL7G
// 칸반 썸네일
// https://drive.google.com/uc?id=1FotT44rTjAaAj2fdBmijAXGuD6h1NaWw
// 코인 썸네일
// https://drive.google.com/uc?id=1hZTgc9uxedlYmiStZssy5QWitCEx0_m3
// 마이앱 썸네일
// https://drive.google.com/uc?id=1yaxtWZldLj4rAF7DA1QGEHeccm_Cwl7o
// 에어비앤비 썸네일
// https://drive.google.com/uc?id=1xfdCP6LzN40oJ7XS4yCI9MkqgEPvTXux

// 롤
// https://drive.google.com/uc?id=1p8FOp78-uEIiIXHgIzxPSl0es7so_Yhs
// 검사
// https://drive.google.com/uc?id=1t71T1pv4eIIVW6WBhpqT5mp5LctYCn9V
// warthunder
// https://drive.google.com/uc?id=131H-T-tUXVT5P2ckcbSGYH3D7tDkAswA
// 뉴진스
// https://drive.google.com/uc?id=17feWFZQVtdcNIybOxMQ_cyTHZEeoFz9i

// 업비트 썸네일
// https://drive.google.com/uc?id=1OmUmAQtMIO6EwWwSaYxcPeYhtEbDWzUi
// 업비트 로고
// https://drive.google.com/uc?id=1DDKMKRxV7WD0QYQyGEM417fSU_EH_xeJ
// 어워드 썸네일
// https://drive.google.com/uc?id=1DFvc2k6DEd67TV7kQj6b0bmnh7Ajgm7J
// 어워드 로고
// https://drive.google.com/uc?id=10m5V_QRE9K7mPA9tF0bnIPT9y9NOCiaO
// 바이낸스 로고
// https://drive.google.com/uc?id=1WHBqahCdAwsVkPciM-lwchGWu89LiAlP
// 바이낸스 썸네일
// https://drive.google.com/uc?id=1lsDz0R_DIcm77CaezGMAtoMLvcvKfCXp

// 헤더 이미지
// https://drive.google.com/uc?id=1piHF-_s38aC1DnDOOMadRVFKc8RXPjbe

// 등대
// https://drive.google.com/uc?id=1L06-6BothaaI1yCcATv7N4CxfkGRkKwK
