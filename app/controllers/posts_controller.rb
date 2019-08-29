class PostsController < ApplicationController
  def index
  end
  
  def new
    @post = Post.new
  end

  def create
    @post = Post.create params.require(:post).permit(:title, :comment, images: [])
    redirect_to @post
  end

  def show
    @post = Post.find(params[:id])
    # @post = Post.where()
  end

  def inquiry
  end

  def reports
  end

  # private
  #   # paramsから欲しいデータのみ抽出
  #   def post_params
  #     params.require(:post).permit(:title, :comment, images: [])
  #   end
end
