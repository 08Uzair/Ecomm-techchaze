import { FETCH_CATEGORY ,FETCH_CATEGORY_ID} from "../constants/actionTypes";
export default (category = [], action) => {
  switch (action.type) {
    case FETCH_CATEGORY:
      return action.payload;

      case FETCH_CATEGORY_ID:
        return [action.payload]; 

      break;
    default:
      return  category;
  }
};
   