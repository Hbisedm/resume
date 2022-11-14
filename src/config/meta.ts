import Astro from "astro";

import { IInfo, ISkill, Level } from "./types";

const skills: ISkill[] = [
  {
    name: "HTML/CSS/JavaScript",
    level: Level.SKILLED,
  },
  {
    name: "TypeScript",
    level: Level.MASTER,
  },
  {
    name: "Java",
    level: Level.MASTER,
  },
  {
    name: "Vue",
    level: Level.SKILLED,
  },
  {
    name: "React",
    level: Level.KNOW_ALL_ABOUT,
  },
  {
    name: "小程序",
    level: Level.SKILLED,
  },
  {
    name: "Git",
    level: Level.KNOW_ALL_ABOUT,
  },
];

export const info: IInfo = {
  avatar:
    "https://raw.githubusercontent.com/Hbisedm/my-blob-picGo/main/img/202210290130824.png",
  name: "Sam",
  job: "前端工程师",
  experience: "两年工作经验",
  age: 24,
  weChat: "SamWechat98",
  email: "hbisedm666@163.com",
  mobile: "134****8587",
  university: "广州大学华软软件学院",
  major: "信息工程",
  universityTime: "2017.09 — 2021.06",
  location: "DongGuan",
  github: "http://github.com/hbisedm",
  skills,
  workExperience: [
    {
      companyName: "东莞市盛世万丰绿园网络科技有限公司",
      rangeTime: "2022年3月 - 至今",
      workContent: "",
    },
    {
      companyName: "深圳前海思佳智能有限公司",
      rangeTime: "2021年7月 - 2022年2月",
    },
  ],
};
