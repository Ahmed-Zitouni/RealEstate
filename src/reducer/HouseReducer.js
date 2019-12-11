
export const HouseReducer = (state, action) => {
    switch(action.type) {
        case 'SEARCH_ZPID':
            return({
                ...state,
                Input : {
                    addr: action.addr,
                    city: action.city,
                    sta: action.sta,
                    passed: action.passed
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