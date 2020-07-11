class TutosController < ApplicationController

  def create
    tuto = Tuto.new(tuto_params)
    if tuto.save
      render json: { success: true }
      tuto.liked_by current_user
    else
      render json: { success: false, errors: restaurant.errors.messages }, status: :unprocessable_entity
    end

  end

  private
  
  def tuto_params
    params.require(:tuto).permit(:title, :url, :snippet_url, :publisher, :published_date)
  end

end
