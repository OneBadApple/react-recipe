(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(20),r=n.n(c),l=(n(59),n(130)),s=n(133),o=n(132),u=n(12),h=n(3),d=n(4),p=n(6),m=n(5),f=n(7),g=n(13),v=n.n(g),E={getRecipes:function(){return v.a.get("/api/recipe")},getRecipe:function(e){return v.a.get("/api/recipe/"+e)},deleteRecipe:function(e){return v.a.delete("/api/recipe/"+e)},saveRecipe:function(e){return v.a.post("/api/recipe",e)},updateRecipe:function(e,t){return v.a.put("/api/recipe/"+e,t)}},b=function(e){return i.a.createElement("div",{className:"form-group"},i.a.createElement("input",Object.assign({className:"form-control"},e)))},y=function(e){return i.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)},C=(n(80),n(82),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={i:n.props.i,left:[],right:[]},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){this.setState({left:this.state.i.slice(0,this.state.i.length/2),right:this.state.i.slice(this.state.i.length/2,this.state.i.length)})}},{key:"render",value:function(){return i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"ingredients"},i.a.createElement("ul",{class:"icon1"},this.state.right.map(function(e){return i.a.createElement("li",{class:"li-s"},i.a.createElement("i",{class:"fas fa-plus"}),e)}))),i.a.createElement("div",{class:"ingredients"},i.a.createElement("ul",{class:"icon2"},this.state.left.map(function(e){return i.a.createElement("li",{class:"li-s"},i.a.createElement("i",{class:"fas fa-plus"}),e)}))))}}]),t}(a.Component)),w=(n(84),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipe:n.props.recipe},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log(this.state.recipe._id)}},{key:"render",value:function(){return i.a.createElement("div",{class:"detail-container"},i.a.createElement("div",{class:"ing-row"},i.a.createElement("h4",{class:"ingredients-title"},"Ingredients:"),i.a.createElement("div",{class:"detail-container"},i.a.createElement(C,{i:this.state.recipe.ingredientList}))),i.a.createElement("div",{class:"attr-row"},i.a.createElement("div",{class:"row-title"},i.a.createElement("i",{class:"fas fa-clock"}),this.state.recipe.cookTime),i.a.createElement("div",{class:"row-title"},i.a.createElement("i",{class:"fa fa-exclamation-triangle"}),this.state.recipe.difficulty),i.a.createElement("div",{class:"row-title"},i.a.createElement("i",{class:"fas fa-hamburger"}),this.state.recipe.servings)),i.a.createElement("hr",null),i.a.createElement("div",{class:"instruction-container"},i.a.createElement("div",{class:"title-container"},i.a.createElement("h3",{class:"instruction-title"},"Instructions:")),i.a.createElement("div",{class:"instructions"},i.a.createElement("ol",{class:"in"},this.state.recipe.instructions.map(function(e){return i.a.createElement("div",{class:"instruction"},i.a.createElement("li",null,e))})))))}}]),t}(a.Component)),j=(n(35),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipe:{},id:"",title:"",cookTime:"",difficulty:"",servings:"",ingredientList:"",instructions:"",file:null,selectedFile:null},n.fileSelectedHandler=function(e){var t=URL.createObjectURL(e.target.files[0]);console.log(typeof e.target.files[0]),console.log(e.target.files[0]),n.setState({file:t,selectedFile:e.target.files[0]})},n.handleInputChange=function(e){var t=e.target,a=t.name,i=t.value;n.setState(Object(u.a)({},a,i))},n.handleFormSubmit=function(e){e.preventDefault(),E.updateRecipe(n.state.id,{title:n.state.title,cookTime:n.state.cookTime,difficulty:n.state.difficulty,servings:n.state.servings,ingredientList:n.state.ingredientList.split(","),instructions:n.state.instructions.split("\n"),imgUrl:n.state.file,img:n.state.selectedFile}).catch(function(e){return console.log(e)}),n.props.history.push("/")},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=window.location.href.slice(window.location.href.length-24,window.location.href.length);E.getRecipe(t).then(function(n){return e.setState({id:t,recipe:n.data,title:n.data.title,cookTime:n.data.cookTime,difficulty:n.data.difficulty,servings:n.data.servings,ingredientList:n.data.ingredientList.join(","),instructions:n.data.instructions.join("\n"),file:n.data.imgUrl,selectedFile:n.data.img})})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{class:"form-container"},i.a.createElement("h4",null,"Edit Recipe:"),i.a.createElement("form",null,i.a.createElement(b,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),i.a.createElement(b,{value:this.state.cookTime,onChange:this.handleInputChange,name:"cookTime",placeholder:"Cook Time (required)"}),i.a.createElement(b,{value:this.state.difficulty,onChange:this.handleInputChange,name:"difficulty",placeholder:"Difficulty"}),i.a.createElement(b,{value:this.state.servings,onChange:this.handleInputChange,name:"servings",placeholder:"Servings"}),i.a.createElement("textarea",{class:"ing-text",value:this.state.ingredientList,onChange:this.handleInputChange,name:"ingredientList",placeholder:"Ingredients (Separate each with a comma)"}),i.a.createElement("textarea",{class:"ins-text",value:this.state.instructions,onChange:this.handleInputChange,name:"instructions",placeholder:"Instructions (Separate each with a new line!)"}),i.a.createElement("button",{type:"button",class:"btn btn-danger",onClick:function(){e.props.history.push("/")}},i.a.createElement("i",{class:"fas fa-arrow-left"})),i.a.createElement(y,{onClick:this.handleFormSubmit},"Submit Recipe")))}}]),t}(a.Component)),k=(n(87),a.Component,function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipe:n.props.recipe,edit:!1},n.handleEdit=function(){n.setState(function(){return{edit:!0}})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){this.state.recipe._id,this.state.recipe._id;return i.a.createElement("div",{class:"accordion",id:"accordionExample"},i.a.createElement("div",{class:"card"},i.a.createElement("div",null,i.a.createElement("div",{class:"card-body"},i.a.createElement(w,{recipe:this.state.recipe})))))}}]),t}(a.Component)),O=(n(89),function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipes:[]},n.loadRecipes=function(){E.getRecipes().then(function(e){return n.setState({recipes:e.data})}).catch(function(e){return console.log(e)})},n.handleInputChange=function(e){var t=e.target,a=t.name,i=t.value;n.setState(Object(u.a)({},a,i))},n.handleCreate=function(){n.props.history.push("/add")},n.deleteRecipe=function(e){E.deleteRecipe(e),n.setState({recipes:n.state.recipes.filter(function(t){return t._id!==e})})},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.loadRecipes()}},{key:"componentDidUpdate",value:function(){this.loadRecipes()}},{key:"render",value:function(){return i.a.createElement("div",{class:"app-container"},i.a.createElement("div",{class:"card-container"},this.state.recipes.map(function(e){return i.a.createElement(k,{recipe:e})})),i.a.createElement("div",{class:"card"},i.a.createElement("div",{class:"card-header"},i.a.createElement("h4",{class:"mb-1"},i.a.createElement("button",{class:"btn btn-link title",type:"button",onClick:this.handleCreate},"+ Add New recipe")))))}}]),t}(a.Component)),S=function(e){function t(){var e,n;Object(h.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipes:[],title:"",cookTime:"",difficulty:"",servings:"",ingredientList:"",instructions:"",file:null,fileSelected:null},n.fileSelectedHandler=function(e){var t=URL.createObjectURL(e.target.files[0]);n.setState({fileSelected:e.target.files[0],file:t})},n.handleInputChange=function(e){var t=e.target,a=t.name,i=t.value;n.setState(Object(u.a)({},a,i))},n.handleFormSubmit=function(e){e.preventDefault(),E.saveRecipe({title:n.state.title,cookTime:n.state.cookTime,difficulty:n.state.difficulty,servings:n.state.servings,ingredientList:n.state.ingredientList.split(","),instructions:n.state.instructions.split("\n"),imgUrl:n.state.file,img:n.state.selectedFile}).then(function(e){return n.loadRecipes()}).catch(function(e){return console.log(e)}),n.props.history.push("/")},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{class:"form-container"},i.a.createElement("h4",null,"New Recipe:"),i.a.createElement("form",null,i.a.createElement(b,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),i.a.createElement(b,{value:this.state.cookTime,onChange:this.handleInputChange,name:"cookTime",placeholder:"Cook Time (required)"}),i.a.createElement(b,{value:this.state.difficulty,onChange:this.handleInputChange,name:"difficulty",placeholder:"Difficulty"}),i.a.createElement(b,{value:this.state.servings,onChange:this.handleInputChange,name:"servings",placeholder:"Servings"}),i.a.createElement("textarea",{class:"ing-text",value:this.state.ingredientList,onChange:this.handleInputChange,name:"ingredientList",placeholder:"Ingredients (Separate each with a comma)"}),i.a.createElement("textarea",{class:"ins-text",value:this.state.instructions,onChange:this.handleInputChange,name:"instructions",placeholder:"Instructions (Separate each with a new line!)"}),i.a.createElement("button",{type:"button",class:"btn btn-danger",value:"Upload",onClick:function(){e.props.history.push("/")}},i.a.createElement("i",{class:"fas fa-arrow-left"})),i.a.createElement(y,{onClick:this.handleFormSubmit},"Submit Recipe")))}}]),t}(a.Component),R=(n(91),n(131)),I=function(){return i.a.createElement(l.a,null,i.a.createElement("div",null,i.a.createElement(R.a,null),i.a.createElement(s.a,null,i.a.createElement(o.a,{exact:!0,path:"/",component:O}),i.a.createElement(o.a,{exact:!0,path:"/recipe",component:O}),i.a.createElement(o.a,{exact:!0,path:"/add",component:S}),i.a.createElement(o.a,{exact:!0,path:"/edit/:id",component:j}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(127);r.a.render(i.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,n){},53:function(e,t,n){e.exports=n(129)},59:function(e,t,n){},80:function(e,t,n){},82:function(e,t,n){},84:function(e,t,n){},87:function(e,t,n){},89:function(e,t,n){},91:function(e,t,n){}},[[53,2,1]]]);
//# sourceMappingURL=main.84213e04.chunk.js.map