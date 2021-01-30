module Api::V1
  class TasksController < ApplicationController

    def index
      @tasks = Task.all.order(created_at: :desc)
      render json: @tasks
    end

    def show
      @tasks = Task.find(params[:id])
      render json: @tasks
    end

    # def new
    #   @task = Task.new
    # end

    def create
      @tasks = Task.new(task_params)

      if @tasks.save
        render json: @tasks, status: :created
        # redirect_to @task
      else
        render json: @task.errors, status: :unprocessable_entity
        # old
        # render :new
      end
    end

    # def edit
    #   @task = Task.find(params[:id])
    # end

    def update
      @tasks = Task.find(params[:id])

      if @tasks.update(task_params)
        render json: @tasks
      else
        render json: @tasks.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @tasks = Task.find(params[:id])
      @tasks.destroy
    end

    def search
      # if params[:title].blank?  
      #   # redirect_to(api_v1_tasks_path, alert: "Empty field!") and return  
      # else  
        logger.debug params
      @search = params[:title] == nil ? '' : params[:title].downcase
      @tags = params[:category] == nil ? '' : params[:category].downcase
      @results = Task.all.where("(lower(title) LIKE :search OR lower(description) LIKE :search) AND lower(category) LIKE :tags", {search: "%#{@search}%", tags: "%#{@tags}%"}) 

      render json: @results
      # end
    end
    ###############

    private
      
    def task_params
      params
        .require(:task)
        .permit(:title, :description, :category, :importance, :deadline, :collaborators)
    end
    
  end
end
