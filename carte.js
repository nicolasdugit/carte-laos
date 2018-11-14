var map = document.querySelector('#map');
var paths = map.querySelectorAll('.map__image a');
var links = map.querySelectorAll('#collapseListCarte a');
var area_name = document.querySelector('.nom-region');
var area_name2 = document.querySelector('.nom-region2');
var toto = document.querySelector('#collapseListCarte');

var liste_acteur = document.querySelector('.map__list .listeActeur');

liste_acteur.style.display = 'none';

if (NodeList.prototype.forEach === undefined) {
	NodeList.prototype.forEach = function (callback) {
		[].forEach.call(this, callback)
	}
}

var activeArea = function(id, region_name) {
	map.querySelectorAll('.is-active').forEach(function(item) {
		item.classList.remove('is-active');
		area_name.textContent= '';
	})
	if (id !== undefined) {
		document.querySelector('#list-' + id).classList.add('is-active');
		document.querySelector('#region-' + id).classList.add('is-active');
		area_name.textContent = region_name;

	}
}

paths.forEach( function(path) {
	path.addEventListener('mouseenter', function() {
		var id = this.id.replace('region-', '');
		var region_name = this.textContent;
		activeArea(id, region_name);
		$("#collapseListCarte").attr('class', 'collapse show');
	})
	path.addEventListener('click', function()
	{
		var region_name = this.textContent;
		liste_acteur.style.display = '';
		area_name2.textContent = region_name;

	})
});

links.forEach( function(link) {
	link.addEventListener('mouseenter', function() {
		var id = this.id.replace('list-', '');
		var region_name = this.textContent;
		activeArea(id, region_name);
	})
	link.addEventListener('click', function()
	{
		var region_name = this.textContent;
		liste_acteur.style.display = '';
		area_name2.textContent = region_name;

	})
});

map.addEventListener('mouseover', function() {
	activeArea();
})

map.addEventListener('mouseleave', function() {
	liste_acteur.style.display = 'none';
	area_name2.textContent= '';
	$("#collapseListCarte").attr('class', 'collapse');
})

