const sampleFunc = () => {
    console.log("これは同期処理関数内のログです。")
    return '完了'
};

const message = '同期処理'
const result = sampleFunc()
console.log(message + result)