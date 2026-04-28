document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
    const resultDiv = document.getElementById('result');
    
    submitBtn.addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="number"]:checked');
        
        if (selectedOption) {
            let message = '';
            
            switch(selectedOption.value) {
                case '52':
                    message = 'Do you shuyesh? There is no such number.';
                    break;
                case '42':
                    message = 'Do you shuyesh? There is no such number.';
                    break;
                case '67':
                    message = 'aaaaaaaa six seveeeeen!';
                    break;
            }
            
            resultDiv.textContent = message;
            resultDiv.style.color = '#667eea';
        } else {
            resultDiv.textContent = 'Please select a number!';
            resultDiv.style.color = 'red';
        }
    });
});
