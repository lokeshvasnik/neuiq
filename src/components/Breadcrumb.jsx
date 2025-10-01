import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ breadcrumbData }) => {
  return (
    <div className="overflow-auto">
      <ul className="flex sm:gap-2 gap-[2px] items-center">
        {breadcrumbData?.map((breadcrumb, index) => {
          return (
            <React.Fragment key={index}>
              <li className="last-of-type:pointer-events-none text-sm last-of-type:font-bold whitespace-nowrap">
                <Link to={breadcrumb?.navigation}>{breadcrumb?.label}</Link>
              </li>
              {index + 1 !== breadcrumbData?.length && <li>{">"}</li>}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
