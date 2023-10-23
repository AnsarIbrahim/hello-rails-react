class Api::GreetingsController < ApplicationController
  def index
    @greetings = Message.all.sample.text
    render json: { message: @greetings }
  end
end
