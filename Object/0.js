OBJECT[ID.MAP] = {
    IMG:4,
    TILE_WIDTH:30,TILE_HEIGTH:30,
    DATA:[
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    CHECK:[[
            [0,0,0,0],//x
            [-1,-2,-3,-4],//y
            [0,0,0,0],//x2
            [1,2,3,4],//y2
        ],
        [
            [-1,-2,-3,-4],//x
            [-1,-2,-3,-4],//y
            [1,2,3,4],//x2
            [1,2,3,4],//y2
        ],
        [
            [-1,-2,-3,-4],//x
            [0,0,0,0],//y
            [1,2,3,4],//x2
            [0,0,0,0],//y2
        ],
        [
            [-1,-2,-3,-4],//x
            [1,2,3,4],//y
            [1,2,3,4],//x2
            [-1,-2,-3,-4],//y2
        ]
    ]   
};

function checkOmok(x,y,value,checkArray){
    var obj = OBJECT[ID.MAP];
    for (let index = 0; index < checkArray.length; index++) { 
        var check=[0,0];
        var checkIdx=0;
        for (let i = 0; i < check.length; i++) {
            for (var j= 0; j < checkArray[index][0].length; j++) {
                var tmpIdx = i + checkIdx;
                var cx= checkArray[index][tmpIdx++][j];
                var cy= checkArray[index][tmpIdx++][j];
                if(obj.DATA[y+cx][x+cy] == value){
                    check[i]++;
                }else{
                    break;
                }
            }
            checkIdx++;
            if(check[0] + check[1] >= 4)return true;
            check=[0,0]; 
        }
    }
    return false;
}