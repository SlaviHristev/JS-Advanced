function validate() {
    document.getElementById('email').addEventListener('change', onChange)

    function onChange(e){

        const regex = /[a-z]+@[a-z]+\.[a-z]+/g;

        if(regex.test(e.currentTarget.value)){
            e.currentTarget.classList.remove('error');
        }else{
            e.currentTarget.classList.add('error');
        }
    }
}