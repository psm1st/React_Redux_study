module.exports = {
    mode: 'development',
    //entry필드
    //실행의 시작 지점이 될 파일 지정
    entry : './entry.js',

    //output필드
    //출력과 관련된 설정
    output:{
        filename: 'output.js'
    },

    module:{
        rules:[
            //babel-loader설정
            {
                loader:'babel-loader',
                test:/\.js$/,
                options:{
                    presets:['react']
                }
            }
        ]
    }
}