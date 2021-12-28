import {
	faTrashAlt,
	faSignOutAlt,
	faEdit,
	faSpinner,
	faPlusSquare,
	faPhone,
	faEnvelope,
	faMapMarkedAlt,
	faDiceD6,
	faHashtag,
	faLock,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
	return library.add(
		faTrashAlt,
		faSignOutAlt,
		faEdit,
		faSpinner,
		faPlusSquare,
		faPhone,
		faEnvelope,
		faMapMarkedAlt,
		faDiceD6,
		faHashtag,
		faLock,
		faUser
	);
};

export default Icons;
