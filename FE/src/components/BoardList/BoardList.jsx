import { useNavigate } from "react-router-dom";
import ChangeToNumber from "../../components/CompanyDetailPage/ChangeToNumber/ChangeToNumber";
import getCompanyImage from "../GetCompanyImage/GetCompanyImage";

export default function BoardList({
  flex,
  companies,
  fields,
  unitSuffixes = [],
}) {
  const navigate = useNavigate();

  const handleDetail = (companyId) => {
    navigate(`/detail/${companyId}`);
  };

  return (
    <div className="rounded-[4px] overflow-hidden">
      <ul className="[&_*]:text-gray100 [&_*]:text-sm [&>li]:bg-black300">
        {companies?.map((company, index) => {
          return (
            <li
              key={index}
              className="flex items-center  min-h-16 border-b last:border-b-0  hover:cursor-pointer hover:bg-[#2a2a2a] "
              style={{ borderBottomColor: "#4B4B4B" }}
              onClick={() => handleDetail(company.id)} // TODO: 가능하면 Link tag, a tag를 활용하자
            >
              <p
                className={`${flex[0]} flex items-center justify-center font-normal`}
              >
                {company.rank}위
              </p>

              {fields.map((field, idx) => {
                const isSecondOrThirdColumn = idx === 0 || idx === 1;
                let value = company[field];
                // TODO: UI를 그려야 하는 곳에 Business 로직 블록이 들어가는 것은 지양하자. 가독성에도 문제 있고 유지보수에 어려움이 있다.

                if (
                  [
                    "viewTotalInvestAmount",
                    "totalInvestment",
                    "totalProfit",
                  ].includes(field)
                ) {
                  value = ChangeToNumber(value);
                }

                return (
                  <p
                    key={idx}
                    className={`
        ${isSecondOrThirdColumn ? "text-left" : "text-center"}
        ${flex[idx + 1]}
        ${idx === 0 ? "flex items-center gap-x-3 " : ""}
        font-normal
        line-clamp-2
        overflow-hidden
        text-ellipsis
      `}
                  >
                    {idx === 0 && (
                      <img
                        src={getCompanyImage(company[field])}
                        alt="기업이미지"
                        className="size-8 rounded-full object-cover ml-4"
                      />
                    )}
                    {value}
                    {unitSuffixes[idx]}
                  </p>
                );
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
