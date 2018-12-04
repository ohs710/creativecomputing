$('#dorm').previewer({
  trigger: 'hover',
  type: 'image',
  src: 'IMG_9094.jpg'
});

$('#dorm').previewer({
  containerCSS: {
    "border": "1px solid #999",
    "background-color": "#FFEE88",
    "border-radius": "5px",
    "padding": "6px"
  };
}
$('#dorm').previewer({
  beforeShow: function(){},
  onShow: function(){}
});

