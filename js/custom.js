$(function() {
    $('.form-control').focus(formFocus);
});
  
function formFocus() {
    $('#alert-field')
    .removeClass()
    .addClass('hidden');
}
function sendRequest(e) {
    e.preventDefault();

    const POST_URL = 'https://script.google.com/macros/s/AKfycbxDNFm_fbBq01V2-LXebwi7OiRx7ggwc3wFI_P2h0VDCs8FwA75/exec';
    

    const postRequest = {
		email: e.target['email-field'].value,
        ci: e.target['ci-field'].value
    };
  
    if(POST_URL) {
        $.post(POST_URL, JSON.stringify(postRequest))
        .then(res => {
        
            e.target.reset();
            $('#alert-field')
            .removeClass()
            .addClass(`alert alert-${res['code']}`)
			.html(res['msg']);
			  
        });

        $('#alert-field')
        .removeClass()
        .html('<progress></progress>')
        .removeClass('hidden');
    } else {
        alert('You must set the POST_URL variable with your script ID');
    }
}