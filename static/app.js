window.onload = () => {
    let spl = document.location.href.split('/');
    if(spl[spl.length - 1] == 'editor.html'){
        let dname_div = document.createElement('button');
        dname_div.style.backgroundColor = 'red';
        dname_div.style.width = '20px';
        dname_div.style.height = '20px';
        document.getElementById('e_panel').appendChild(dname_div);
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
