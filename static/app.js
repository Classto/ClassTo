window.onload = () => {
    let spl = document.location.href.split('/');
    if(spl[spl.length - 1] === 'editor.html'){
        let today = new Date();
        
        let y = today.getFullYear();
        let m = today.getMonth() + 1;
        let d = today.getDate();

        if(m.toString().length == 1)
            m = '0' + m;
        if(d.toString().length == 1)
            d = '0' + d;
    
        document.getElementById('date_pnl').setAttribute('value', y + '-' + m + '-' + d);
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
