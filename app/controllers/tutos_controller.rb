class TutosController < ApplicationController

  def create
    tuto = Tuto.new(tuto_params)
    if tuto.save
      render json: { success: true }
      tuto.liked_by current_user
    else
      render json: { success: false, errors: tuto.errors.messages }, status: :unprocessable_entity
    end
  end

  def index
    tutos_liked = current_user.votes
    @tutos = []
    tutos_liked.each do | tuto |
      @tutos << Tuto.find(tuto.votable_id)
    end
  end

  private
  
  def tuto_params
    params.require(:tuto).permit(:title, :url, :snippet_url, :publisher, :published_date)
  end

end
