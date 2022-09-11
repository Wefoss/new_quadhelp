import React, { useEffect } from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { useField, useFormikContext } from "formik";
import { checkValidationInput } from "../../../actions/actionCreator";

const ImageUpload = ({ name, classes, checkValidation }) => {
  useEffect(() => {
    checkValidation({ isValid: false });
  }, [checkValidation]);

  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();
  const { uploadContainer, inputContainer, imgStyle } = classes;
  const onChange = (e) => {
    if (e.target.files[0]) {
      checkValidation({ isValid: true });
    }
    const node = window.document.getElementById("imagePreview");
    const file = e.target.files[0];
    const imageType = /image.*/;
    if (!file.type.match(imageType)) {
      e.target.value = "";
    } else {
      setFieldValue(field.name, e.currentTarget.files[0]);
      const reader = new FileReader();
      reader.onload = () => {
        node.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className={uploadContainer}>
      <div className={inputContainer}>
        <span>Support only images (*.png, *.gif, *.jpeg)</span>
        <input
          id="fileInput"
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={onChange}
          name={field}
        />
        <label htmlFor="fileInput">Chose file</label>
      </div>
      <img
        id="imagePreview"
        className={classNames({ [imgStyle]: !!field.value })}
        alt="user"
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  checkValidation: (data) => dispatch(checkValidationInput(data)),
});

export default connect(null, mapDispatchToProps)(ImageUpload);
