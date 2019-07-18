const types = {
    HANDLE_LEFT_MENU:'HANDLE_LEFT_MENU', //收缩菜单
    INIT_LEFT_MENU:'INIT_LEFT_MENU',     //初始化菜单
    SET_LEFT_COLLAPSE:"SET_LEFT_COLLAPSE" // 改变菜单的收缩宽度
};
const menu = {
    state: {
        minLeftMenuWidth:'35px',
        maxLeftMenuWidth:'180px',
        sidebar: {
            opened: true,
            width:'180px'
        },
        isCollapse:false
    },

    getters: {
        sidebar:state => state.sidebar,
        isCollapse:state =>state.isCollapse
    },

    mutations: {
        [types.HANDLE_LEFT_MENU] (state) { 
            if(state.sidebar.opened){  //true
                state.sidebar.width = state.minLeftMenuWidth;
            }else{
                state.sidebar.width = state.maxLeftMenuWidth;
            }
            state.sidebar.opened = !state.sidebar.opened
        },
        [types.INIT_LEFT_MENU](state){
            state.sidebar = state.sidebar
        },
        [types.SET_LEFT_COLLAPSE](state){
            state.isCollapse = !state.isCollapse
        } 
    },
    actions:{
        handleLeftMenu:({ commit })=>{          
             commit(types.HANDLE_LEFT_MENU);
        },
        initLeftMenu:({ commit })=>{
            commit(types.INIT_LEFT_MENU);
        },
        setLeftCollapse:({ commit}) => {  
            commit(types.SET_LEFT_COLLAPSE)  
         }
    }
};

export default menu
