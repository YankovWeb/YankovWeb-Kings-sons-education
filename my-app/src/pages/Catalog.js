import {useUserAuth} from "../context/AuthContext";
import {useFireStoreUser} from "../context/UserContext";
import ItemsView from "../components/Catalog/ItemsView";

const Catalog = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14];
  const {user} = useUserAuth();
  const {getUserData} = useFireStoreUser();

  const curetUser = getUserData();

  return <ItemsView cards={cards} user={user} curetUser={curetUser} />;
};

export default Catalog;
