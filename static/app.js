var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

window.onload = () => {
    let spl = document.location.href.split('/');
    if(spl[spl.length - 1] == 'editor.html'){
        let today = new Date();
        document.getElementById('e_date').innerText = months[today.getMonth()] + ' ' + today.getDate() + '. ' + today.getFullYear();
    }
    else{
        document.getElementById('m_title').opacity = 0;
        document.getElementById('m_icon_div').opacity = 0;
        document.getElementById('m_get_github').opacity = 0;
        document.getElementById('m_get_start').opacity = 0;
        document.getElementById('copyright').opacity = 0;
        document.getElementById('m_get_bell').opacity = 0;
    }
}

function changeIcon(){
    let icon = document.getElementById('m_get_bell_icon');

    if(icon.className == 'far fa-bell')
        icon.className = 'far fa-bell-slash';
    else
        icon.className = 'far fa-bell';
}
