$("#chat_input").on('keypress', function(evt) {
	var msg = $(this).val();
	if (evt.which == 13 && msg) {
		var dom = '<div class="ours"><span class="thumb"></span><span class="msg">' + msg + '</span></div>';
		$(".convo").append(dom);
		$(this).val('');
  }
});