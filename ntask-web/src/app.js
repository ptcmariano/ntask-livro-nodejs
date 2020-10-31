import Singin from './components/signin';
import Singup from './components/signup';

class App {
    constructor(body) {
        this.singin = new Singin(body);
        this.singup = new Singup(body);
    }
    init() {
        this.singin.render();
        this.addEventListener();
    }
    addEventListener() {
        this.singinEvents();
        this.singupEvents();
    }
    singinEvents() {
        this.singin.on("error", () => alert("erro na autenticação"));
        this.singin.on("signin", (token) => {
            localStorage.setItem("token", `JWT ${token}`);
            alert("autenticação com sucesso");
        });
        this.singin.on("signup", () => this.singup.render());
    }
    singupEvents() {
        this.singup.on("error", () => alert("erro no cadastro"));
        this.singup.on("signup", (user) => {
            alert(`${user.name} bem vindo, você foi cadastrado com sucesso!`);
            this.singin.render();
        });
    }
}

module.exports = App;