class Api::PokemonController < ApplicationController

  def index
    @pokemon = Pokemon.all
    respond_to do |format|
      format.json{
        render :index
      }
      format.html {
        redirect_to root_url
      }
    end
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end


end
