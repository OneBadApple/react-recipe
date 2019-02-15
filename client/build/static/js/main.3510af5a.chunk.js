(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){e.exports=a(302)},123:function(e,t,a){},144:function(e,t,a){},146:function(e,t,a){},148:function(e,t,a){},157:function(e,t,a){},266:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(24),c=a.n(r),l=(a(123),a(305)),s=a(306),o=a(307),p=a(25),d=a(6),u=a(7),h=a(9),m=a(8),f=a(10),g=a(15),v=a.n(g),E={getRecipes:function(){return v.a.get("/api/recipe")},getRecipe:function(e){return v.a.get("/api/recipe/"+e)},deleteRecipe:function(e){return v.a.delete("/api/recipe/"+e)},saveRecipe:function(e){return v.a.post("/api/recipe",e)},updateRecipe:function(e,t){return v.a.put("/api/recipe/"+e,t)},uploadRecipe:function(e,t){return v.a.post("/api/recipe/"+e,t)}},b=function(e){return i.a.createElement("div",{className:"form-group"},i.a.createElement("input",Object.assign({className:"form-control"},e)))},y=(a(144),a(146),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={i:a.props.i,left:[],right:[]},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.setState({left:this.state.i.slice(0,this.state.i.length/2),right:this.state.i.slice(this.state.i.length/2,this.state.i.length)})}},{key:"render",value:function(){return i.a.createElement("div",{class:"ing-table"},i.a.createElement("div",{class:"ingredients"},i.a.createElement("ul",{class:"icon1"},this.state.right.map(function(e){return i.a.createElement("li",{class:"li-s"},i.a.createElement("i",{class:"fas fa-plus"}),e)}))),i.a.createElement("div",{class:"ingredients"},i.a.createElement("ul",{class:"icon2"},this.state.left.map(function(e){return i.a.createElement("li",{class:"li-s"},i.a.createElement("i",{class:"fas fa-plus"}),e)}))))}}]),t}(n.Component)),C=(a(148),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipe:a.props.recipe},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{class:"detail-container"},i.a.createElement("div",{class:"ing-row"},i.a.createElement("h4",{class:"ingredients-title"},"Ingredients:"),i.a.createElement("div",{class:"detail-container"},i.a.createElement(y,{i:this.state.recipe.ingredientList}))),i.a.createElement("div",{class:"attr-row"},i.a.createElement("div",{class:"row-title"},i.a.createElement("i",{class:"fas fa-clock"}),this.state.recipe.cookTime),i.a.createElement("div",{class:"row-title"},i.a.createElement("i",{class:"fa fa-exclamation-triangle"}),this.state.recipe.difficulty),i.a.createElement("div",{class:"row-title"},i.a.createElement("i",{class:"fas fa-hamburger"}),this.state.recipe.servings)),i.a.createElement("hr",null),i.a.createElement("div",{class:"instruction-container"},i.a.createElement("div",{class:"title-container"},i.a.createElement("h3",{class:"instruction-title"},"Instructions:")),i.a.createElement("div",{class:"instructions"},i.a.createElement("ol",{class:"in"},this.state.recipe.instructions.map(function(e){return i.a.createElement("div",{class:"instruction"},i.a.createElement("li",null,e))})))))}}]),t}(n.Component)),O=(a(67),a(46)),j=a.n(O),k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipe:{},id:"",title:"",cookTime:"",difficulty:"",servings:"",ingredientList:"",instructions:"",file:null,selectedFile:null,insCount:null},a.fileSelectedHandler=function(e){var t=URL.createObjectURL(e.target.files[0]);a.setState({file:t,selectedFile:e.target.files[0]})},a.handleInputChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(p.a)({},n,i))},a.handleUpload=function(){var e=new FormData;e.append("file",a.state.selectedFile),v.a.post("/api/uploads/",e).then(function(e){a.setState({selectedFile:e.data.path})})},a.handleFormSubmit=function(e){e.preventDefault(),E.updateRecipe(a.state.id,{title:a.state.title,cookTime:a.state.cookTime,difficulty:a.state.difficulty,servings:a.state.servings,ingredientList:a.state.ingredientList.split(","),instructions:a.state.instructions.split("\n"),imgUrl:a.state.selectedFile}).catch(function(e){return console.log(e)}),a.props.parentMethod(),window.location.reload()},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){this.setState({recipe:this.props.recipe,id:this.props.recipe._id,title:this.props.recipe.title,cookTime:this.props.recipe.cookTime,difficulty:this.props.recipe.difficulty,servings:this.props.recipe.servings,ingredientList:this.props.recipe.ingredientList.join(","),instructions:this.props.recipe.instructions.join("\n"),file:this.props.recipe.imgUrl,selectedFile:this.props.recipe.img,insCount:this.props.recipe.instructions.length})}},{key:"render",value:function(){return i.a.createElement("div",{class:"form-container"},i.a.createElement("h4",{class:"form-title"},"Edit Recipe:"),i.a.createElement("form",null,i.a.createElement(b,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),i.a.createElement(b,{value:this.state.cookTime,onChange:this.handleInputChange,name:"cookTime",placeholder:"Cook Time (required)"}),i.a.createElement(b,{value:this.state.difficulty,onChange:this.handleInputChange,name:"difficulty",placeholder:"Difficulty"}),i.a.createElement(b,{value:this.state.servings,onChange:this.handleInputChange,name:"servings",placeholder:"Servings"}),i.a.createElement("textarea",{class:"ing-text",value:this.state.ingredientList,onChange:this.handleInputChange,name:"ingredientList",placeholder:"Ingredients (Separate each with a comma)"}),i.a.createElement(j.a,{rows:this.state.insCount,defaultValue:this.state.instructions,class:"ins-text",onChange:this.handleInputChange,name:"instructions",placeholder:"Instructions (Separate each with a new line!)"}),i.a.createElement("div",null,i.a.createElement("img",{src:this.state.file,width:"30%"}),i.a.createElement("input",{type:"file",name:"recfile",onChange:this.fileSelectedHandler}),i.a.createElement("button",{class:"btn-primary",type:"button",onClick:this.handleUpload},"Upload")),i.a.createElement("hr",null),i.a.createElement("button",{class:"btn btn-primary save",disabled:!this.state.title,onClick:this.handleFormSubmit},"Save changes")))}}]),t}(n.Component),w=a(47),S=a.n(w),R=(a(157),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={pic:a.props.pic,image:""},a.loadPhotos=function(){return v.a.get("api/uploads/"+a.state.pic)},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.pic&&this.loadPhotos().then(function(t){return e.setState({image:t.data})})}},{key:"render",value:function(){for(;""==this.state.image||null==this.state.pic;)return i.a.createElement("img",{class:"thumbnail",src:"/default-recipe-big.png"});return i.a.createElement("img",{class:"thumbnail",src:"data:image/jpeg;base64,".concat(this.state.image)})}}]),t}(n.Component)),I=a(105),L=a.n(I),T=a(110),M=a.n(T),x=a(108),F=a.n(x),U=a(109),D=a.n(U),A=a(107),_=a.n(A),H=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipe:a.props.recipe,open:!1},a.handleClose=function(){a.setState({open:!1})},a.handleClickOpen=function(){a.setState({open:!0})},a.handleDelete=function(){a.props.deleteMethod(a.state.recipe._id),a.setState({open:!1}),a.props.parentMethod()},a.handleCart=function(){a.props.addToCart(a.state.recipe.ingredientList)},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t="collapse"+this.state.recipe._id,a="#collapse"+this.state.recipe._id,n="edit"+this.state.recipe._id,r="#edit"+this.state.recipe._id;return i.a.createElement("div",{class:"accordion",id:"accordionExample"},i.a.createElement("div",{class:"card"},i.a.createElement("div",null,i.a.createElement("div",{class:"card-header",id:"headingOne"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"desc"},i.a.createElement(R,{pic:this.state.recipe.imgUrl})),i.a.createElement("h4",{class:"mb-0"},i.a.createElement("button",{class:"btn btn-link collapsed title",type:"button","data-toggle":"collapse","data-target":a,"aria-expanded":"false","aria-controls":t},this.state.recipe.title)),i.a.createElement("div",{class:"button-column"},i.a.createElement("div",{class:"button-row"},i.a.createElement("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:this.handleClickOpen},i.a.createElement("i",{class:"far fa-times-circle"})),i.a.createElement("button",{type:"button",class:"btn btn-outline-warning btn-sm",onClick:this.handleCart},i.a.createElement("i",{class:"fas fa-cart-plus"})),i.a.createElement("button",{type:"button",class:"btn btn-outline-primary collapsed btn-sm","data-toggle":"collapse","data-target":r,"aria-expanded":"false","aria-controls":n},i.a.createElement("i",{class:"far fa-edit"}))),i.a.createElement(L.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},i.a.createElement(_.a,{id:"alert-dialog-title"},"Delete Recipe?"),i.a.createElement(F.a,null,i.a.createElement(D.a,{id:"alert-dialog-description"},"Are you sure you want to permanently delete this recipe?")),i.a.createElement(M.a,null,i.a.createElement(S.a,{onClick:this.handleClose,color:"primary"},"Disagree"),i.a.createElement(S.a,{onClick:function(){e.handleDelete()},color:"primary",autoFocus:!0},"Agree")))))),i.a.createElement("div",{id:t,class:"collapse","aria-labelledby":"headingOne","data-parent":"#accordionExample"},i.a.createElement("div",{class:"card-body"},i.a.createElement(C,{recipe:this.state.recipe}))),i.a.createElement("div",{id:n,class:"collapse","aria-labelledby":"headingOne","data-parent":"#accordionExample"},i.a.createElement("div",{class:"card-body"},i.a.createElement(k,{recipe:this.state.recipe,parentMethod:function(){e.props.parentMethod()}}))))))}}]),t}(n.Component),W=(a(56),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipes:[],title:"",cookTime:"",difficulty:"",servings:"",ingredientList:"",instructions:"",file:null,fileSelected:null},a.fileSelectedHandler=function(e){var t=URL.createObjectURL(e.target.files[0]);a.setState({fileSelected:e.target.files[0],file:t})},a.handleInputChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(p.a)({},n,i))},a.handleUpload=function(){var e=new FormData;e.append("file",a.state.selectedFile),v.a.post("/api/uploads/",e).then(function(e){a.setState({fileSelected:e.data.path})})},a.handleFormSubmit=function(e){e.preventDefault(),E.saveRecipe({title:a.state.title,cookTime:a.state.cookTime,difficulty:a.state.difficulty,servings:a.state.servings,ingredientList:a.state.ingredientList.split(","),instructions:a.state.instructions.split("\n"),imgUrl:a.state.fileSelected}).catch(function(e){return console.log(e)}),a.props.parentMethod()},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{class:"form-container"},i.a.createElement("h4",{class:"form-title"},"New Recipe:"),i.a.createElement("form",null,i.a.createElement(b,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),i.a.createElement(b,{value:this.state.cookTime,onChange:this.handleInputChange,name:"cookTime",placeholder:"Cook Time (required)"}),i.a.createElement(b,{value:this.state.difficulty,onChange:this.handleInputChange,name:"difficulty",placeholder:"Difficulty"}),i.a.createElement(b,{value:this.state.servings,onChange:this.handleInputChange,name:"servings",placeholder:"Servings"}),i.a.createElement("textarea",{class:"ing-text",value:this.state.ingredientList,onChange:this.handleInputChange,name:"ingredientList",placeholder:"Ingredients (Separate each with a comma)"}),i.a.createElement(j.a,{defaultValue:this.state.instructions,class:"ins-text",onChange:this.handleInputChange,name:"instructions",placeholder:"Instructions (Separate each with a new line!)"}),i.a.createElement("div",null,i.a.createElement("img",{src:this.state.file,width:"30%"}),i.a.createElement("input",{type:"file",onChange:this.fileSelectedHandler}),i.a.createElement("button",{class:"btn-primary",type:"button",onClick:this.handleUpload},"Upload")),i.a.createElement("hr",null),i.a.createElement("button",{class:"btn btn-primary save",disabled:!this.state.title,onClick:this.handleFormSubmit},"Submit Recipe")))}}]),t}(n.Component)),q=a(303),N=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={key:""},a.handleFilter=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(p.a)({},n,i)),a.props.parentMethod(i)},a.sendCart=function(){console.log(a.props.displayCart())},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("nav",{class:"navbar navbar-light recipe-header"},i.a.createElement("a",{class:"navbar-brand"}," MomoBooks"),i.a.createElement("div",{class:"row"},i.a.createElement("a",{class:"nav-item nav-link",href:"/"},"Home"),i.a.createElement(q.a,{to:{pathname:"/cart",state:{cart:this.props.displayCart()}}},"View Cart"),i.a.createElement("a",{class:"nav-item nav-link",onClick:function(){e.props.clearCart()}},"Clear Cart")),i.a.createElement("input",{class:"form-control mr-sm-2",value:this.state.key,onChange:this.handleFilter,name:"key",type:"filter",placeholder:"Filter by Keyword","aria-label":"Search"}))}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipes:[],filteredRecipes:[],cart:[]},a.filterRecipes=function(e){var t=a.state.recipes;t=t.filter(function(t){return-1!==t.title.toLowerCase().indexOf(e.toLowerCase())}),a.setState({filteredRecipes:t}),console.log(t)},a.loadRecipes=function(){E.getRecipes().then(a.refreshList)},a.handleInputChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(p.a)({},n,i))},a.refreshList=function(e){return a.setState({recipes:e.data,filteredRecipes:e.data})},a.deleteRecipe=function(e){E.deleteRecipe(e),a.setState({recipes:a.state.recipes.filter(function(t){return t._id!==e}),filteredRecipes:a.state.filteredRecipes.filter(function(t){return t._id!==e})}),a.loadRecipes()},a.addToCart=function(e){console.log(e),a.setState({cart:a.state.cart.concat(e)})},a.displayCart=function(){return a.state.cart},a.clearCart=function(){a.setState({cart:[]})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadRecipes()}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(N,{parentMethod:this.filterRecipes,displayCart:this.displayCart,clearCart:function(){e.clearCart()}}),i.a.createElement("div",{class:"app-container"},i.a.createElement("div",{class:"card-container"},this.state.filteredRecipes.map(function(t){return i.a.createElement(H,{key:t._id,recipe:t,addToCart:function(t){e.addToCart(t)},parentMethod:function(){e.loadRecipes()},deleteMethod:function(t){e.deleteRecipe(t)}})})),i.a.createElement("div",{class:"card"},i.a.createElement("div",{class:"card-header"},i.a.createElement("h4",{class:"mb-1"},i.a.createElement("button",{class:"btn btn-link collapsed title",type:"button","data-toggle":"collapse","data-target":"#add","aria-expanded":"false","aria-controls":"add"},"+ Add New recipe")),i.a.createElement("div",{id:"add",class:"collapse"},i.a.createElement("div",{class:"card-body"},i.a.createElement(W,{parentMethod:function(){e.loadRecipes()}})))))),i.a.createElement("div",{class:"recipe-footer"},i.a.createElement("div",{class:"footer-info"},"miso-spoon@github for the source code")))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={cart:[]},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){console.log("Cart state: "+this.props.location.state.cart),this.setState({cart:this.props.location.state.cart})}},{key:"render",value:function(){return i.a.createElement("div",{class:"row"},this.state.cart)}}]),t}(n.Component),J=(a(266),a(304)),P=function(){return i.a.createElement(l.a,null,i.a.createElement("div",null,i.a.createElement(J.a,null),i.a.createElement(s.a,null,i.a.createElement(o.a,{exact:!0,path:"/",component:B}),i.a.createElement(o.a,{exact:!0,path:"/cart",component:V}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(300);c.a.render(i.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){},67:function(e,t,a){}},[[118,2,1]]]);
//# sourceMappingURL=main.3510af5a.chunk.js.map