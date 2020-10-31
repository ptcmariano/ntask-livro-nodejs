import NTask from '../ntask';
import Template from '../templates/signup';

class Singup extends NTask {
    constructor(body) {
        super();
        this.body = body;
    }
    render() {
        this.body.innerHTML = Template.render();
        this.body.querySelector('[data-name]').focus();
        this.addEventListener();
    }
    addEventListener() {
        this.formSubmit();
    }
    formSubmit() {
        const form = this.body.querySelector('form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = e.target.querySelector('[data-name]').value;
            const email = e.target.querySelector('[data-email]').value;
            const password = e.target.querySelector('[data-password]').value;
            const options = {
                method: 'POST',
                url: `${this.URL}/users`,
                json: true,
                body: {name,email,password}
            };
            this.request(options, (err, res, data) => {
                if (err || res.status == 412) {
                    this.emit('error', err);
                } else {
                    this.emit('signup', data);
                }
            });
        });
    }
}

module.exports = Singup;