const Endpoints = {
    LIST_DISH: "/dishs",
    RETRIEVE_DISH: (dishId)=> `/dishs/${dishId}`,
    RETRIEVE_SHOP: (shopId)=> `/shops/${shopId}`,
    GET_MENU: "/menus",
}

export default Endpoints;