get '/users' do
  @users = User.all
  erb :list_users
end

get '/users/:user_id' do
  @user = User.find(params[:user_id])
  erb :show_user
end

get '/users/:user_id/posts' do
  @user = User.find(params[:user_id])
  @show_posts = true
  erb :show_user, layout: false
end

post '/users' do
  User.find_or_create_by_username(params[:user])
  redirect '/posts'
end
