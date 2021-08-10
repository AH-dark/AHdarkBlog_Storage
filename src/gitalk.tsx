import { GitHub } from "./config";

/**
 * Gitalk配置项
 */
export const Gitalk = {
	
	/**
	 * **必须**
	 * 是否使用Gitalk
	 * @var bool
	 */
	use: true,
	
	/**
	 * **必须**
	 * GitHub Application Client ID.
	 * @var string
	 */
	ClientID: "d483193dc958bfd69c21",
	
	/**
	 * **必须**
	 * GitHub Application Client Secret.
	 * @var string
	 */
	ClientSecret: "9b3d87e0f1ce993e21b6783c0c64a1705e74a89e",
	
	/**
	 * **必须**
	 * GitHub repository.
	 * @var string
	 */
	Repository: GitHub.RepoName,
	
	/**
	 * **必须**
	 * GitHub repository 所有者，可以是个人或者组织
	 * @var string
	 */
	Owner: GitHub.UserName,
	
	/**
	 * **必须**
	 * GitHub repository 的所有者和合作者 (对这个 repository 有写权限的用户)。
	 */
	Admin: GitHub.UserName,
	
	/**
	 * **必须**
	 * 页面标识
	 */
	id: "default"
};