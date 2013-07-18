$(document).ready(function() {
	/* add path classes to body tag */
	baseClass($('body'))
})

/* BaseClass */
/* take document path and add each level as a class attribute on the object passed in */
function baseClass(o){
	if(typeof String.prototype.trim !== 'function') {String.prototype.trim = function(){return this.replace(/^\s+|\s+$/g, '')}}
	var cls=document.location.toString().split(document.domain)[1].toString().replace(/-|\s/g, "").replace(/\//g,' ').trim();
	o.attr('class') ? o.attr('class',o.attr('class')+' '+cls) : o.attr('class',cls)
}