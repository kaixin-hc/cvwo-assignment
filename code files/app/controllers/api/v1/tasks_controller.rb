module Api::V1
  class TasksController < ApplicationController

    def index
      @tasks = Task.all
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
    ###############

    private
      
    def task_params
      params
        .require(:task)
        .permit(:title, :description, :category, :importance, :deadline, :collaborators)
    end
    
  end
end
