import {User} from "./User";
import {Company} from "./Company";
import {CustomMap} from "./CustomMap";

/**
 * @see {@link CustomMap }
 */
const customMap = new CustomMap('map');
const user = new User();
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);

/**
 * @description: in order to run the application - perfrom the command from 'maps' directory: 'parcel index.html '
 */
