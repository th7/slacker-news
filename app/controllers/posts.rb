get '/posts' do
  erb :list_posts
end

post '/posts' do
  Post.create(params[:post])
  redirect '/posts'
end

get '/posts/:post_id' do
  @post = Post.find(params[:post_id])
  erb :show_post
end

get '/posts/:post_id/replies' do
  @post = Post.find(params[:post_id])
  @show_replies = true
  erb :show_post, layout: false
end

