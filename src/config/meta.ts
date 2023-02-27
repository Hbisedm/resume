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
  mobile: "1341****587",
  // mobile: "13417038587",
  realMobile: "",
  education: {
    universityMajor: "信息工程",
    universityEducationalBackground: "本科",
    universityName: "广州大学华软软件学院",
    universityTime: "2017.09 - 2021.06",
    universityExperience: `
    <ul class="sub-title__ul">
      <li>成绩良好</li>
      <li>获得学生奖学金二等奖、三等奖</li>
    </ul>
    `,
  },
  location: "ShenZhen",
  github: "github.com/hbisedm",
  skills,
  workExperience: [
    {
      companyName: "东莞市盛世万丰绿园网络科技有限公司",
      rangeTime: "2022.03 - 2023.01",
      position: "前端工程师",
      workContent: `
      <ul class="sub-title__ul">
        <li>负责对H5和后台的业务需求进行定制化开发</li>
        <li>与产品经理一起探讨分析业务需求和页面布局的设计</li>
        <li>维护组件库,重构老代码和适应新需求</li>
        <li>完成H5页面的适配</li>
        <li>优化用户端页面的首屏加载速度</li>
      </ul>
      `,
    },
    {
      companyName: "深圳前海思佳智能有限公司",
      rangeTime: "2020.10 - 2022.02",
      position: "前端工程师",
      workContent: `
      <ul class="sub-title__ul">
        <li>负责项目文档的编写</li>
        <li>参与移动端开发</li>
        <li>与用户进行需求分析</li>
        <li>参与自研Vue框架的基建</li>
        <li>参与项目后端代码的编写</li>
        <li>参与维护现有的24个子应用</li>
        <li>完成对项目的部署</li>
        <li>完成开发6个新应用(Vue + Java)</li>
        <li>参与使用 Nginx 配置,为各个子项目分配端口</li>
      </ul>
      `,
    },
  ],
};
