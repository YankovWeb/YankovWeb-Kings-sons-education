import {useUserAuth} from "../context/AuthContext";

import ItemsView from "../components/Catalog/ItemsView";

const Catalog = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const {user} = useUserAuth();
  const auth = false;

  return <ItemsView cards={cards} user={user} auth={auth} />;
};

export default Catalog;
