javascript:(function inline(){
    window.StopForumSpam=window.StopForumSpam || {};
    window.StopForumSpam={
        origin:window.location.protocol + '//' + window.location.host,loaderVersion:1.1,timedOut:true};

    var userById = document.getElementById('user');
    var user = userById.value;

    var userEmailById = document.getElementById('user_email');
    var user_email = userEmailById.value;

    var ip = '';
    var ips = document.body.getElementsByTagName('a');
    for (var i = 0; i < ips.length; i++) {
        if (/^\d+\.\d+\.\d+\.\d+$/.test(ips[i].text)) {
            ip = ips[i].text;
        }
    }
    var id = localStorage.getItem('sfs_id');
    var password = localStorage.getItem('sfs_password');
    alert(' ~/Go/bin/golang-simple-client -action=insert -uid=' + id + ' -passwd=' + password + ' -username=\"' + user +'\" -ip_addr=' + ip + ' -email=\"' + user_email + '\"');
})();
