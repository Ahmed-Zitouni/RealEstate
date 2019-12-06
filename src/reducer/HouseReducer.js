
export const HouseReducer = (state, action) => {
    switch(action.type) {
        case 'SEARCH_ZPID':
            return({
                ...state,
                input : {
                    addr: action.addr,
                    city: action.city,
                    sta: action.sta,
                },
                Homes: action.info
            })
        case 'HOUSE_INFO':
            return (
                {...state,
                Display : {
                    DashBoard: action.dash,
                    Item: action.Item,
                    }
                }
            )
        default:
            return state
    }
}