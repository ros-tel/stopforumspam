var data = {
    action: 'check',
    authMethod: 'md5'
};

var user_email = document.getElementById('user_email').value;
if (user_email != '') {
    data['email'] = user_email;
}

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

var str = [];
for (var name in data) {
    str.push(data[name]);
}
str.push(password);
data['sign'] = md5(str.join(";"));

if (data['uid'] != '' && password != '') {
    var req = new XMLHttpRequest();
    req.open("POST", "https://stopforumspam.subnets.ru/api/query.php", false);
    req.setRequestHeader('Content-Type', 'application/json');
    req.addEventListener("load", function () {
        if (req.status < 400)
            alert(req.responseText);
    });
    req.send(JSON.stringify(data));
}
