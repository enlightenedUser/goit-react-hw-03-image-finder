(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(7),c=n.n(r),o=(n(17),n(3)),s=n(4),i=n(6),l=n(5),u=(n(18),n(0)),d=function(e){var t=e.galleryList;return 0!==t.length?t.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("img",{"data-largeimageurl":e.largeImageURL,className:"ImageGalleryItem-image",alt:e.tags,src:e.webformatURL})},e.id)})):Object(u.jsx)("h1",{children:"Type something..."})},h=function(e){var t=e.galleryList,n=e.fancyBox;return Object(u.jsx)("ul",{onClick:n,className:"ImageGallery",children:Object(u.jsx)(d,{galleryList:t})})},m=function(e){var t=e.onSubmintHandle;return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},g=function(e){var t=e.onBtnClickHandle;return Object(u.jsx)("button",{className:"Button",onClick:t,type:"button",children:"Load more"})},j=n(11),p=n.n(j),b=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(u.jsx)(p.a,{className:"Loader",type:"BallTriangle",color:"#00BFFF",height:100,width:100,timeout:1e4})}}]),n}(a.Component),y=document.getElementById("modal-root"),f=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onEscKeydown=function(t){"Escape"===t.code&&e.props.closeModal()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscKeydown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscKeydown)}},{key:"render",value:function(){return Object(r.createPortal)(Object(u.jsx)("div",{className:"Overlay",onClick:this.props.closeModal,children:Object(u.jsx)("div",{className:"Modal",children:this.props.children})}),y)}}]),n}(a.Component),O=n(9),v=n.n(O),x=n(10),w=n(12),L=function(){var e=Object(w.a)(v.a.mark((function e(t){var n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({isLoading:!0}),e.prev=1,e.next=4,fetch("https://pixabay.com/api/?q=".concat(t.state.qwery,"&page=").concat(t.state.currentPage,"&key=").concat("21310790-6d6680180298903e41d8cd1c1","&image_type=photo&orientation=horizontal&per_page=").concat(12));case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,t.setState({galleryList:[].concat(Object(x.a)(t.state.galleryList),Object(x.a)(a.hits)),isLoading:!1}),e.next=15;break;case 11:throw e.prev=11,e.t0=e.catch(1),console.log(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),k=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={qwery:"",currentPage:1,galleryList:[],isLoading:!1,isModalOpen:!1,largeimageurl:""},e.onSubmintHandle=function(t){t.preventDefault(),e.setState({galleryList:[],qwery:t.target.children[1].value,currentPage:1})},e.fancyBox=function(t){e.setState({largeimageurl:t.target.getAttribute("data-largeimageurl"),isModalOpen:!0})},e.onBtnClickHandle=function(t){e.setState({currentPage:t.currentPage+1})},e.closeModal=function(){e.setState({isModalOpen:!1})},e}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){t.qwery!==this.state.qwery&&L(this),t.currentPage!==this.state.currentPage&&L(this),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{onSubmintHandle:this.onSubmintHandle}),Object(u.jsx)(h,{galleryList:this.state.galleryList,fancyBox:this.fancyBox}),0!==this.state.galleryList.length&&!this.state.isLoading&&Object(u.jsx)(g,{onBtnClickHandle:function(){e.onBtnClickHandle(e.state)}}),this.state.isLoading&&Object(u.jsx)(b,{}),this.state.isModalOpen&&Object(u.jsx)(f,{closeModal:this.closeModal,children:Object(u.jsx)("img",{src:this.state.largeimageurl,alt:"pic"})})]})}}]),n}(a.Component);c.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.d1e9432d.chunk.js.map