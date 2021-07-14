window.onload = () => {
    let spl = document.location.href.split('/');
    if(spl[spl.length - 1] == 'editor.html'){
        
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
