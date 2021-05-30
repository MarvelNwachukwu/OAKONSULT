import moment from "moment";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import Spacing from "../Spacing/Spacing";
import placeholder from "../../assetz/images/placeholder.png";

import "./styles.scss";
import { useHistory, useLocation } from "react-router";

const TagOverviewPostPreview = ({
  data,
  data: { title, hook, created_at, main_tag, tumbnail },
}) => {
  const location = useLocation();
  const pathname = location.pathname;
  const history = useHistory();
  return (
    <div className={`blog-overview-post-preview-wrapper`}>
      <div className={`blog-overview-post-preview`}>
        <div
          className={`flex-center-column tumbnail`}
          style={{
            backgroundImage: `linear-gradient(#0aa7ff3a, #0aa5ff3a), url(${placeholder})`,
          }}
        >
          <CustomButton
            label={main_tag}
            className={`${
              main_tag === "parents"
                ? "for-parents-button"
                : main_tag === "siblings"
                ? "for-siblings-button"
                : "for-carers-button"
            } tag-button`}
          />
          <div className={`title-container`}>
            <h1
              className={`title`}
              onClick={() =>
                history.push(
                  `${pathname}/${title.split(" ").join("-").toLowerCase()}`
                )
              }
            >
              {title}
            </h1>
            <Spacing height={`1em`} />
            <span className={`time`}>{moment().fromNow(created_at)}</span>
          </div>
        </div>
        <Spacing height={`1em`} />
        <p className={`hook`}>{hook}</p>
      </div>
    </div>
  );
};

export default TagOverviewPostPreview;
