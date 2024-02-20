import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class SigninController extends Controller {
  @service session;
  @service router;

  @tracked mobileNumber;
  @tracked password;

  @action
  async login(event) {
    event.preventDefault();

    try {
      let response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mobile_number: this.mobileNumber,
          password: this.password,
        }),
      });

      if (response.ok) {
        let responseData = await response.json();
        let currentUser = responseData.current_user;
        this.session.set('userId', currentUser);
        this.router.transitionTo('profile');
      } else {
        console.log('Invalid');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
