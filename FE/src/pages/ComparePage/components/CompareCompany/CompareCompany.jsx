import React from "react";
import style from "./CompareCompany.module.scss";

function CompareCompany({ compareCompanies, removeCompareCompany }) {
  return (
    <>
      {compareCompanies.length > 0 ? (
        compareCompanies.map((company) => (
          <div key={company.id} className={style.companyCard}>
            <button
              onClick={() => removeCompareCompany(company.id)}
              className={style.minusButton}
            >
              <img src="/images/icons/ic_minus.png" alt="minus" />
            </button>
            <img
              src={`/images/companies/${company.name}.png`}
              alt="company"
              className={style.companyImg}
            />
            <p className={style.companyName}>{company.name}</p>
            <p className={style.companyCategory}>{company.category}</p>
          </div>
        ))
      ) : (
        <p className={style.noAddCompany}>
          아직 추가한 기업이 없어요,
          <br />
          버튼을 눌러 기업을 추가해보세요!
        </p>
      )}
    </>
  );
}

export default CompareCompany;
