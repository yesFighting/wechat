const money ={
    state:{
        addFundDialog: {
            title: '新增',
            type: 'add'
         }
    },
    getters: {
       addFundDialog:state=>state.addFundDialog 
    },
    mutations:{
        SET_DIALOG_TITLE:(state,type)=>{
            if(type === 'add'){
                state.addFundDialog.title = '新增'
                state.addFundDialog.type = 'add'
            }else{
                state.addFundDialog.title = '编辑'
                state.addFundDialog.type = 'edit'
            }
        }
    }
}

export default money