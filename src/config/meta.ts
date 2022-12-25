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
  avatar: "https://avatars.githubusercontent.com/u/51397088?v=4",
  name: "陈胜鑫",
  job: "前端工程师",
  experience: "两年工作经验",
  age: 24,
  weChat: "SamWechat98",
  email: "hbisedm666@163.com",
  mobile: "134****8587",
  realMobile: "",
  education: {
    universityMajor: "信息工程",
    universityEducationalBackground: "本科",
    universityName: "广州大学华软软件学院",
    universityTime: "2017.09 - 2021.06",
    universityExperience: `
    <ul>
      <li>成绩良好</li>
      <li>获得学生奖学金二等奖、三等奖</li>
    </ul>
    `,
  },
  location: "DongGuan",
  github: "http://github.com/hbisedm",
  skills,
  workExperience: [
    {
      companyName: "东莞市盛世万丰绿园网络科技有限公司",
      rangeTime: "2022.03 - 至今",
      position: "前端工程师",
      workContent: `
      <ul>
        <li>负责平台的迭代优化</li>
        <li>负责对UI图进行一比一还原</li>
        <li>负责对需求进行定制化开发</li>
        <li>负责公司业务H5端、后台的开发</li>
        <li>完成移动端适配</li>
        <li>完成测试并修复开发过程中发现的bug</li>
      </ul>
      `,
    },
    {
      companyName: "深圳前海思佳智能有限公司",
      rangeTime: "2021.07 - 2022.02",
      position: "前端工程师",
      workContent: `
      <ul>
        <li>参与移动端开发</li>
        <li>参与用户需求分析</li>
        <li>参与自研Vue框架的基建</li>
        <li>参与项目后端代码的编写</li>
        <li>参与维护现有的24个应用</li>
        <li>完成对项目的部署</li>
        <li>完成开发6个新应用(Vue + Java)</li>
        <li>参与使用 Nginx 配置,为各个子项目分配端口</li>
      </ul>
      `,
    },
    {
      companyName: "广州市齐明软件科技有限公司",
      rangeTime: "2020.10 - 2021.03",
      position: "Java工程师",
      workContent: `
      <ul>
        <li>负责项目文档的编写</li>
        <li>负责测试反馈的bug进行修复</li>
        <li>参与Java开发业务工作</li>
        <li>参与web端页面的编写</li>
      </ul>
      `,
    },
  ],
};
