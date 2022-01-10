import react from "react";

function App() {
  return (
    <div
      style={{
        width: "1280px",
        alignContent: "center",
        height: "851px",
        background: "gray",
      }}
    >
      <h2
        style={{
          width: "643px",
          height: "109px",
          marginTop: "60px",
          marginLeft: "318px",
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "90px",
          lineHeight: "109px",
          textAlign: "center",
          color: "#000000",
        }}
      >
        Figma to React
      </h2>
      <div style={{ display: "flex" }}>
        <p
          style={{
            width: "216px",
            height: "48px",
            marginTop: "17px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "40px",
            lineHeight: "48px",
            textAlign: "right",
            marginLeft: "167px",
            color: "#000000",
          }}
        >
          Figma Url :
        </p>
        <div
          style={{
            background: "#FFFFFF",
            marginLeft: "10px",
            width: "719px",
            height: "83px",
            border: "2px solid #888888",
            boxSizing: "border-box",
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "8px",
          }}
        >
          <p
            style={{
              width: "1090px",
              height: "48px",
              marginTop: "17px",
              marginLeft: "20px",
              marginBottom: "18px",
              marginRight: "391px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "40px",
              lineHeight: "48px",
            }}
          >
            https://wwww.figma.com
          </p>
        </div>
      </div>
      <button
        style={{
          marginTop: "25px",
          marginLeft: "417px",
          marginRight: "413px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "36px 135px",
          width: "450px",
          height: "120px",
          background: "#2D9CDB",
          borderRadius: "16px",
          color: "#fff",
          fontWeight: 600,
        }}
      >
        Generate
      </button>
      <div style={{ display: "flex", marginTop: "76px", marginLeft: "144px" }}>
        <button
          style={{
            background: "#EEEEEE",
            border: "2px solid #000000",
            boxSizing: "border-box",
            borderRadius: "8px",
            width: "330px",
            height: "48px",
          }}
        >
          React Web
        </button>
        <button
          style={{
            background: "#666666",
            border: "2px solid #000000",
            boxSizing: "border-box",
            borderRadius: "8px",
            width: "330px",
            height: "48px",
            color: "#fff",
          }}
        >
          React Native
        </button>
        <button
          style={{
            background: "#EEEEEE",
            border: "2px solid #000000",
            boxSizing: "border-box",
            borderRadius: "8px",
            width: "330px",
            height: "48px",
            color: "rgba(0, 0, 0, 0.3)",
          }}
        >
          Other
        </button>
      </div>
    </div>
  );
}

export default App;
