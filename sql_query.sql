create schema `awwwards_myapp` ;

use awwwards_myapp;

create table faqs_table (
faqs_seq int not null auto_increment,
faqs_question varchar(100) not null,
faqs_answer varchar(100) not null,
 primary key(faqs_seq)
);

insert into faqs_table(faqs_question, faqs_answer) values ('국비지원학원을 다니기 전엔 무엇을 하셧나요?', '다리 조인트 교체 및 설치 노동을 했습니다.'),('국비지원학원을 다니게 된 계기가 있나요?', '효율적이고 빠르게 취업하고 싶어하는 저에게 군대 동기가 추천해주었습니다.'),
('대학을 안나온? 못나온? 이유가 있나요?', '대학을 나올정도의 성적은 되었지만 대학에 대해 굉장히 부정적이어서 가지 않았습니다.'),('고졸 문제는 어떻게 해결하실 건가요?', '취업 후 제가 회사에 민폐 끼치질 않을 정도의 실력되면 사이버대학으로 졸업장을 취득할거같습니다.'),
('대학에 관심이 없었다면 왜 특성화고에 가지 않았나요?', '부모님의 반대가 매우 심했습니다. 개발자라는 직업도 마찬가지 였지만 지금은 설득에 성공했습니다.'),('국비지원학원 끝난지가 좀 됐는데 왜 지금 구직활동을 하시나요?', '부정교합으로 인한 수술이 국비지원학원 수료후에 바로 예정되어있었고, 회복기간까지 필요하다보니 이제서야 하게 됐네요. +프론트공부'),
('프론트엔드에 개발자가 되기로 마음먹은 이유가 있나요?', '팀 프로젝트를 진행하며 백, 프론트 둘다 해보니 프론트엔드 쪽이 백엔드보다 잘맞는거같아서 마음 먹었습니다.'),('사용할줄 아는 언어, 라이브러리, 프레임워크는 뭔가요?', 'javascript, jquery, react, typescript가 있습니다.'),
('java, spring, python, DB도 배웠다던데 사용 할줄 아시나요?', '프로젝트에서 조금이나마 사용은 해봤지만 지금은 다시 공부해야 합니다.');

select * from faqs_table;

create table projects_table (
projects_seq int not null auto_increment,
projects_code varchar(20) not null,
projects_name varchar(20) not null,
projects_date varchar(20) not null,
projects_thumbnail blob not null,
projects_logo blob not null,
projects_by varchar(50) not null,
projects_prev_img1 blob not null,
projects_prev_img2 blob not null,
projects_prev_img3 blob,
projects_prev_img4 blob,
projects_fonts varchar(100) not null,
projects_colors varchar(100) not null,
projects_ko varchar(1000) not null,
projects_en varchar(1000) not null,
 primary key (projects_seq)
);

insert into projects_table(projects_code, projects_name, projects_date, projects_thumbnail, projects_logo, projects_by, projects_prev_img1, projects_prev_img2, projects_prev_img3, projects_prev_img4, projects_fonts, projects_colors, projects_ko, projects_en) values
('Awwwards', 'AWWWARDS MY APP', '2023. 06. 08', 'https://drive.google.com/uc?id=1xZBHQm5Um2QHRJoz7Yk3HnvDEvi8ld8_', 'https://drive.google.com/uc?id=1DUof6Qrebo6gV8njscY6hnrufbAGlUZt', 'SiHyun Baek', 'https://drive.google.com/uc?id=1rmRNY2ab_NtvPCtG_JjlX44kKBJJ8tHB', 'https://drive.google.com/uc?id=1VseuOEHyesd2AO-eRiUiXyxAiq1JRnRS', 'https://drive.google.com/uc?id=1GLxWZ0N0ek4cgrQVvVnOuprlRpT6oQQG', 'https://drive.google.com/uc?id=1RG6aPGn21bqZiMGKQP9IoDSsHa7QRrks', '["Apercu", "Pretendard"]', '["#d7d7d7", "#3e3e3e"]', '제가 만든 프로젝트들를 보실분들이 일일히 프로젝트 하나하나 링크 눌러가며 보지않고 편하고 색다르게 볼 수 있을거라 생각해 만들게 되었습니다.
프론트는 React와 TypeScript를 조합하였고 Styled Components, React Query를 사용하였습니다. 그 외에 이전에 배운 라이브러리들을 조금씩 연습겸 사용해 보았습니다. 백엔드는 MySQL과 NodeJS로 REST api를 만들어 PROJECTS 파트에 사용하고 있습니다. 프론트는 GitHub, 백엔드는 CloudType, DB는 RDS로 배포하고 있으며 서버같은 경우엔 무료 서비스이기 때문에 속도가 느립니다. 앞으로 공부하는 기술들을 이 프로젝트에 적용할 것 입니다.', 'I made it because I thought that people who see my project would be able to see it comfortably and specially without clicking on each link.
The front combines React and TypeScript and uses Styled Components and React Query. And I practiced and used the previously learned libraries bit by bit. The backend uses MySQL and NodeJS to create a REST API for the PROJECTS part. The frontend is in "Github", the backend is in "CloudType", the DB is in "RDS", and the server is slow because it is a free service. The researched technology will be applied to this project in the future.'),
('Netflix', 'NETFLIX CLONE', 'SOON', 'https://drive.google.com/uc?id=1QyK35jAoe_dzww0TJ1dxOpz6ZUbqzL7G', 'https://drive.google.com/uc?id=1Ck8k-w0JtMsGiXgDvtI4knRi88o1zLuS', 'Nomad Coders, SiHyun Baek', 'https://drive.google.com/uc?id=1c5q17PYME1hdeO4GwTo30qkq96IUw6Jm', 'https://drive.google.com/uc?id=13nS1RHwx8tFOdBSpMaq4ji-hVsFNA0e8', '', '', '["SourceSansPro"]', '["#e51013"]', '"nomadcoders"라는 강의 사이트에서 진행하는 코드 챌린지로 인해 제작되었습니다.React와 typescript를 조합하였고 그외에 Styled Components, framer-motion을 사용하였습니다. 해당 프로젝트는 "framer-motion"을 활용하기 위해 제작되었습니다. 안타깝게도 해당 프로젝트의 완성이 늦춰지고 있습니다. 사유는 1.데이터를 제공해주는 TMDB의 회원가입이 거부당하는 문제가 있습니다.(제보한지 1달이 넘었는데도 답변 안오고, 문제 해결도 안됨) 2.강의에 찍힌 넷플릭스의 홈페이지가 리메이크 되면서 클론코딩을 하기 어려워졌습니다.(리메이크전 홈페이지구조를 알 방법이 없다. 그렇다고 리메이크된 홈페이지를 클론코딩하자니 framer-motion을 사용할 필요가 없어 프로젝트 취지에 어긋남) 해당 문제들이 해결될 경우 프로젝트가 다시 진행될 예정입니다.', 'Due to a code challenge conducted on a lecture site called "nomadcoders" It was created. React and typescript were combined and other Styled Components, framer-motion were used. that project Built to take advantage of "framer-motion". Unfortunately Completion of the project is being delayed. Reason 1. Data The problem of being denied join the membership of TMDB provided There is. (It has been more than a month since I reported it, but there is no answer, and there is a problem 2. Netflix homepage taken in the lecture was remade It has become difficult to do clone coding. no method. So, lets clone-code the remade homepage? No need to use framer-motion, which goes against the purpose of the project) The project will resume once these issues are resolved.'),
('Kanban', 'KANBAN BOARD', '2023. 2. 1', 'https://drive.google.com/uc?id=1FotT44rTjAaAj2fdBmijAXGuD6h1NaWw', 'https://drive.google.com/uc?id=1Ck8k-w0JtMsGiXgDvtI4knRi88o1zLuS', 'Nomad Coders, SiHyun Baek', 'https://drive.google.com/uc?id=1GUVWTLD7To19JKV9TQeoud8uYazRGYqh', 'https://drive.google.com/uc?id=1L-CTea7Khtt9-use-lPTPAFd5IXbEshQ', 'https://drive.google.com/uc?id=1Ja4HL87kaM7u_ZwBokCL6Py5YXXwCDO_','https://drive.google.com/uc?id=1KcKsiYItgQsk4YwvmeIHOz_5BUH9Td_z' , '["Pretendard"]', '["#efefef", "#626262"]', '"nomadcoders"라는 강의 사이트에서 진행하는 코드 챌린지로 인해 제작되었습니다.React와 typescript를 조합하였고 그외에 Styled Components, Recoil, react beautiful dnd, react hook form을 사용하였습니다. 디자인은 "김주이(te6-in)" 님의 코드 챌린지를 참고했습니다. 해당 프로젝트는 "보드 옮기기", "새로운 보드 생성하기", "localStorage에 저장 및 로드하기"의 업데이트를 준비중입니다.', 'Due to a code challenge conducted on a lecture site called "nomadcoders" It was created. React and typescript were combined and other Styled Components, Recoil, react beautiful dnd, react hook form Used. The design is "Kim Joo-i (te6-in)"s code challenge Referenced. The project is "Move Board", "New Board" Update "Creating", "Saving and Loading to localStorage" Coming soon.'),
('Coin', 'CRYPTO TRACKER', '2023. 1. 11', 'https://drive.google.com/uc?id=1hZTgc9uxedlYmiStZssy5QWitCEx0_m3', 'https://drive.google.com/uc?id=1Ck8k-w0JtMsGiXgDvtI4knRi88o1zLuS', 'Nomad Coders, SiHyun Baek', 'https://drive.google.com/uc?id=1EQ5Ca_7caY88SNXWYhhZ8miQGMj4Wkv9', 'https://drive.google.com/uc?id=1-FAc4IfXaKQoQ2xtAg5I_OjxKLSpSw17', 'https://drive.google.com/uc?id=1plCG4LpJGz_xG1-nc359fR8W6-Hh1-5y', 'https://drive.google.com/uc?id=1fVNkE4GHtV_eZpSCNhiUrwkvVf69_SXY', '["Pretendard"]', '["#3b3b3b", "#222222"]', '"nomadcoders"라는 강의 사이트에서 진행하는 코드 챌린지로 인해 제작되었습니다.React와 typescript를 조합하였고 그외에 Styled Components, Recoil, React Query, apexcharts를 사용하였습니다.', 'Due to a code challenge conducted on a lecture site called "nomadcoders" it was created React and typescript combined and different styled Components, Recoil, React Query and apexcharts were used.'),
('Myapp', 'MY APP', '2022. 12. 25', 'https://drive.google.com/uc?id=1yaxtWZldLj4rAF7DA1QGEHeccm_Cwl7o', 'https://drive.google.com/uc?id=1DUof6Qrebo6gV8njscY6hnrufbAGlUZt', 'SiHyun Baek', 'https://drive.google.com/uc?id=1sZHtJNkE6UmtmK8F3r1jPDxw13JGXRWs', 'https://drive.google.com/uc?id=112Fh8tT6mrb1KEjOGOStHj2gl0zMaXCz', 'https://drive.google.com/uc?id=1L9O0GzTNPjvJ8KKNxIKfVvhuv_TaCk-X', 'https://drive.google.com/uc?id=1nUNmxtR7G7pJOjPCH39Q50VzURRL-3-a', '["Yasashii", "Exo2", "NanumSquareRound"]', '["#3e9d89", "#1e3d5c"]', '제가 처음 리액트를 배운것들을 활용해 보기 위해 제작 되었습니다. module css를 사용했으며 다른 특별한 라이브러리들은 사용하지 않은 순수 리액트 프로젝트입니다. 첫 Header 컴포넌트의 디자인은 프론트엔드 프리랜서 "henriheymans"님의 개인 사이트를 참고하여 제작했습니다. Contact 컴포넌트의 디자인은 "wanderful" 이라는 해외 숙소 소개 사이트를 참고하였습니다.', 'It is built to use what you first learned about React. I used module css and no other special libraries. This is a pure React project. The design of the first header component is as follows. Refer to the personal homepage of front-end freelancer "henriheymans" production. The design of the Contact component was referred to an overseas accommodation introduction site called "wanderful".'),
('Airbnb', 'AIRBNB CLONE', '2022. 9. 1', 'https://drive.google.com/uc?id=1xfdCP6LzN40oJ7XS4yCI9MkqgEPvTXux', 'https://drive.google.com/uc?id=1DUof6Qrebo6gV8njscY6hnrufbAGlUZt', 'SiHyun Baek, 4 others', 'https://drive.google.com/uc?id=1OXFL0jgQUXZ75eKD3xt0GrD9qJhdIBDU', 'https://drive.google.com/uc?id=1xZF2mAkPBA8aLG68UNFfyP2oyNE0HkEg', 'https://drive.google.com/uc?id=1MyEP0ZS-z8EDUg1T5SnYrJ0EDGXwoEEO', 'https://drive.google.com/uc?id=1DvIxLSAhgOFXMJm38AC13pPyatinwwLh','["GothamMedium", "Helvetica", "ProductSans", "Roboto"]', '["#ff385c"]', '국비지원학원에서 팀프로젝트로 만든 최초의 프로젝트 입니다. 팀은 총 5명으로 이루어 졌으며 1명 프론트 1명 백엔드로 짝을 이뤄 프로젝트를 진행했습니다. 나머지 1명은 DB를 관리 및 설계 하였습니다. 해당 프로젝트에는 백엔드는 JAVA, Spring, Spring Boot, Oracle Cloud를 사용 하였으며 프론트엔드는 주로 JQuery를 사용했고 javascript, Vue는 배운것을 활용해 보기위해 중간중간 사용하였습니다. 총 2달 동안 진행된 이 프로젝트는 1달은 설계 및 사이트분석을 하였고 나머지 1달은 개발을 진행하였습니다. 시간 관계상 html과 css 개발은 기존 에어비앤비의 코드를 가져와 사용하였고 기능, 기술구현만 직접 개발 하였습니다.', 'This is the first project made as a team project at a government-supported academy. The team consisted of 5 people, 1 front-end and 1 back-end. The other managed and designed the DB. did. The backend of the project is JAVA, Spring, Spring Boot, Oracle Cloud was used, and the front end mainly used JQuery. Javascript, Vue is a medium to use what you learn. used. This project, which took a total of two months, took one month to design and manufacture. We spent the rest of the month analyzing and developing the site. hour html and css development brought the existing Airbnb code as it is. I have used it and developed only the features and technology implementation myself.');
select * from projects_table;

create table visited_table (
visited_seq int not null auto_increment,
visited_awwwards_today int not null,
visited_awwwards_total int not null,
visited_airbnb_today int not null,
visited_airbnb_total int not null,
visited_coin_today int not null,
visited_coin_total int not null,
visited_kanban_today int not null,
visited_kanban_total int not null,
visited_myapp_today int not null,
visited_myapp_total int not null,
visited_netflix_today int not null,
visited_netflix_total int not null,
 primary key (visited_seq)
);

set global event_scheduler = ON;
show variables like 'event%'; 

create event reset_visited_table_today_columns
on schedule every 1 day
 starts current_timestamp  + interval 1 day + interval 9 hour
 on completion preserve
do 
 update visited_table set
  visited_awwwards_today = 0,
 visited_airbnb_today = 0,
 visited_coin_today = 0,
 visited_kanban_today = 0,
 visited_myapp_today = 0,
 visited_netflix_today = 0;
 
show events;

select now()

select * from visited_table;

drop event if exists reset_visited_table_today_columns;