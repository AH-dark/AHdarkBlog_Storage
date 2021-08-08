import { GitHub } from "./config";

/**
 * Gitalk配置项
 */
export default class Gitalk {

    /**
     * **必须**
     * 是否使用Gitalk
     * @var bool
     */
    use = false;

    /**
     * **必须**
     * GitHub Application Client ID.
     * @var string
     */
    ClientID = "";

    /**
     * **必须**
     * GitHub Application Client Secret.
     * @var string
     */
    ClientSecret = "";

    /**
     * **必须**
     * GitHub repository.
     * @var string
     */
    Repository = GitHub.RepoName;

    /**
     * **必须**
     * GitHub repository 所有者，可以是个人或者组织
     * @var string
     */
    Owner = GitHub.UserName;

    /**
     * **必须**
     * GitHub repository 的所有者和合作者 (对这个 repository 有写权限的用户)。
     */
    Admin = GitHub.UserName;

    /**
     * **必须**
     * 页面标识
     */
    id;
}