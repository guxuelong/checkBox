/**
 * UI组件：checkBox
 *
 **/

;
(function($) {

	$.checkBox = function() {
		var kid = ".kid";
		var pa = ".pa";
		var gpa = ".gpa";
		var chk_s = ".checkbox-s";
		var selected = "checkbox-s";
		var t_kid = $(kid);
		var t_pa = $(pa);
		var t_gpa = $(gpa);
		// 子级
		t_kid.on('tap', function() {
				var that = $(this);
				that.hasClass(selected) ? that.removeClass(selected) : that.addClass(selected);
				var section = that.closest("section");
				section.find(kid).length == section.find(kid + chk_s).length ? section.find(pa).addClass(selected) : section.find(pa).removeClass(selected);
				allSeclect();
			})
			// 父级
		t_pa.on('tap', function() {
				var that = $(this);
				var section = that.closest("section");
				that.hasClass(selected) ? section.find(chk_s).removeClass(selected) : (section.find(kid).addClass(selected), section.find(pa).addClass(selected));
				allSeclect();
			})
			// 主父级
		t_gpa.on('tap', function() {
			var that = $(this);
			that.hasClass(selected) ? (t_kid.removeClass(selected), t_pa.removeClass(selected), that.removeClass(selected)) : (t_kid.addClass(selected), t_pa.addClass(selected), that.addClass(selected))
		})

		function allSeclect() {
			return t_kid.length == $(kid + chk_s).length ? t_gpa.addClass(selected) : t_gpa.removeClass(selected);
		}
	}
})(Zepto)