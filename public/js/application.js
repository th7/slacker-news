Handlers = {
  Click: {
    a: function(event) {
      jQ = $(this)
      if (jQ.attr('class') == 'reply') {
        toShowId = jQ.next('div').attr('id');
        Handlers.Click.showReply(toShowId);
        if (jQ.text() == 'reply') {
          jQ.text('cancel');
        } else {
          jQ.text('reply');
        }
      } else if (jQ.attr('class') == 'get-replies') {
        url = this.href;
        event.preventDefault();
        Handlers.Click.getReplies(url);
      } else if (jQ.attr('class') == 'hide-replies') {
        event.preventDefault();
        jQ.next('div.nested').toggle();
        jQ.text('show replies');
        jQ.removeClass('hide-replies');
        jQ.addClass('get-replies');
      } else if (jQ.attr('class') == 'get-posts') {
        url = this.href;
        event.preventDefault();
        Handlers.Click.getPosts(url);
      }
    },

    showReply: function(toShowId) {
      $('#' + toShowId).toggle();//removeClass('hidden');
    },

    getReplies: function(url) {
      $.get(url, Handlers.Response.replies);
    },

    getPosts: function(url) {
      $.get(url, Handlers.Response.posts);
    }

  },

  Response: {
    replies : function(data) {
      newElem = $(data).filter('.posts');
      toUpdateId = newElem.attr('id');
      $(document).find('#' + toUpdateId).html(newElem.html());
    },

    posts: function(data) {
      debugger;
      newElem = $(data).filter('.users');
      $(document).find('.users').html(newElem.html());
    }
  }
}

$(document).ready(function() {
  $(document).on('click', 'a', Handlers.Click.a);
});
