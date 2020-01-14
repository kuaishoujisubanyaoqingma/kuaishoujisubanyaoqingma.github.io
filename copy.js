
	/* 第一个 */
    var c001 = document.getElementById("yao001");
    var s001=c001.innerHTML;
    var clipboard = new Clipboard('.btn001', {
        text: function() {
            return s001;
        }
    });

    clipboard.on('success', function(e) {
        alert("邀请码复制成功");
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
	/* 第二个 */
	var c002 = document.getElementById("yao002");
    var s002=c002.innerHTML;
    var clipboard = new Clipboard('.btn002', {
        text: function() {
            return s002;
        }
    });

    clipboard.on('success', function(e) {
        alert("邀请码复制成功");
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
	
	/* 第三个 */	
	var c003 = document.getElementById("yao003");
    var s003=c003.innerHTML;
    var clipboard = new Clipboard('.btn003', {
        text: function() {
            return s003;
        }
    });

    clipboard.on('success', function(e) {
        alert("邀请码复制成功");
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });
