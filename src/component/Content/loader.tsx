import * as fs      from "fs";

/**
 * @return object
 * @constructor
 */
export default function Loader(){
	const FilePath = "../../config/contact.json";
	
	if ( fs.existsSync( FilePath ) ) {
		let userContactJson = fs.readFileSync( FilePath, "utf8" );
		return JSON.parse( userContactJson );
	}
};