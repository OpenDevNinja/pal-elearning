import styled from "styled-components";
import {  FormTitle } from "../../styles/form_grid";
import { Container } from "../../styles/styles";
import { staticImages } from "../../utils/images";
import PasswordInput from "../../components/auth/PasswordInput";
import { BaseButtonBlack } from "../../styles/button";
import Breadcrumb from "../../components/common/Breadcrumb";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import { breakpoints, defaultTheme } from "../../styles/themes/default";
import UserMenu from "../../components/user/UserMenu";
const ChangePwdScreenWrapper = styled.section`
`;

 const FormGridWrapper = styled.div`
  max-width: 700px;
  margin: 15px 0px;

  @media (max-width: ${breakpoints.lg}) {
    margin: 40px auto;
  }

  @media (max-width: ${breakpoints.lg}) {
    margin: 30px auto;
  }

  .form-grid-content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    box-shadow: rgba(50, 50, 93, 0.15) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;
    min-height: 520px;

    @media (max-width: ${breakpoints.md}) {
      grid-template-columns: 100%;
    }
  }

  .form-grid-left {
    overflow: hidden;
    position: relative;

    img {
      position: absolute;
      object-position: top;
      object-fit: cover;
     display:none
    

    }

    @media (max-width: ${breakpoints.md}) {
      display: none;
    }
  }

  .form-grid-right {
    padding: 48px;
   /*  background-color: ${defaultTheme.color_white}; */

    @media (max-width: ${breakpoints.lg}) {
      padding: 24px;
    }

    @media (max-width: ${breakpoints.sm}) {
      padding: 16px;
    }
  }

  // form submit button
  .form-submit-btn {
    width: 100%;
    height: 40px;
    margin-top: 16px;
  }

  .account-rel-text {
    margin-top: 10px;
    a {
      text-decoration: underline;
      margin-left: 8px;
    }
  }
`;

const AccountScreenWrapper = styled.main`
  .address-list {
    margin-top: 20px;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;

    @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .address-item {
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 25px;
    row-gap: 8px;
  }

  .address-tags {
    gap: 12px;

    li {
      height: 28px;
      border-radius: 8px;
      padding: 2px 12px;
      background-color: ${defaultTheme.color_whitesmoke};
    }
  }

  .address-btns {
    margin-top: 12px;
    .btn-separator {
      width: 1px;
      border-radius: 50px;
      background: ${defaultTheme.color_platinum};
      margin: 0 10px;
    }
  }
`;

const breadcrumbItems = [
  {
    label: "Home",
    link: "/",
  },
  { label: "Account", link: "/account" },
];

const ChangePasswordScreen = () => {
  return (
    <AccountScreenWrapper className="page-py-spacing">
      <Container>
        <Breadcrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu />
          <UserContent>
           

            <div>
              <ChangePwdScreenWrapper className="">
                <FormGridWrapper>
                  <Container>
                    <div className="form-grid-content">
                      <div className="form-grid-left">
                        <img
                          src={staticImages.form_img5}
                          className="object-fit-cover"
                          alt=""
                        />
                      </div>
                      <div className="form-grid-right">
                        <FormTitle>
                          <h3>Create New Password</h3>
                          <p>
                            Your new password mst be different from previous used
                            passwords.
                          </p>
                        </FormTitle>
                        <form>
                          <PasswordInput fieldName="Password *" name="password" />

                          <PasswordInput fieldName="New Password *" name="password" />
                          <PasswordInput
                            fieldName="Confirm Password *"
                            name="confirm_password"
                            errorMsg="New password and confirm password do not match"
                          />
                          <BaseButtonBlack type="submit" className="form-submit-btn">
                            Reset Password
                          </BaseButtonBlack>
                        </form>
                      </div>
                    </div>
                  </Container>
                </FormGridWrapper>
              </ChangePwdScreenWrapper>

            </div>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </AccountScreenWrapper>
  );
};

export default ChangePasswordScreen;
