function sortTable(e,t,i){var a,n=e.tBodies[0],s=Array.prototype.slice.call(n.rows,0);for(i=-(+i||-1),s=s.sort(function(e,a){return i*e.cells[t].textContent.trim().localeCompare(a.cells[t].textContent.trim())}),a=0;a<s.length;++a)n.appendChild(s[a])}function makeSortable(e){var t,i=e.tHead;if(i&&(i=i.rows[0])&&(i=i.cells),i)for(t=i.length;--t>=0;)!function(t){var a=1;i[t].addEventListener("click",function(){sortTable(e,t,a=1-a)})}(t)}function makeAllSortable(e){for(var t=(e=e||document.body).getElementsByTagName("table"),i=t.length;--i>=0;)makeSortable(t[i])}$(document).ready(function(){if(void 0==window.standardEMPModelling)var e={};$(function(){makeAllSortable()}),(e={init:function(){e.CreateEMPTableFromJSON(),$("#saveEmpModel").on("click",this.updateEMPList),$(".createempBtn button").on("click",this.showEmpModel),$(document).on("click",".existingempList #view",this.slideout),$("#view__slidein").on("click",this.slidein),$(".existingempList").on("click","#edit",this.editReviewMode),$(".existingempList").on("click","#del",this.deleterow),$(".createempBtn .btn").on("click",this.AddEmpmodel),$("#upload-template-btn").on("click",this.previewFile),$(".close").on("click",this.CloseAert)},AddEmpmodel:function(){e.clearvalues()},showEmpModel:function(){$(".empReview").addClass("showempReview")},CreateEMPTableFromJSON:function(){for(var e=[{"First Name":"John","Last Name":"Doe",Gender:"Male",Email:"John.doe@xyz.com",Phone:"0123456789",state:"Active",Actions:""},{"First Name":"William","Last Name":"Donsre",Gender:"Male",Email:"William.donsre@xyz.com",Phone:"0734875345",state:"Active",Actions:""},{"First Name":"Micheal","Last Name":"Patric",Gender:"Male",Email:"Micheal.Patric@xyz.com",Phone:"5564634646",state:"Active",Actions:""}],t=[],i=0;i<e.length;i++)for(var a in e[i])-1===t.indexOf(a)&&t.push(a);var n=document.createElement("table");n.classList.add("existingempList","table");for(var s=n.createTHead().insertRow(-1),i=0;i<t.length;i++){var o=document.createElement("th");o.innerHTML=t[i],s.appendChild(o)}for(var l=n.createTBody(),i=0;i<e.length;i++)for(var s=l.insertRow(-1),d=0;d<t.length;d++){var r=s.insertCell(-1);6==d?(e[i].Actions='<div id="view">View</div> <div id="edit">Edit</div> <div id="del">Delete</div>',r.innerHTML=e[i].Actions):r.innerHTML=e[i][t[d]]}var c=document.getElementById("showData");c.innerHTML="",c.appendChild(n),$(".existingempList #edit").attr("data-backdrop","static"),$(".existingempList #del").attr("data-keyboard","false")},actionslink:function(){var e=$(".existingempList.table");$("tbody tr:first",e).clone()},updateEMPList:function(){$(".empReview").removeClass("showempReview");var t=$(".existingempList.table"),i=$(".FirstName_new").val(),a=$(".LastName_new").val(),n=$(".Email_new").val(),s=$(".Phone_new").val(),o=$("input[name=gender]:checked","#Employee_new").val(),l=$("input[name=State]:checked","#Employee_new").val(),d=$("tbody tr:first",t).clone();d.find("td:first").text(i),d.find("td:eq(1)").text(a),d.find("td:eq(2)").text(o),d.find("td:eq(3)").text(n),d.find("td:eq(4)").text(s),d.find("td:eq(5)").text(l),$("tbody",t).prepend(d),"Inactive"==l?d.addClass("inactive"):(d.removeClass("inactive"),d.addClass("active"),setTimeout(function(){d.removeClass("active")},5e3)),$("#alertCreation").addClass("alert-success").find(".approvalStatus").text(i+" has been saved"),e.clearvalues()},clearvalues:function(){$("#Employee_new input[type=text],#Employee_new textarea").val(""),$('input[name="gender"]').prop("checked",!1),$('input[name="State"]').prop("checked",!1),$(".empReview").removeClass("showempReview"),$("#pic-upload-file").val(""),$(".model__picupload__img").attr("src","")},slideout:function(e){$("#viewslideout").removeClass("viewslideout_state"),$("#viewslideout").animate({right:"0px"},{queue:!1,duration:500}),$(this).addClass("popped")},slidein:function(){$("#view__slidein").parent().animate({right:"-280px"},{queue:!1,duration:500}),$("#view").removeClass("popped"),$("#view").hasClass("popped")||$("#viewslideout").addClass("viewslideout_state")},editReviewMode:function(e){e.preventDefault();var t=$(".empReview_model");$("#editnewemp").modal().find(".modal-body").append(t);var i=$(this).closest("tr").find("td:first").text();$("#editnewemp .empReview_model .FirstName_new").val(i);var a=$(this).closest("tr").find("td:eq(1)").text();$("#editnewemp .empReview_model .LastName_new").val(a);var n=$(this).closest("tr").find("td:eq(2)").text();$("#editnewemp .empReview_model .Email_new").val(n);var s=$(this).closest("tr").find("td:eq(3)").text();$("#editnewemp .empReview_model .Phone_new").val(s),$("#editnewemp__saveEmpModel, #editnewemp__cancelEmpModel").on("click",function(){var e=$(".empReview_model");$("#createnewemp").find(".modal-body").append(e),$("#editnewemp").modal("hide")})},deleterow:function(e){var t=$(this).closest("tr").find("td:first").text();$("#alertCreation").addClass("alert-success").find(".approvalStatus").text(t+" has been deleted"),$(this).closest("tr").css("display","none")},previewFile:function(){var e=document.querySelector(".model__picupload__img"),t=document.querySelector("input[type=file]").files[0],i=new FileReader;i.onloadend=function(){e.src=i.result},t?i.readAsDataURL(t):e.src=""},CloseAert:function(){$("#alertCreation").removeClass("alert-success")}}).init()}),$(window).width()<514?$("#showData").addClass("table-responsive"):$("#showData").removeClass("table-responsive"),$("#searchInput").keyup(function(){var e=this.value.split(" "),t=$(".existingempList.table tbody").find("tr");""!=this.value?(t.hide(),t.filter(function(t,i){for(var a=$(this),n=0;n<e.length;++n)if(a.is(":contains('"+e[n]+"')"))return!0;return!1}).show()):t.show()}).focus(function(){this.value="",$(this).css({color:"black"}),$(this).unbind("focus")}).css({color:"#C0C0C0"});