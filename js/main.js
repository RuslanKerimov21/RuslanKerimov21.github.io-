document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelector('.courses-tabs');
	const tabsBtn = document.querySelectorAll('.courses-tabs__link');
	const tabsContent = document.querySelectorAll('.courses-tabs__content');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('courses-tabs__link')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => {el.classList.remove('link-active')});
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('link-active');
				tabsHandler(tabsPath);
			}
		});
	}
	const tabsHandler = (path) => {
		tabsContent.forEach(el => {el.classList.remove('courses-tabs__conten___active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('courses-tabs__conten___active');
	};
});


$('#add-cours, #close').on('click', function (event){
	$('.modal').toggleClass('active');
    $('.modal-overlay').toggleClass('active');
});


if (window.File && window.FileReader && window.FileList && window.Blob) {
    $('#file_post_cover').on('change', function(evt){
      handleFileSelect(evt);
      $(this).closest('.uploader').removeClass('no-files');
    });
    $('.remove_post_cover a').click(function(){
      $(this).closest('.uploader').addClass('no-files');
      var input = $('#file_post_cover');
      input.replaceWith(input.val('').clone(true));
    });
}else{
    alert('The File APIs are not fully supported in this browser.');
}
function handleFileSelect(evt) {
    var files = evt.target.files;
    for (var i = 0, f; f = files[i]; i++) {
    if (!f.type.match('image.*')) {
		continue;
    }
    var reader = new FileReader();
        reader.onload = (function(theFile) {
          return function(e) {
            document.getElementById('post_cover_previev').src = e.target.result;
          };
        })(f);
        reader.readAsDataURL(f);
    }
}

const block = document.querySelector('.courses-tabs__content');
function addList(){
  const content = block.querySelector('.courses-list');
  // let img = document.querySelector(".image").src;
  let name = document.querySelector(".name").value;
  let time = document.querySelector(".time").value;
  const cardElement = document.createElement('li');
  cardElement.classList.add('wrapper');
  cardElement.innerHTML = `
    <div class="logo-card">
				<img class="card-img" src="img/photoshop.svg" alt="img">
		</div>
		<div class="card-title__card">
				<h4 class="card-name">
						${name}
				</h4>
				<p class="card-descr">by David Green</p>
			</div>
			<div class="card-time">
					${time}
			</div>
			<div class="card-state">
					4,7
			</div>
			<button class="card-button">
					View course
			</button>
  `;
  content.append(cardElement);
}
