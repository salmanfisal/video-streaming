import React from "react";
import styled from "styled-components";
function Login() {
  return (
    <>
      <Container>
        <Content>
          <CTA>
            <CTALogoone src="images/cta-logo-one.svg" alt="" />
            <SignUp> GET IT ALL THERE</SignUp>
            <Description>
              Get Premier Access to Raya and the Last Dragon for an additional
              fee with a Disney+ subscription.As of 03/26/21, the price of the
              Disney+ and The Disney Bundle will Increase by $1.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
          </CTA>
          {/* <BgImage /> */}
        </Content>
      </Container>
    </>
  );
}
const Container = styled.section`
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10vw;
  box-sizing: border-box;
  position: relative;
  min-height: 100vh;
`;
// const BgImage = styled.div`
//   background-image: url("/images/login-background.jpg");
//   height: 100%;
//   background-position: top;
//   position: absolute;
//   background-size: cover;
//   background-repeat: no-repeat;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: -1;
// `;
const CTA = styled.div`
    margin-bottom:2vw;
    max-width:650px;
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
    justify-content:center;
    margin-top:0;
    align-items:center; 
    margin-left:auto;
    margin-right:auto;
    transition:-timing-function:ease-out;
    transition:opacity 0.2s;
    width:100%
 `;
const CTALogoone = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16.5px 0;
  letter-spacing: 1.5px;
  margin-bottom: 12px;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid transparent;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 15px;
  margin: 0 0 24px;
  line-height: 1.5;
  width: 90%;
  letter-spacing: 1.5px;
`;
const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%; 
`;
export default Login;
