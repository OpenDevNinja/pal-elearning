import styled from "styled-components";
import { Input } from "../../styles/form";
import { PropTypes } from "prop-types";
import { useState } from "react";
import { defaultTheme } from "../../styles/themes/default";

const PasswordToggleButton = styled.button`
  position: absolute;
  bottom: 100%;
  right: 0;

  .pwd-toggle-text {
    padding-left: 5px;
  }

  
`;
 const FormElement = styled.div`
  margin-bottom: 16px;

  .form-elem-block {
    position: relative;
  }

  .form-elem-label {
    font-weight: 500;
    display: block;
    margin-bottom: 2px;
  }

  .form-elem-control {
    height: 40px;
    border: 1px solid ${defaultTheme.color_platinum};
    width: 100%;
    border-radius: 5px;
    padding: 2px 14px;
    margin: 4px 0;
    transition: ${defaultTheme.default_transition};

    &:focus {
      border-color: ${defaultTheme.color_sea_green};
    }
  }

  .form-elem-error {
    color: ${defaultTheme.color_red};
    font-size: 13px;
  }

  .form-elem-text {
    display: block;
    font-size: 13px;
    color: ${defaultTheme.color_gray};
  }

  a.form-elem-text {
    &:hover {
      color: ${defaultTheme.color_sea_green};
    }
  }
`;


const PasswordInput = ({ fieldName, name, errorMsg = "" }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormElement>
      <label htmlFor="" className="form-elem-label">
        {fieldName}
      </label>
      <div className="form-elem-block">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder=""
          name={name}
          className="form-elem-control"
        />

        <PasswordToggleButton
          type="button"
          className="pwd-value-toggle flex items-center"
          onClick={togglePassword}
        >
          {showPassword ? (
            <>
              <i className="bi bi-eye-fill"></i>
              <span className="pwd-toggle-text text-sm">Hide</span>
            </>
          ) : (
            <>
              <i className="bi bi-eye-slash-fill"></i>
              <span className="pwd-toggle-text text-sm">Show</span>
            </>
          )}
        </PasswordToggleButton>
      </div>
      <span className="form-elem-error text-end font-medium">{errorMsg}</span>
    </FormElement>
  );
};

export default PasswordInput;

PasswordInput.propTypes = {
  fieldName: PropTypes.string,
  name: PropTypes.string,
  errorMsg: PropTypes.string,
};
