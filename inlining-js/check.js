javascript:(function inline(){
    window.StopForumSpam=window.StopForumSpam || {};
    window.StopForumSpam={
        origin:window.location.protocol + '//' + window.location.host,loaderVersion:1.1,timedOut:true
    };

    var md5s=document.createElement('script');
    md5s.src='https://ros-tel.github.io/stopforumspam/inlining-js/md5.js';
    document.body.appendChild(md5s);

    var check=document.createElement('script');
    check.src='https://ros-tel.github.io/stopforumspam/inlining-js/phpBB_check.js';
    document.body.appendChild(check);
})();
