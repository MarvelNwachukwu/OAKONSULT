import moment from "moment";
import React from "react";
import { useHistory, useLocation } from "react-router";
import CustomButton from "../CustomButton/CustomButton";
import Spacing from "../Spacing/Spacing";
import placeholder from "../../assetz/images/placeholder.png";

import "./styles.scss";
import { colors } from "../../constants/Colors";

const BlogOverviewPostPreview = ({
  data,
  data: { title, hook, created_at, main_tag, tumbnail },
}) => {
  const location = useLocation();
  const pathname = location.pathname;
  const history = useHistory();
  const OnTagClick = () => {
    history.push(
      `${
        main_tag === "parents"
          ? "/blogs/for-parents"
          : main_tag === "siblings"
          ? "/blogs/for-siblings"
          : "/blogs/for-carers"
      }`
    );
  };
  return (
    <div className={`blog-overview-post-preview-wrapper`}>
      <div className={`blog-overview-post-preview`}>
        <div
          className={`flex-center-column tumbnail`}
          style={{
            backgroundImage:
              main_tag === "parents"
                ? `linear-gradient(#0aa7ff8a, #0aa5ff3a), url(${tumbnail})`
                : main_tag === "siblings"
                ? `linear-gradient(#ff0ac98a, #ff0ac93a), url(${tumbnail})`
                : `linear-gradient(#ffba0a8a, #ffba0a3a), url(${tumbnail})`,
          }}
        >
          <CustomButton
            label={main_tag}
            onClick={OnTagClick}
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
                  `${
                    main_tag === "parents"
                      ? "/blogs/for-parents"
                      : main_tag === "siblings"
                      ? "/blogs/for-siblings"
                      : "/blogs/for-carers"
                  }/${title.split(" ").join("-").toLowerCase()}`
                )
              }
            >
              {title}
            </h1>
            <Spacing height={`1em`} />
            <span
              className={`time`}
              style={{
                color:
                  main_tag === "parents"
                    ? colors.for_parents
                    : main_tag === "siblings"
                    ? colors.for_siblings
                    : colors.for_carers,
              }}
            >
              {moment().fromNow(created_at)}
            </span>
          </div>
        </div>
        <Spacing height={`1em`} />
        <p className={`hook`}>{hook}</p>
      </div>
    </div>
  );
};

export default BlogOverviewPostPreview;
