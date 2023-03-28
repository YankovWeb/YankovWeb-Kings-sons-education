import {useUserAuth} from "../context/AuthContext";

import ItemsView from "../components/Catalog/ItemsView";

const Catalog = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //fetch user items
  const {user} = useUserAuth();
  //check if is owner
  const owner = false;

  return <ItemsView cards={cards} user={user} owner={owner} />;
};

export default Catalog;
