document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('input');
    const addButton = document.getElementById('addbut');
    const list = document.querySelector('.add-content');

    // Function to create a new list item
    function createNewToDo() {
        // Create a new list item
        const li = document.createElement('li');
        const inputValue = input.value.trim(); // Trim whitespace from input value
        const text = document.createTextNode(inputValue);

        // Check if input field is empty
        if (!inputValue) {
            alert('You must write something!');
            return;
        }

        // Add text to the list item
        li.appendChild(text);

        // Add the list item to the list
        list.appendChild(li);

        // Clear the input field after adding the item
        input.value = '';

        // Add event listener to delete the item when clicked
        li.addEventListener('click', function () {
            this.remove();
        });

        // Add event listener to mark item as checked
        li.addEventListener('click', function () {
            this.classList.toggle('checked');
        });
    }

    // Event listener for the Add button
    addButton.addEventListener('click', createNewToDo);

    // Event listener for the Enter key to add a new item
    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            createNewToDo();
        }
    });
});
