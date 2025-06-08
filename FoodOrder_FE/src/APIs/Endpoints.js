const Endpoints = {
    LIST_DISH: "/dishs",
    LIST_COMMENTS_BY_DISH: (dishId)=>`${Endpoints.RETRIEVE_DISH(dishId)}/comments`,
    RETRIEVE_COMMENT_BY_ID: (commentId)=>`/comments/${commentId}`,
    RETRIEVE_DISH: (dishId)=> `/dishs/${dishId}`,
    RETRIEVE_MENU: (menuId)=> `/menus/${menuId}`,
    RETRIEVE_SHOP: (shopId)=> `/shops/${shopId}`,
    GET_MENU: "/menus",
    LIST_COMMENTS_BY_COMMENT: (parentId)=>`${Endpoints.RETRIEVE_COMMENT_BY_ID(parentId)}/comments`,
    CREATE_DISH_ORDER: ()=> "/orders/dishs/",
    CREATE_MENU_ORDER: ()=> "/orders/menus/",
    RETRIEVE_ORDER_BY_ID: (orderID)=>`/orders/${orderID}`,
    RETRIEVE_TOKEN: '/o/token/'
}

export default Endpoints;