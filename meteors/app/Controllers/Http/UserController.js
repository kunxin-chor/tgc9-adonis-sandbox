'use strict'

const User = use('App/Models/User')

class UserController {

  register({view}) {
    return view.render('register')
  }

  processRegister({request, response}) {
    let body = request.post();
    let u = new User();
    u.username = body.username;
    u.password = body.password;
    u.email = body.email;
    u.save();
    response.json(u);
  }

  login({ view }) {
    return view.render('login')
  }

  async processLogin({ auth, request }) {
    const { email, password } = request.all()
    await auth.attempt(email, password)

    return 'Logged in successfully'
  }

  show({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return "You cannot see someone else's profile"
    }
    return auth.user
  }
}

module.exports = UserController
