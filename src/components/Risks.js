import React from "react";
import { useLocation } from "react-router-dom";
import "../css/login.css";
const Risks = () => {
  let location = useLocation();
  const { risksInfo } = location.state;
  console.log("riskinfo::", risksInfo);
  return (
    <>
      <div className="risks__main">
        <h1>Showing All Associated Risks</h1>
        <div className="product__card__main row">
          {risksInfo &&
            risksInfo.allowedRiskAccess.map((risk, index) => (
              <div className="col-sm-4" key={index}>
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{risk.name}</h5>
                    <p className="card-text">{risk.description}</p>
                    <button
                      type="submit"
                      className="btn btn-primary btn-sm order__btn"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Risks;
