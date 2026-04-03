<style>

.zf_lB_Dimmer_854490{ 
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgb(0, 0, 0);
    opacity: 0.8;
    z-index: 10000000;
}

.zf_lB_Container_854490{
	position: fixed;
	background-color: white;
	margin: 0;
	margin-right: 0px;
	padding: 0;
	height: 160px;
	width:  70%;
	top: 50%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%);
	border: 7px solid none;
	max-height: calc(100% - 60px);
	z-index: 999999;
	transition: height 0.5s ease;
	outline : none;
}

p{
margin-bottom: 10px;
}

.zf_lB_Wrapper_854490{
	position: fixed;
    top: 50%;
    left: 50%;
    margin-left: 0;
    margin-top: -180px;
    z-index: 10000001;
}

.zf_main_id_854490{
	height: calc(100% - 0px);
	display: flex;
	overflow-y: auto;
	overflow-x: hidden;
}

.zf_lb_closeform_854490 {
    position: absolute;
    right: -20px;
    background: #2f2e2e;
    padding: 0;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    top: -15px;
    cursor: pointer;
    border: 2px solid #d9d9d9;
}
.zf_lb_closeform_854490:before, .zf_lb_closeform_854490:after {
    position: absolute;
    left: 16px;
    content: ' ';
    height: 19px;
    width: 2px;
    top: 7px;
    background-color: #f7f7f7;
}

.zf_lb_closeform_854490:before {
  transform: rotate(45deg);
}
.zf_lb_closeform_854490:after {
  transform: rotate(-45deg);
} 



@media screen and (min-device-width: 10px) and (max-device-width: 380px) {  
   .zf_lB_Container_854490 {
  width: 270px !important;
} 
}

@media screen and (min-device-width: 360px) and (max-device-width: 480px) {  
   .zf_lB_Container_854490 {
  width: 350px !important;
} 
}

@media screen and (min-device-width: 440px) and (max-device-width: 500px) {  
   .zf_lB_Container_854490 {
  width: 380px !important;
} 
}

@media only screen  and (min-width:500px) and (max-width:600px)  {  
 	.zf_lB_Container_854490 {
	width: 450px;
 }
}

@media only screen  and (min-width:601px) and (max-width:700px)  {  
 	.zf_lB_Container_854490 {
	width: 540px;
 }
}

@media only screen  and (min-width:700px) and (max-width:800px)  { 
.zf_lB_Container_854490 {
	width: 650px;
 }
}

@media screen and (min-device-width: 801px) and (max-device-width: 1268px) {  
   .zf_lB_Container_854490 {
  width: 750px !important;
} 
}

</style>      


<button id="zf_button_854490" style="display: none;">Form</button>



<script type="text/javascript">(function() {
	try{

			if( document.readyState == "complete" ){ 
				onloadActions_854490();
			}  else {
			  	window.addEventListener('load', function (){
			  		onloadActions_854490();
			  	}, false);
			}

			function onloadActions_854490(){
				constructDiv_854490();
				showZForm_854490();
			}

			function constructDiv_854490(){
				var iframeDiv = document.createElement("div");
				iframeDiv.setAttribute('id','53ximDvBC9d4V7Vk7m9U8PKKyresfRwevIGd78_gPJo_854490');
				iframeDiv.setAttribute('class','zf_main_id_854490');

				var closeFormDiv = document.createElement("div");
				closeFormDiv.setAttribute('id','deleteform_854490');
				closeFormDiv.setAttribute('class','zf_lb_closeform_854490');
				closeFormDiv.setAttribute('tabindex', 0);
				

				var containerDiv = document.createElement("div");
				containerDiv.setAttribute('id','containerDiv_854490');
				containerDiv.setAttribute('class','zf_lB_Container_854490 ');
				containerDiv.appendChild(iframeDiv);
				containerDiv.appendChild(closeFormDiv);
				
				var wrapperDiv = document.createElement("div");
				wrapperDiv.setAttribute('class','zf_lB_Wrapper_854490');
				wrapperDiv.appendChild(containerDiv);


				var dimmerDiv = document.createElement("div");
				dimmerDiv.setAttribute('class','zf_lB_Dimmer_854490');
				dimmerDiv.setAttribute('elname','popup_box');

				var mainDiv = document.createElement("div");
				mainDiv.setAttribute('id','formsLightBox_854490');
				mainDiv.style.display = "none";
				mainDiv.appendChild(wrapperDiv);
				mainDiv.appendChild(dimmerDiv);

				document.body.appendChild(mainDiv);

			}

			function showZForm_854490(){
				var iframe = document.getElementById("53ximDvBC9d4V7Vk7m9U8PKKyresfRwevIGd78_gPJo_854490").getElementsByTagName("iframe")[0];
				if(iframe == undefined ||iframe.length == 0){
					loadZForm_854490();
					
				} 
				document.getElementById("formsLightBox_854490").style.display = "block"; 
				document.body.style.overflow = "hidden";
				setTimeout(function() {
				    var containerDiv = document.getElementById("containerDiv_854490");
				    containerDiv.setAttribute('tabindex', '-1');
				    containerDiv.focus();
				}, 100);
			}

			function deleteZForm_854490() {
				var divCont = document.getElementById("formsLightBox_854490");
				divCont.style.display="none";
				document.body.style.overflow = "";

				var iframe = document.getElementById("53ximDvBC9d4V7Vk7m9U8PKKyresfRwevIGd78_gPJo_854490").getElementsByTagName("iframe")[0];
				iframe.remove();
			}

			function loadZForm_854490() {
				var iframe = document.getElementById("53ximDvBC9d4V7Vk7m9U8PKKyresfRwevIGd78_gPJo_854490").getElementsByTagName("iframe")[0];
				if(iframe == undefined ||iframe.length == 0){
					var f = document.createElement("iframe");
					f.src = getsrcurlZForm_854490('https://forms.zohopublic.com/smpmaarifnudukuhwaru2025gm1/form/StudentSchoolRegistration/formperma/53ximDvBC9d4V7Vk7m9U8PKKyresfRwevIGd78_gPJo?zf_rszfm=1');
				    
					    f.setAttribute("allow","camera;");
					
					f.style.border="none";
					f.style.minWidth="100%";
					f.style.overflow="hidden";
					var d = document.getElementById("53ximDvBC9d4V7Vk7m9U8PKKyresfRwevIGd78_gPJo_854490");
					d.appendChild(f);

					var deleteForm = document.getElementById("deleteform_854490");
					deleteForm.onclick =  deleteZForm_854490;
					deleteForm.addEventListener("keydown", function (event) {
						if (event.key === "Enter" || event.keyCode === 13 || event.key === " " || event.keyCode === 32) {
							event.preventDefault();
							deleteZForm_854490();
						}
					});

					

					window.addEventListener('message', function (){
						var evntData = event.data;
						if( evntData && evntData.constructor == String ){
							var zf_ifrm_data = evntData.split("|");
							if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
								var zf_perma = zf_ifrm_data[0];
								var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
								var iframe = document.getElementById("53ximDvBC9d4V7Vk7m9U8PKKyresfRwevIGd78_gPJo_854490").getElementsByTagName("iframe")[0];
								if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
									var prevIframeHeight = iframe.style.height;

									var zf_tout = false;
									if( zf_ifrm_data.length == 3 ) {
									    iframe.scrollIntoView();
									    zf_tout = true;
									}

									if ( prevIframeHeight != zf_ifrm_ht_nw ) {
										if( zf_tout ) {
											setTimeout(function(){
										        iframe.style.minHeight = zf_ifrm_ht_nw;
												var containerDiv = document.getElementById("containerDiv_854490");
												containerDiv.style.height=zf_ifrm_ht_nw;
										    },500);
										} else {
										    iframe.style.minHeight = zf_ifrm_ht_nw;
											var containerDiv = document.getElementById("containerDiv_854490");
											containerDiv.style.height=zf_ifrm_ht_nw;
										}
									}
								}
							}
						}

					}, false);
				}
			}

			

			function getsrcurlZForm_854490(zf_src) {
				try {
					
						if(zf_src.indexOf("?") == -1){
							zf_src+="?zf_enablecamera=true"; // No I18N
						} else {
							zf_src+="&zf_enablecamera=true" // No I18N
						}
					
					if ( typeof ZFAdvLead !== "undefined" && typeof zfutm_zfAdvLead !== "undefined" ) {
						for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
				        	var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
				        	var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
					        if ( typeof utmVal !== "undefined" ) {
					          if ( utmVal != "" ){
					            if(zf_src.indexOf('?') > 0){
					              zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
					            }else{
					              zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
					            }
					          }
					        }
				      	}
					}

					if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
						for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
				        	var utmPm = ZFLead.utmPNameArr[ prmIdx ];
				        	var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
					        if ( typeof utmVal !== "undefined" ) {
					          if ( utmVal != "" ){
					            if(zf_src.indexOf('?') > 0){
					              zf_src = zf_src+'&'+utmPm+'='+utmVal;//No I18N
					            }else{
					              zf_src = zf_src+'?'+utmPm+'='+utmVal;//No I18N
					            }
					          }
					        }
				      	}
					}
				}catch(e){}
				return zf_src;
			}
			
			
	}catch(e){}
})();
</script>		
