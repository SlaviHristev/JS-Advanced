
    function attachEventsListeners() {
       
        const buttons = document.querySelectorAll('input[type="button"]');
    
        
        for(const button of buttons) {
            button.addEventListener('click', () => {
                
                const inputFieldId = button.id.replace('Btn', '');
                const inputValue = parseFloat(document.getElementById(inputFieldId).value);
    
              
                let days, hours, minutes, seconds;
    
                switch (inputFieldId) {
                    case 'days':
                        days = inputValue;
                        hours = days * 24;
                        minutes = hours * 60;
                        seconds = minutes * 60;
                        break;
                    case 'hours':
                        hours = inputValue;
                        days = hours / 24;
                        minutes = hours * 60;
                        seconds = minutes * 60;
                        break;
                    case 'minutes':
                        minutes = inputValue;
                        hours = minutes / 60;
                        days = hours / 24;
                        seconds = minutes * 60;
                        break;
                    case 'seconds':
                        seconds = inputValue;
                        minutes = seconds / 60;
                        hours = minutes / 60;
                        days = hours / 24;
                        break;
                    default:
                        break;
                }
    
                
                document.getElementById('days').value = days;
                document.getElementById('hours').value = hours;
                document.getElementById('minutes').value = minutes;
                document.getElementById('seconds').value = seconds;
            });
        };
    }
