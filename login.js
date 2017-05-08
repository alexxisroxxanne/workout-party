const nightmare = require('nightmare')( {show: true} );

const user = require('./user-info');

nightmare.goto('https://classpass.com/login')
         .type('#email_field', user.email)
         .type('#password_field', user.password)
         .click('button[type="submit"]')
         .evaluate( () => document.querySelector('.hero__title') )
         .end()
         .then( (data) => {
            console.log(data)
         })
         .catch( (err) => console.error(err) );
