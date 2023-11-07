const WEBSITE_SORTS: WebsiteSort[] = [
  { id: 1, title: "My Site" },
  // { id: 2, title: "示例分类2" },
  // { id: 3, title: "示例分类3" },
  // { id: 4, title: "示例分类4" },
  // { id: 5, title: "示例分类5" },
  // { id: 6, title: "友情链接" },
];

const WEBSITE_ITEMS: WebsiteItem[] = [
  {
    sortId: 1,
    title: "Lichao Wang'Blog",
    description: "Lichao Wang'Blog",
    url: "https://lichao.wang",
    icon: "https://lichao.wang/upload/logo.jpg",
  },
  // {
  //   sortId: 6,
  //   title: "Lichao Wang'Blog",
  //   description: "Lichao Wang'Blog",
  //   url: "https://lichao.wang",
  //   icon: "https://lichao.wang/upload/logo.jpg",
  // },
];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "Lichao Wang'Blog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://lichao.wang",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: null,
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: null,
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, my friend!",
    "訪問へようこそ",
    "嗨，别来无恙",
    "不忘初心，一生浪漫",
    "最近还好吗？",
    "流星，落花，萤火",
    "马车越空，晃荡越响",
  ],
  /**
   * 网站分类列表
   */
  WEBSITE_SORTS,
  /**
   * 网站分类列表
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "My Blog Index",
    keywords: "Blog, Index, Index Page",
    description: "This is my personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
