// Função para criar o campo de entrada para o nome da categoria
function createCategoryNameField() {
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Insira o título da categoria";
    input.className = "input_field";
    return input;
}

// Função para criar a div de botões
function createButtonsDiv(createCategoryButton, cancelCategoryButton) {
    var buttonsDiv = document.createElement("div");
    buttonsDiv.className = "category__buttons";
    buttonsDiv.appendChild(createCategoryButton);
    buttonsDiv.appendChild(cancelCategoryButton);
    return buttonsDiv;
}

// Função para criar o botão de confirmar
function createConfirmButton(newCategoryNameField, newCategoryDiv) {
    var button = document.createElement("button");
    button.className = "confirm_button";
    button.innerHTML = "Criar categoria";
    button.addEventListener("click", function() {
        var categoryName = newCategoryNameField.value;
        if (categoryName === "") {
            alert("O nome da categoria não pode ser vazio");
            return;
        }
    });
    return button;
}

// Função para criar o botão de cancelar
function createCancelButton(newCategoryDiv) {
    var button = document.createElement("button");
    button.className = "cancel_button";
    button.innerHTML = "Cancelar";
    button.addEventListener("click", function() {
        newCategoryDiv.remove();
    });
    return button;
}


// Função para inserir a categoria na lista de categorias
function insertCategory(newCategoryNameField, newCategoryDiv, categoryName) {
    newCategoryDiv.removeChild(newCategoryNameField);
    newCategoryDiv.removeChild(newCategoryDiv.querySelector(".category__buttons"));

    var categoryTitle = document.createElement("h2");
    categoryTitle.className = "category__name";
    categoryTitle.innerHTML = categoryName;

    var taskList = document.createElement("ul");
    taskList.className = "list";

    var newTaskButton = document.createElement("button");
    newTaskButton.className = "confirm_button";
    newTaskButton.innerHTML = "Adicionar nova tarefa";
    newTaskButton.autofocus = true;
   
    newTaskButton.addEventListener("click", function() {
        addTask(taskList);
    });


    newCategoryDiv.appendChild(categoryTitle);
    newCategoryDiv.appendChild(taskList);
    newCategoryDiv.appendChild(newTaskButton);
}

// Função principal para adicionar uma nova categoria
function addCategory() {
    var newCategoryDiv = document.createElement("div");
    newCategoryDiv.className = "category";

    var newCategoryNameField = createCategoryNameField();
    var createCategoryButton = createConfirmButton(newCategoryNameField, newCategoryDiv);
    var cancelCategoryButton = createCancelButton(newCategoryDiv);
    var buttonsDiv = createButtonsDiv(createCategoryButton, cancelCategoryButton);

    createCategoryButton.addEventListener("click", function() {
        insertCategory(newCategoryNameField, newCategoryDiv, newCategoryNameField.value);
    });

    newCategoryDiv.appendChild(newCategoryNameField);
    newCategoryDiv.appendChild(buttonsDiv);

    document.querySelector(".categories_section").appendChild(newCategoryDiv);
}


function addTask(taskList){
    var newTask = document.createElement("li");

    var newTaskDiv = document.createElement("div");
    newTaskDiv.className = "task_content";

    var taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.placeholder = "Insira o título da tarefa";
    taskInput.className = "input_field";
    taskInput.autofocus = true;

    var taskButtonsDiv = document.createElement("div");
    taskButtonsDiv.className = "task__buttons";

    var confirmButton = document.createElement("button");
    confirmButton.className = "confirm";
    confirmButton.innerHTML = '<img src="assets/confirm.png" alt="Confirmar">';
    
    var cancelButton = document.createElement("button");
    cancelButton.className = "cancel";
    cancelButton.innerHTML = '<img src="assets/cancel.png" alt="Cancelar">';

    taskButtonsDiv.appendChild(confirmButton);
    taskButtonsDiv.appendChild(cancelButton);

    newTaskDiv.appendChild(taskInput);
    newTaskDiv.appendChild(taskButtonsDiv);

    confirmButton.addEventListener("click", function() {
        var taskName = taskInput.value;
        if (taskName === "") {
            alert("O nome da tarefa não pode ser vazio");
            return;
        }
        newTaskDiv.removeChild(taskInput);
        newTaskDiv.removeChild(taskButtonsDiv);

        taskButtonsDiv.removeChild(confirmButton);
        taskButtonsDiv.removeChild(cancelButton);


        var taskNameElement = document.createElement("h3");
        taskNameElement.innerHTML = taskName;
        
        var editButton = document.createElement("button");
        editButton.innerHTML = '<img src="assets/edit_black.png" alt="Editar a tarefa">';

        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = '<img src="assets/delete_black.png" alt="Deletar a tarefa">';

        taskButtonsDiv.appendChild(editButton);
        taskButtonsDiv.appendChild(deleteButton);

        newTaskDiv.appendChild(taskNameElement);
        newTaskDiv.appendChild(taskButtonsDiv);
    
        newTask.appendChild(newTaskDiv);

        taskList.appendChild(newTask);
    });


    
    
    newTask.appendChild(newTaskDiv);
    taskList.appendChild(newTask);
}

// Adiciona o evento de clique ao botão de criar nova categoria
document.querySelector(".create_category__button").addEventListener("click", addCategory);
