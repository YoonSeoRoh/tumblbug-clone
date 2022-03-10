import styled from "styled-components";
const Wrap = styled.div`
  width: 100%;
`;
const LinkWrap = styled.div`
  width: 100%;
  border-top: 1px solid rgb(239, 239, 239);
  display: flex;
  flex-direction: row;
`;
const InfoWrap = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(239, 239, 239);
`;
const DetailWrap = styled.div`
  width: 100%;
  background: rgb(240, 240, 240);
`;
const Links = styled.div`
  margin-left: 10%;
  display: flex;
  flex-direction: row;
`;
const LinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 15px 10px 10px;
`;
const Title = styled.span`
  color: rgb(61 61 61);
  font-weight: 600;
  text-align: left;
  margin: 10px 10px 10px 5px;
`;
const A = styled.a`
  margin: 5px;
  color: rgb(109 109 109);
  text-decoration: none;
  cursor: pointer;
  text-align: left;
`;
const App = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const AppBtn = styled.a`
  width: 140px;
  height: 30px;
  text-decoration: none;
  border-radius: 4px;
  background-color: rgb(240 240 240);
  color: rgb(109 109 109);
  cursor: pointer;
  margin: 5px;
  line-height: 30px;
  font-weight: 500;
`;
const Custom = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: 10%;
`;
const CustomText = styled.span`
  margin: 5px 10px 10px 5px;
  color: "rgb(109, 109, 109)";
`;
const CustomBtn = styled.button`
  width: 180px;
  height: 35px;
  border-radius: 4px;
  border: 1px solid rgb(228, 228, 228);
  background-color: transparent;
  font-weight: 500;
  color: rgb(61 61 61);
  cursor: pointer;
`;
function Footer() {
  return (
    <Wrap>
      <LinkWrap>
        <Links>
          <LinkDiv>
            <Title>텀블벅</Title>
            <A href="https://tumblbug.com/notices">공지사항</A>
            <A href="https://tumblbug-assets.s3.ap-northeast-1.amazonaws.com/service_pdf/%E1%84%90%E1%85%A5%E1%86%B7%E1%84%87%E1%85%B3%E1%86%AF%E1%84%87%E1%85%A5%E1%86%A8+%E1%84%89%E1%85%A5%E1%84%87%E1%85%B5%E1%84%89%E1%85%B3+%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5_211215.pdf">
              서비스 소개
            </A>
            <A href="https://www.rocketpunch.com/companies/tumblbug/jobs">
              채용
            </A>
            <A href="https://tumblbug.com/year2021">2021 연말결산</A>
          </LinkDiv>
          <LinkDiv>
            <Title>이용안내</Title>
            <A href="https://help.tumblbug.com/hc/ko">헬프 센터</A>
            <A href="https://tumblbug.com/onboarding">첫 후원 가이드</A>
            <A href="https://creator.tumblbug.com/?v=1">창작자 가이드</A>
            <A href="https://creator.tumblbug.com/partnership/intro">
              제휴·협력
            </A>
          </LinkDiv>
          <LinkDiv>
            <Title>정책</Title>
            <A href="https://help.tumblbug.com/hc/ko/articles/360051940533?v=1">
              이용약관
            </A>
            <A href="https://help.tumblbug.com/hc/ko/articles/360051944893">
              개인정보 처리방침
            </A>
            <A href="https://help.tumblbug.com/hc/ko/articles/360051944893">
              프로젝트 심사기준
            </A>
          </LinkDiv>
        </Links>
        <App>
          <Title>App</Title>
          <AppBtn href="https://play.google.com/store/apps/details?id=com.tumblbug.app&_branch_match_id=1015570889498598110&utm_source=tumblbug&utm_campaign=appstore&utm_medium=footer&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLynNTcpJKk3XSywo0MvJzMvWT%2FSKjLBw9vesSE8CAHiTKfQlAAAA">
            안드로이드
          </AppBtn>
          <AppBtn href="https://apps.apple.com/us/app/%ED%85%80%EB%B8%94%EB%B2%85-tumblbug/id1544593286?_branch_match_id=1015570889498598110&utm_source=tumblbug&utm_campaign=appstore&utm_medium=footer&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLynNTcpJKk3XSywo0MvJzMvWL%2FNwTnXOLPesSE8CAIhNPoklAAAA">
            iOS
          </AppBtn>
        </App>
        <Custom>
          <Title>고객지원</Title>
          <CustomText>평일 10:00 ~ 17:00 (12:00 ~14:00 제외)</CustomText>
          <CustomBtn>텀블벅에 문의</CustomBtn>
        </Custom>
      </LinkWrap>
      <InfoWrap></InfoWrap>
      <DetailWrap></DetailWrap>
    </Wrap>
  );
}

export default Footer;
