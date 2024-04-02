import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  // data that coming from the loader specified to this page (route)
  // render as the fetch. start fetching the data at the same time as it starts rendering the correct route. what we did before as using useEffect was fetch on render approche, we render the component first and after the component was already rendered then we start fetching the data
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
