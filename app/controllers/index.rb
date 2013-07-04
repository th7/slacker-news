
get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/sign_in' do
  erb :sign_in
end

get '/sign_up' do
  erb :sign_up
end

post '/sign_in' do
  p params
  @user = User.authenticate(params[:username], params[:password])
  if @user
    session[:user_id] = @user.id
  end
  redirect '/'
end
