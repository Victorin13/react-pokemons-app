export default class authenticationService {
    static isAuthenticated: boolean = false;

    static login (username: string, password: string): Promise<boolean> {
        const isAuthenticated = (username === 'Vivo' && password === 'pokevivo');

        return new Promise (resolve => {
            setTimeout(() => {
                this.isAuthenticated = isAuthenticated;
                resolve(isAuthenticated)
            }, 1000);
        });
    }
}