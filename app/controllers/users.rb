post '/users' do
  User.find_or_create_by_username(params[:user])
  redirect '/posts'
end
