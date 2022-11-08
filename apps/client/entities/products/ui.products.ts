
import show from "./show.products";
import create from "./create.products";
import edit from "./edit.products";
import list from "./list.products";

export default { 
  name: "products",
  label: "products",
  hide: false,
  create,
  edit,
  list,
  show,
}