export const songreducer =()=>{
    return [{
        title:"dil bechara",
        duration : "3.20"
    },{
        title:"mission impossible",
        duration : "2.30"
    },
    {
        title:"boss",
        duration : "4.10"
    }
    ];
};


export const selectedsongreducer=(selectsong=null, action)=>{
    switch(action.type){
        case "SONG_SELECTED":
            return action.payload;
            default:
                return selectsong;
    }

};
