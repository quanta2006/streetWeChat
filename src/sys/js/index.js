require('jquery')
require('../less/index.less')

var moment = require('moment')
console.log(moment().format())

$(init)

function init () {
    console.log('ccc')
    console.log('this is today')

    $('.btn-primary').on('click', function () {
        self.location = 'main.html'
    })
}
