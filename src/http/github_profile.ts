export async function getUserGitHub(username: string) {

    const promise = await fetch(`https://api.github.com/users/${username}`)
    return promise.json()
        .then((data) => {
            return data;
        }).catch((error) => {
            return `Ocorreu um erro: ${error}`
        });
}

export async function getRepositoriesGitHub(username: string) {

    const promise = await fetch(`https://api.github.com/users/${username}/repos`)
    return promise.json()
        .then((data) => {
            return data;
        }).catch((error) => {
            return `Ocorreu um erro: ${error}`
        });
}