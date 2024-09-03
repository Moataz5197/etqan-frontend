"use client";
import React from "react";

import { useTranslation } from "react-i18next";

const HomePageComponent = () => {
  const { t } = useTranslation();
  return <main>{t("welcome")}</main>;
};

export default HomePageComponent;
