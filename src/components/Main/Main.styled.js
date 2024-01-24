import styled from "@emotion/styled";

export const Wrapper = styled.div`
   /* margin: 0; */
   padding: 0;
   width: 100%;
   height: 100%;
   margin: 0 auto;
`;

export const ImageSlide = styled.div`
   width: 100%;
   height: 100%;
   position: relative;
   overflow: hidden;
   display: flex;
   animation: slideAnimation 9s infinite; 
   transition: transform 0.3s ease;
   touch-action: pan-y; 
`;

export const SlideImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   cursor: pointer;
   transition: filter 0.3s ease;

   &:hover {
      filter: brightness(0.9);
   }
`;

export const Section1 = styled.div`
   width: 100%;
   padding: 100px 0px;
   padding: 50px 0px 50px 0;
`;

export const Container = styled.div`
   width: 1200px;
   height: 400px;
   background: #EFEFEF;
   margin: 0 auto;
   border-radius: 10px;
   display: flex;
   justify-content: left;
   align-items: center;
   padding-left: 70px;
`;

export const Title = styled.h1`
   font-size: 20px;
   margin: -60px 0 0 80px;
   cursor: default;
`;

export const Text1 = styled.p`
   font-size: 15px;
   cursor: default;
`;

export const Text2 = styled.p`
   font-size: 13px;
   cursor: default;
`;

export const MoreBtn = styled.img`
   width: 80px;
   bottom: 20px;
   right: 20px;
   cursor: pointer;
`;

export const Section2 = styled.div`
   width: 100%;
   padding: 80px 0px;
`;



export const SlideBtn = styled.img`
   position: absolute;
   width: 200px;
   height: auto;
   bottom: 25px;
   right: 20px;
   cursor: pointer;
`;


/* section2 -> icon */
export const Icontainer = styled.div`
   width: 1200px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
`;

export const IconContainer = styled.div`
   text-align: center;

`;
/* 핵심기술 */
export const Tech = styled.img`
   width: 50px;
   cursor: pointer;
   margin-bottom: 25px;
   &:hover {
      transform: scale(1.05); 
   }
`;

export const TectTitle = styled.div`
   cursor: pointer;
`;


/* 논문 */
export const Thesis = styled.img`
   width: 50px;
   cursor: pointer;
   margin-bottom: 25px;
   &:hover {
      transform: scale(1.05); 
   }
`;
export const ThesisTitle = styled.div`
   cursor: pointer;
`;

/* 인증현황 */
export const Authentication = styled.img`
   width: 50px;
   cursor: pointer;
   margin-bottom: 25px;
   &:hover {
      transform: scale(1.05); 
   }
`;

export const AuthenticationTitle = styled.div`
   cursor: pointer;
`;

/* 연구용역서비스 */
export const Research = styled.img`
   width: 50px;
   cursor: pointer;
   margin-bottom: 25px;
   &:hover {
      transform: scale(1.05); 
   }
`;

export const ResearchTitle = styled.div`
   cursor: pointer;
`;

/* 공지사항 */
export const Notice = styled.img`
   width: 50px;
   cursor: pointer;
   margin-bottom: 25px;
   &:hover {
      transform: scale(1.05); 
   }
`;

export const NoticeTitle = styled.div`
   cursor: pointer;
`;

/* 오시는길 */
export const Map = styled.img`
   width: 50px;
   cursor: pointer;
   margin-bottom: 25px;
   &:hover {
      transform: scale(1.05); 
   }

`;

export const MapTitle = styled.div`
   cursor: pointer;
`;

export const Section3 = styled.div`
   width: 1200px;
   padding: 70px 40px;
   display: flex;
   justify-content: space-between;
   margin: 0 auto;
`;

/* Left */
export const Section3Left = styled.div`
   width: calc(50% - 20px);
   justify-content: center;
   align-items: center;
   box-sizing: border-box;
`;

export const LeftContent = styled.div`
   text-align: center;
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Section3Right = styled.div`
   width: calc(50% - 20px);
   display: flex;
   justify-content: center;
   align-items: center;
   box-sizing: border-box;
`;

export const Medical = styled.img`
   width: 270px;
   height: 220px;
   margin-right: 30px;
   margin-bottom: 10px;
`;

export const Cosmetic = styled.img`
   width: 270px;
   height: 220px;
   margin-bottom: 10px;
`;

export const RightContent = styled.div`
   text-align: center;
   color: #fff;
   text-align: center;
   color: #fff;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
`;

export const Album = styled.img`
   width: 570px;
   height: 450px;
`;


/* 게시판 뿌리기 */
export const TextContainer = styled.div`
   width: 570px;
   height: 220px;
   border-radius: 10px;
   border: 1px solid #D9D9D9;
   background: #FFF;
   margin-right: 15px;
   display: flex;
   position: relative;
   text-align: center;
`;

export const Text = styled.div`
   text-align: center;
   font-size: 19px;
   font-weight: 900;
   margin: 3px 0 0 230px;
`;

/* 보도자료 */
/* 나중에 테두리 지우기 */

export const PressContainer = styled.div`
   position: absolute;
   width: 270px;
   height: 180px;
   border: 1px solid #D9D9D9;
   border-radius: 10px;
   margin-top: 38px;

`;

export const Press = styled.div``;

/* 행사정보 */
/* 나중에 테두리 지우기 */
export const EventContainer = styled.div`
   position: absolute;
   position: absolute;
   width: 270px;
   height: 180px;
   border: 1px solid #D9D9D9;
   margin-left: 300px;
   border-radius: 10px;
   margin-top: 38px;
`;

export const Event = styled.div``;