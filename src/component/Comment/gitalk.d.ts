declare module "gitalk/dist/gitalk-component" {
	import Gitalk from "gitalk"
	
	export interface IProps {
		options: Gitalk.GitalkOptions
	}
	
	export default class GitalkComponent extends React.Component<IProps, any> {
	}
}