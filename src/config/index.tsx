/**
 * @description 运营者昵称
 * @var string
 */
export const UserName: string = "AHdark";

/**
 * @description 运营者邮箱
 * @var email
 */
export const UserEmail: string = "ssnight_0325ahlw@yeah.net";

/**
 * @description 博客URL
 * @var string
 */
export const BlogURL: string = "https://ahdark.com";

/**
 * @description 站点名
 * @var string
 */
export const SiteName: string = "AHdark Blog Storage";

/**
 * @description 备案号 可选
 * @var string|boolean
 * 输入false则不显示
 */
export const Beian: string | boolean = "京ICP备 2021024539号";
// export const Beian = false;

/**
 * @description 运营者博客
 * @var object
 * @param Name 运营者姓名
 * @param Url 博客地址
 * @param Content 联系方式
 */
export const Blog: any = {
	Name: "AHdark Blog",
	Url: BlogURL,
	Content: "https://ahdark.com/contact",
	Describe: "一个搞技术的小蒟蒻"
}

export const GitHub: any = {
	UserName: "AH-dark",
	RepoName: "AHdarkBlog_Storage"
}