import React, { useEffect, useState } from "react";

export default ({ enterValid, setValidateCaptcha }) => {
  const lengthOfCaptcha = 4;
  const SECURITY_CODE_LENGTH = lengthOfCaptcha;
  const [values, setValues] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [securityCode, setSecurityCode] = useState("");

  const generateSecurityCodeImage = () => {
    const code = Array.from(Array(SECURITY_CODE_LENGTH), () =>
      Math.floor(Math.random() * 36).toString(36)
    ).join("");

    const securityCodeImageElement =
      document.getElementById("securityCodeImage");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 80;
    canvas.height = 20;

    const imgElement = document.createElement("img");

    imgElement.addEventListener("load", loadImage);
    imgElement.src = `data:image/svg+xml,${encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml" style="display:block;"><span style="margin:auto;">${code}</span></div></foreignObject></svg>`
    )}`;

    function loadImage(e) {
      ctx.drawImage(e.target, 0, 0);
      securityCodeImageElement.src = canvas.toDataURL();
    }

    setSecurityCode(code);
  };

  const onChange = (event) => {
    const { value } = event.target;
    event.persist();
    setValues(value);
    console.log(value);
    setTimeout(() => {
      if (value !== securityCode) {
        if (value.length >= lengthOfCaptcha) {
          enterValid();
        }
        if (value.length < lengthOfCaptcha) {
          setValidateCaptcha(true);
        }
        // alert("Invalid security code!");
        // generateSecurityCodeImage();

        // return;
      } else {
        // alert("valid security code!");
        // generateSecurityCodeImage();
        setValidateCaptcha(false);
      }
    }, 1000);
  };

  useEffect(() => {
    generateSecurityCodeImage();
  }, []);

  return (
    <div className="relative w-auto h-auto m-auto">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
          padding: 14,
        }}
      >
        <div style={{ width: "150px" }}>
          <img
            id="securityCodeImage"
            alt="Security Code Challange"
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              background: "#f1f1f1",
              color: "#000000",
              paddingLeft: "2rem",
              paddingRight: "-100px",
            }}
          />
        </div>
        <div style={{ width: "100px" }}>
          <input
            id="securityCode"
            style={{
              flexGrow: 1,
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #545454",
              fontSize: "16px",
            }}
            type="text"
            name="securityCode"
            required
            onChange={onChange}
            value={values}
          />
        </div>
      </div>
    </div>
  );
};
