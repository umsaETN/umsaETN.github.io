$(function() {
    $('.form-control').focus(formFocus);
});
  
function formFocus() {
    $('#alert-field')
    .removeClass()
    .addClass('hidden');
}
function sendEmail(e) {
    e.preventDefault();

    const POST_URL = 'https://script.google.com/macros/s/AKfycbz8kCws9x0eGiFlqDev1qjq5DiuqxWlW2JWOUU6x0yevVt5tN0/exec';
    

    const postRequest = {
        name: e.target['name-field'].value,
        email: e.target['email-field'].value,
        project: e.target['project-field'].value,
        message: e.target['message-field'].value
    };
  
    if(POST_URL) {
        $.post(POST_URL, JSON.stringify(postRequest))
        .then(res => {
        
            e.target.reset();
            $('#alert-field')
            .removeClass()
            .addClass(`alert alert-${res.code}`)
            .text(res.msg);
        });

        $('#alert-field')
        .removeClass()
        .html('<progress></progress>')
        .removeClass('hidden');
    } else {
        alert('You must set the POST_URL variable with your script ID');
    }
}