var posts=["posts/29513.html","posts/35392.html","posts/55151.html","posts/52064.html","posts/35821.html","posts/33834.html","posts/30091.html","posts/23287.html","posts/35916.html","posts/11052.html","posts/35966.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}