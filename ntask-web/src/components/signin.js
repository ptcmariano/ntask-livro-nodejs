import NTask from '../ntask';
import Template from '../templates/signin';

class Singin extends NTask {
    constructor(body) {
        super();
        this.body = body;
    }
    render() {
        this.body.innerHTML = Template.render();
        this.body.querySelector('[data-email]').focus();
        this.addEventListener();
    }
    addEventListener() {
        this.formSubmit();
        this.singupClick();
    }
    formSubmit() {
        const form = this.body.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('[data-email]').value;
            const password = e.target.querySelector('[data-password]').value;
            const options = {
                method: 'POST',
                url: `${this.URL}/token`,
                json: true,
                body: {email,password}
            };
            this.request(options, (err, res, data) => {
                if (err || res.status == 401) {
                    this.emit('error', err);
                } else {
                    this.emit('signin', data.token);
                }
            });
        });
    }
    singupClick() {
        const singup = this.body.querySelector('[data-signup]');
        singup.addEventListener('click', (e) => {
            e.preventDefault();
            this.emit('signup');
        });
    }
}

module.exports = Singin;