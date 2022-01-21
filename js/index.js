function buildItem(item) {
  const newDiv = document.createElement('div');
  const newElement = document.createElement('li');
  const elementText = document.createElement('p');
  elementText.textContent = item;
  elementText.classList = 'textEl';
  const checkButton = document.createElement('button');
  checkButton.textContent = 'Check';
  checkButton.classList = 'checkButton';
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList = 'deleteButton';
  newElement.appendChild(elementText);
  newElement.appendChild(checkButton);
  newElement.appendChild(deleteButton);
  newDiv.appendChild(newElement);

  return newDiv;
}

$('.agregar').on('click', function (e) {
  e.preventDefault();
  const item = $('#newText').val();
  $('.Lista').append(buildItem(item));
});

$('.Lista').on('click', '.checkButton', function (e) {
  $(this).parent().css('text-decoration', 'line-through');
});

$('.Lista').on('click', '.deleteButton', function (e) {
  $(this).parent().remove();
});
