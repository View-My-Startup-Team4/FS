import styles from "./CompanyDetailPage.module.scss";
import Patition from "../../components/CompanyDetailPage/Partition/Partition";
import Description from "../../components/CompanyDetailPage/Description/Description";
import LogoAndName from "../../components/CompanyDetailPage/LogoAndName/LogoAndName";
import InvestHeader from "../../components/CompanyDetailPage/InvestHeader/InvestHeader";
import InvestMain from "../../components/CompanyDetailPage/InvestMain/InvestMain";
import PaseNationButton from "../../components/CompanyDetailPage/PaseNationButton/PaseNationButton";
import companydetail from "./data/companydetail.json";
import invest from "./data/invest.json";
import logo from "../../../public/images/companies/네이버.png";

export function CompanyDetailPage() {
  const companydetaildata = companydetail;
  const investdatas = invest;

  return (
    <div className={styles.CompanyDetailPage}>
      <div className={styles.CompanyDetailDiv}>
        <LogoAndName
          imgSrc={logo}
          companyName={companydetaildata.name}
          companyCategory={companydetaildata.category}
        />

        <div className={styles.companyDetailThreePart}>
          <Patition
            colum={"누적 투자 금액"}
            value={companydetaildata.totalInvestment}
          />
          <Patition colum={"매출액"} value={companydetaildata.totalProfit} />
          <Patition
            colum={"고용 인원"}
            value={companydetaildata.employeeCount + " 명"}
          />
        </div>

        <Description text={companydetaildata.description} />
      </div>

      <div className={styles.ViewMyStartUpDiv}>
        <InvestHeader />
        <InvestMain
          investAmount={companydetaildata.view_invest_amount}
          investData={investdatas}
        />

        <div className={styles.PaseNationDiv}>
          <PaseNationButton value={"<"} />
          <PaseNationButton value={"1"} />
          <PaseNationButton value={"2"} />
          <PaseNationButton value={"3"} />
          <PaseNationButton value={"4"} />
          <PaseNationButton value={"5"} />
          <PaseNationButton value={">"} />
        </div>
      </div>
    </div>
  );
}

export default CompanyDetailPage;
