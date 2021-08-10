/**
 * @description 运营者昵称
 * @var string
 */
export const UserName = "AHdark";

/**
 * @description 运营者邮箱
 * @var email
 */
export const UserEmail = "ssnight_0325ahlw@yeah.net";

/**
 * @description 博客URL
 * @var string
 */
export const BlogURL = "https://ahdark.com";

/**
 * @description 站点名
 * @var string
 */
export const SiteName = "AHdark Blog Storage";

/**
 * @description 备案号 可选
 * @var string
 * 输入false则不显示
 */
export const Beian = "京ICP备 2021024539号";
// export const Beian = false;

/**
 * @description 公安备案 可选
 * @var string
 * 输入false则不显示
 * @param Num string 网安备案代码
 * @param Link string 网安备案指向查询链接
 * @param Img bool 是否显示公安图标
 */
// export const WangAn = {
//     Num: "皖公网安备 34022302000216号",
//     Link: "https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=34022302000216"
//     Img: true
// }
export const WangAn = false;

/**
 * @description 运营者博客
 * @var object
 * @param Name 运营者姓名
 * @param Url 博客地址
 * @param Content 联系方式
 */
export const Blog = {
    Name: "AHdark Blog",
    Url: BlogURL,
    Content: "https://ahdark.com/contact",
    Describe: "一个搞技术的小蒟蒻"
}

export const GitHub = {
    UserName: "AH-dark",
    RepoName: "AHdarkBlog_Storage"
}