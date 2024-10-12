/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { Container } from "../../styles/styles";
import Breadcrumb from "../../components/common/Breadcrumb";
import { UserContent, UserDashboardWrapper } from "../../styles/user";
import UserMenu from "../../components/user/UserMenu";
import Title from "../../components/common/Title";
import { FormElement, Input, Textarea } from "../../styles/form";
import { BaseButtonGreen, BaseButtonWhitesmoke } from "../../styles/button";
import { defaultTheme } from "../../styles/themes/default";

const AddressScreenWrapper = styled.main`
box-shadow: rgba(50, 50, 93, 0.15) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.1) 0px 30px 60px -30px;
       padding-left: 16px;
  .form-elem-control {
    padding-left: 16px;
    border: 1px solid ${defaultTheme.color_platinum};

    &:focus {
      border-color: ${defaultTheme.color_silver};
    }
  }
`;

/* const breadcrumbItems = [
  { label: "Home", link: "/" },
  { label: "Account", link: "/account" },
  { label: "Add Address", link: "/account/add" },
]; */

const AddressScreen = () => {
  return (
    <AddressScreenWrapper className="page-py-spacing">
      <Container>
          <UserContent>
            
            <form>
              <div className="form-wrapper">
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    First Name*
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="First Name"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Last Name*
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="Last Name"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Contry / Region
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="Country/Region"
                  />
                </FormElement>
                
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Address Email*
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="Address email"
                    disabled
                    readOnly
                  />
                </FormElement>
               
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    City*
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="Town / City"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Phone*
                  </label>
                  <Input
                    type="text"
                    className="form-elem-control"
                    placeholder="Phone"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                   Level of study
                  </label>
                  <select className="form-elem-control" name="" id="">
                    <option value="bac">Bachelor's degree</option>
                    <option value="lic">License </option>
                    <option value="mas">Master's degree </option>
                    <option value="phd">PhD    </option>
                  </select>
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Sexe*
                  </label>
                  <select className="form-elem-control" name="" id="">
                    <option value="m">Male</option>
                    <option value="f">Female </option>
                  </select>
                </FormElement>
             
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Date of birth*
                  </label>
                  <Input
                    type="date"
                    className="form-elem-control"
                    placeholder="Age"
                  />
                </FormElement>
                <FormElement>
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Biography
                  </label>
                  <Textarea
                    className="form-elem-control"
                    placeholder="Biography"
                    name=""
                    id=""
                  ></Textarea>
                </FormElement>
              </div>
           
              <FormElement className="form-check-elem flex items-center">
               
               
              </FormElement>
              <div className="form-btns flex">
                <BaseButtonGreen type="submit">Save</BaseButtonGreen>
                
              </div>
            </form>
          </UserContent>
      
      </Container>
    </AddressScreenWrapper>
  );
};

export default AddressScreen;
