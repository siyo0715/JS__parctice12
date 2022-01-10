const getGit = () => {
    const url = '#'

    //GitHub APIをFetchメソッドで実行
    fetch(url).then(res => res.json())
        .then(json => {
            console.log('非同期成功です。')
            return json.login
        }).catch(error => {
            console.error('非同期失敗です。', error)
            return null
        })
};

const message = 'Git'
const repository = getGit()
console.log(message + repository)