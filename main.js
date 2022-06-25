   //ブラウザのコンソールとかで実行してください。
    function f(){
        //回答を保存した状態でDIVをみます。
        //右下のフォームをクリアを押すと試せます。
        let pram = [
            {input:"入力値",id:"01234"},
            {input:"入力値",id:"01234"},
        ]

        let baseUrl = "https://docs.google.com/forms/d/e/ID/formResponse?"

        pram.map(v=>{
            baseUrl = `${baseUrl}entry.${v.id}=${v.input}&`
        })

        baseUrl = encodeURI(baseUrl)
        console.log(baseUrl)
    }
    
    f()
