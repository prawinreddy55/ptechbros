import React, { useEffect } from "react";

const ComingSoon = () => {
  useEffect(() => {
    const o = document.querySelector(".hop");
    o.style.animation = "hop 100s infinite alternate";
  }, []);

  return (
    <div className="container">
      <div className="text">
        Com<span className="hop">i</span>ng Soon...!
      </div>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: black;
        }
        
        .text {
          font-size: 48px;
          color: white;
          animation: hop 0.8s infinite alternate;
        }
        
        @keyframes hop {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-40px);
          }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
