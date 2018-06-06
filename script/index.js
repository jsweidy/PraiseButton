class PraiseButton {
	constructor(num, element) {
		this.num = num;
		this.element = element;
	}

	doClick() {
		this.element.click(() => {
			this.num = add(this.num);
			$('.num').addClass("hover").text(this.num);
			$('.add').show().html("<em class='add-animation'>+1</em>");
			$('.finger').html("<img src='Images/yizan.png' class='animation' />");
		});
	}
}
class Thumb extends PraiseButton{
	constructor(num,element){
		super(num,element);
	}
}
export default {Thumb};