import ItemsView from "../components/Catalog/ItemsView";

const Catalog = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 14];

  return <ItemsView cards={cards} />;
};

export default Catalog;
