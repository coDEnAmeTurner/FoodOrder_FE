const Endpoints = {
    LIST_DISH: "/dishs",
    LIST_COMMENTS_BY_DISH: (dishId)=>`${Endpoints.RETRIEVE_DISH(dishId)}/comments`,
    RETRIEVE_DISH: (dishId)=> `/dishs/${dishId}`,
    RETRIEVE_SHOP: (shopId)=> `/shops/${shopId}`,
    GET_MENU: "/menus",
}

export default Endpoints;