var data = {
    action: 'insert',
    authMethod: 'md5'
};

var user_email = document.getElementById('user_email').value;
if (user_email != '') {
    data['email'] = user_email;
}

data['evidence'] = 'Spam messages';

var ips = document.body.getElementsByTagName('a');
for (var i = 0; i < ips.length; i++) {
    if (/^\d+\.\d+\.\d+\.\d+$/.test(ips[i].text)) {
        data['ip_addr'] = ips[i].text;
    }
}

data['uid'] = localStorage.getItem('sfs_id') || '';

var user = document.getElementById('user').value;
if (user != '') {
    data['username'] = user;
}

var password = localStorage.getItem('sfs_password') || '';

if (data['uid'] != '' && password != '') {
    var str = [];
    for (var name in data) {
        str.push(data[name]);
    }
    str.push(password);
    data['sign'] = md5(str.join(";"));

    var req = new XMLHttpRequest();
    req.open("POST", "https://stopforumspam.subnets.ru/api/query.php", true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener("load", function () {
        if (req.status < 400)
            alert(req.responseText);
    });
    req.send(JSON.stringify(data));
}
