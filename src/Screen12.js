import React from "react";
import "./Screen12.css";

export default function Screen12() {
  return (
    <div
      style={{
        position: "absolute",
        width: "310px",
        height: "295px",
        background: " #FFFFFF",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
        top: "120px",
        left: "30px",
        borderRadius: "10px",
      }}
    >
      <div style={{ flexDirectio: "row" }}>
        <div
          style={{
            position: "absolute",
            top: "15px",
            left: "20px",
            width: "106.03px",
            height: "22px",

            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "22px",

            color: "#414047",
          }}
        >
          Make an Offer
        </div>
        <div
          style={{
            position: "absolute",
            top: "15px",
            right: "20px",
            width: " 16.16px",
            height: "16px",
            fontFamily: "Manrope",
            fontStyle: "normal",
          }}
        >
          x
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "45px",
          left: "19.19px",
          width: "67.65px",
          height: "20px",
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "15px",
          lineHeight: "20px",
          color: "#885FFF",
        }}
      >
        #343849
      </div>
      <div
        style={{
          position: "absolute",
          top: "85px",
          left: "19.19px",
          width: "53.52px",
          height: "18px",
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "18px",
        }}
      >
        Amount
      </div>
      <div
        style={{
          position: "absolute",
          top: "115px",
          left: "18.18px",
          width: "276.68px",
          height: "45px",
          border: "1px solid gray",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "13px",
            left: "16.16px",
            width: "118.14px",
            height: "22px",
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "18px",
            letterSpacing: "-0.154px",
            color: "#6F6E73",
          }}
        >
          0.0000
        </div>
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "197.92px",
            right: "17.17px",
            width: " 61.6px",
            height: "41px",
            alignItems: "center",
          }}
        >
          NEAR
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          left: "19.19px",
          top: "181px",
          width: "53.52px",
          height: "19px",
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "19px",
          textAlign: "center",
          letterSpacing: "-0.154px",
          color: "#6F6E73",
        }}
      >
        Balance
      </div>
      <div
        style={{
          position: "absolute",
          left: "210px",
          top: "181px",
          width: "83.81px",
          height: "19px",
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "14px",
          lineHeight: "19px",
          textAlign: "center",
          letterSpacing: " -0.154px",
          color: "#6F6E73",
        }}
      >
        0.3748 NEAR
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "0px 10px",
          position: "absolute",
          left: "18.18px",
          top: "226px",
          width: " 253.65px",
          height: "40px",
          background: "#885FFF",
          borderRadius: "10px",
        }}
      >
        <img
          style={{ height: "24px", width: "24px" }}
          src="https://cdn.animaapp.com/projects/61dc4531229651972093c987/releases/61e1749a28216c88160db45c/img/icon-offer@2x.svg"
        />
        <div
          style={{
            fontFamily: "Manrope",
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "22px",
            textAlign: "center",
            letterSpacing: "-0.408px",
            color: "#FFF",
            position: "absolute",
            left: "100px",
          }}
        >
          Make Offer
        </div>
      </div>
    </div>
  );
}
