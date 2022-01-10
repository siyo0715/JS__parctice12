const getGit = async () => {
    const message = 'Git';
    const url = '#'
    
    const json = await fetch(url)
        .then(res => {
            console.log('成功')
        }).catch(error => {
            console.error('失敗', error)
            return null
        });
    const repository = json;
    console.log(message + repository)
}

getGit();