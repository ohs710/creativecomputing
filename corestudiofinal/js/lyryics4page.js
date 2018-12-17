
/*Here's a bunch of animations*/

@keyframes zoom{
	0%{transform: scale(1);}
	50%{transform: scale(1.1);}
	100%{transform: scale(1);}
}
@-webkit-keyframes zoom{
	0%{-webkit-transform: scale(1);}
	50%{-webkit-transform: scale(1.1);}
	100%{-webkit-transform: scale(1);}
}

@keyframes bounce{
	0%{transform: translateY(0px);}
	50%{transform: translateY(1px);}
	100%{transform: translateY(0px);}
}
@-webkit-keyframes bounce{
	0%{-webkit-transform: translateY(0px);}
	50%{-webkit-transform: translateY(1px);}
	100%{-webkit-transform: translateY(0px);}
}

@keyframes squash{
	0%{transform:scale(1,1);}
	50%{transform:scale(1,1.2);}
	100%{transform:scale(1,1);}
}
@-webkit-keyframes squash{
	0%{-webkit-transform:scale(1,1);}
	50%{-webkit-transform:scale(1,1.2);}
	100%{-webkit-transform:scale(1,1);}
}

@keyframes rot{
	0%{transform: rotate(9);}
	50%{transform: rotate(-9);}
	100%{transform: rotate(9);}
}
@-webkit-keyframes rot{
	0%{-webkit-transform: rotate(9);}
	50%{-webkit-transform: rotate(-9);}
	100%{-webkit-transform: rotate(9);}
}

@keyframes fade2{
	0%{
		transform: scale(.8);
		opacity: .7;
	}
	50%{
		transform: scale(1);
		opacity: 1;
	}
	100%{
		transform: scale(.8);
		opacity: .7;
	}
}
@-webkit-keyframes fade2{
	0%{
		-webkit-transform: scale(.8);
		opacity: .7;
	}
	50%{
		-webkit-transform: scale(1);
		opacity: 1;
	}
	100%{
		-webkit-transform: scale(.8);
		opacity: .7;
	}
}
