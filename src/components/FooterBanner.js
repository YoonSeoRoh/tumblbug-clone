import styled from "styled-components";
import imgFirst from "../images/footerimg2.png";
import titleFirst from "../images/footerimg3.png";
import imgSecond from "../images/footerimg1.png";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const FirstBanner = styled.div`
  width: 1160px;
  height: 162px;
  background-color: #ceff00;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const FirstImg = styled.div`
  background-image: url(${imgFirst});
  background-repeat: no-repeat;
  background-size: contain;
  background-size: 245px 122px;
  background-position: left;
  border-right: solid 1px black;
  margin-left: 10px;
  width: 300px;
  height: 122px;
`;
const FirstTitle = styled.div`
  background-image: url(${titleFirst});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-size: 150px 50px;
  border-right: solid 1px black;
  width: 200px;
  height: 122px;
`;
const FirstText = styled.div`
  border-right: solid 1px black;
  width: 500px;
  height: 122px;
  display: table;
`;
const Text = styled.p`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`;
const FirstBtn = styled.button`
  width: 103px;
  height: 44px;
  text-align: center;
  background: rgb(13, 13, 13);
  color: rgb(255, 255, 255);
  border-radius: 5px;
  border: none;
  margin-left: 10px;
`;
const SecondBanner = styled.div`
  width: 1160px;
  height: 162px;
  background-color: rgb(255, 90, 90);
  margin-top: 30px;
  margin-bottom: 10%;
  position: relative;
`;
const SecondTitle = styled.h2`
  color: white;
  font-size: 15px;
  margin-left: 5%;
  top: 10%;
  position: absolute;
  text-align: left;
`;
const SecondText = styled.p`
  color: white;
  font-size: 25px;
  font-weight: 800;
  margin-left: 5%;
  top: 25%;
  position: absolute;
  text-align: left;
`;
const SecondImg = styled.div`
  background-image: url(${imgSecond});
  background-size: contain;
  width: 631px;
  height: 161px;
  position: absolute;
  left: 45%;
`;
function FooterBanner() {
  return (
    <Wrap>
      <FirstBanner>
        <FirstImg />
        <FirstTitle />
        <FirstText>
          <Text>
            불가능의 0%가 아닌 무한한 가능성의 0%에 관한
            <br />
            이야기를 매주 토요일 아침에 만나보세요.
          </Text>
        </FirstText>
        <FirstBtn>구독하기</FirstBtn>
      </FirstBanner>
      <SecondBanner>
        <SecondTitle>좋은 아이디어를 가지고 있으신가요?</SecondTitle>
        <SecondText>
          텀블벅과 함께 마음 속<br />
          프로젝트를 실현하세요
        </SecondText>
        <SecondImg />
      </SecondBanner>
    </Wrap>
  );
}

export default FooterBanner;
