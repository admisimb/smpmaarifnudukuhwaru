// $Id: $
function zf_ValidateAndSubmit(){
		if(zf_CheckMandatory()){
			if(zf_ValidCheck()){
				if(isSalesIQIntegrationEnabled){
					zf_addDataToSalesIQ();
				}
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}
		function zf_CheckMandatory(){
		for(i = 0 ; i < zf_MandArray.length ; i ++) {
		  	var fieldObj=document.forms.form[zf_MandArray[i]];
		  	if(fieldObj) {
				  	if(fieldObj.nodeName != null ){
				  		if ( fieldObj.nodeName=='OBJECT' ) {
								if(!zf_MandatoryCheckSignature(fieldObj)){
									zf_ShowErrorMsg(zf_MandArray[i]);
								 	return false;
								}
							}else if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length==0) {
							 if(fieldObj.type =='file')
								{
								 fieldObj.focus();
								 zf_ShowErrorMsg(zf_MandArray[i]);
								 return false;
								}
				   	   	  	  fieldObj.focus();
				   	   	  	  zf_ShowErrorMsg(zf_MandArray[i]);
				   	   	  	  return false;
							}  else if( fieldObj.nodeName=='SELECT' ) {// No I18N
				  	   	   	 if(fieldObj.options[fieldObj.selectedIndex].value=='-Select-') {
								fieldObj.focus();
								zf_ShowErrorMsg(zf_MandArray[i]);
								return false;
							   }
							} else if( fieldObj.type =='checkbox' || fieldObj.type =='radio' ){
								if(fieldObj.checked == false){
									fieldObj.focus();
									zf_ShowErrorMsg(zf_MandArray[i]);
									return false;
			   					}
							}
				  	}else{
				  		var checkedValsCount = 0;
						var inpChoiceElems = fieldObj;
							for(var ii = 0; ii < inpChoiceElems.length ; ii ++ ){
						      	if(inpChoiceElems[ii].checked === true ){
						      		checkedValsCount ++;
						      	}
							}
							if ( checkedValsCount == 0) {
									inpChoiceElems[0].focus();
									zf_ShowErrorMsg(zf_MandArray[i]);
									return false;
							 	}
					}
			}
		}
		return true;
	}
	function zf_ValidCheck(){
		var isValid = true;
		for(ind = 0 ; ind < zf_FieldArray.length ; ind++ ) {
			var fieldObj=document.forms.form[zf_FieldArray[ind]];
		  	if(fieldObj) {
		  		if(fieldObj.nodeName != null ){
			  		var checkType = fieldObj.getAttribute("checktype");
			  		if( checkType == "c2" ){// No I18N
			  			if( !zf_ValidateNumber(fieldObj)){
							isValid = false;
							fieldObj.focus();
							zf_ShowErrorMsg(zf_FieldArray[ind]);
							return false;
						}
			  		}else if( checkType == "c3" ){// No I18N
			  			if (!zf_ValidateCurrency(fieldObj) || !zf_ValidateDecimalLength(fieldObj,10) ) {
							isValid = false;
							fieldObj.focus();
							zf_ShowErrorMsg(zf_FieldArray[ind]);
							return false;
						}
			  		}else if( checkType == "c4" ){// No I18N
			  			if( !zf_ValidateDateFormat(fieldObj)){
							isValid = false;
							fieldObj.focus();
							zf_ShowErrorMsg(zf_FieldArray[ind]);
							return false;
						}
			  		}else if( checkType == "c5" ){// No I18N
			  			if (!zf_ValidateEmailID(fieldObj)) {
							isValid = false;
							fieldObj.focus();
							zf_ShowErrorMsg(zf_FieldArray[ind]);
							return false;
						}
			  		}else if( checkType == "c6" ){// No I18N
			  			if (!zf_ValidateLiveUrl(fieldObj)) {
						 isValid = false;
						 fieldObj.focus();
						 zf_ShowErrorMsg(zf_FieldArray[ind]);
						 return false;
							}
			  		}else if( checkType == "c7" ){// No I18N
			  			if (!zf_ValidatePhone(fieldObj)) {
						 isValid = false;
						 fieldObj.focus();
						 zf_ShowErrorMsg(zf_FieldArray[ind]);
						 return false;
							}
			  		}else if( checkType == "c8" ){// No I18N
			  			zf_ValidateSignature(fieldObj);
			  		}else if( checkType == "c9" ){// No I18N
						if( !zf_ValidateMonthYearFormat(fieldObj)){
							isValid = false;
							fieldObj.focus();
							zf_ShowErrorMsg(zf_FieldArray[ind]);
							return false;
						}
			  		}
			  	}
		  	}
		}
         	return isValid;
	}
	function zf_ShowErrorMsg(uniqName){
		var fldLinkName;
		for( errInd = 0 ; errInd < zf_FieldArray.length ; errInd ++ ) {
			fldLinkName = zf_FieldArray[errInd].split('_')[0];
			document.getElementById(fldLinkName+"_error").style.display = 'none';
		}
		var linkName = uniqName.split('_')[0];
		document.getElementById(linkName+"_error").style.display = 'block';
	}
	function zf_ValidateNumber(elem) {
	 	var validChars = "-0123456789";
	 	var numValue = elem.value.replace(/^\s+|\s+$/g, '');
	 	if (numValue != null && !numValue == "") {
	 		var strChar;
	 		var result = true;
	 		if (numValue.charAt(0) == "-" && numValue.length == 1) {
	 			return false;
	 		}
	 		for (i = 0; i < numValue.length && result == true; i++) {
	 			strChar = numValue.charAt(i);
	 			if ((strChar == "-") && (i != 0)) {
	 				return false;
	 			}
	 			if (validChars.indexOf(strChar) == -1) {
	 				result = false;
	 			}
	 		}
	 		return result;
	 	} else {
	 		return true;
	 	}
	 }
	 function zf_ValidateDateFormat(inpElem){
	 	var dateValue = inpElem.value.replace(/^\s+|\s+$/g, '');
	 	if( dateValue == "" ){
	 		return true;
	 	}else{
			return( zf_DateRegex.test(dateValue) );
		}
	 }
	 function zf_ValidateCurrency(elem) {
	 	var validChars = "0123456789.";
	 	var numValue = elem.value.replace(/^\s+|\s+$/g, '');
	 	if(numValue.charAt(0) == '-'){
	 		numValue = numValue.substring(1,numValue.length);
	 	}
	 	if (numValue != null && !numValue == "") {
	 		var strChar;
	 		var result = true;
	 		for (i = 0; i < numValue.length && result == true; i++) {
	 			strChar = numValue.charAt(i);
	 			if (validChars.indexOf(strChar) == -1) {
	 				result = false;
	 			}
	 		}
	 		return result;
	 	} else {
	 		return true;
	 	}
	 }
	 function zf_ValidateDecimalLength(elem,decimalLen) {
	 	var numValue = elem.value;
	 	if (numValue.indexOf('.') >= 0) {
	 		var decimalLength = numValue.substring(numValue.indexOf('.') + 1).length;
	 		if (decimalLength > decimalLen) {
	 			return false;
	 		} else {
	 			return true;
	 		}
	 	}
	 	return true;
	 }
	 function zf_ValidateEmailID(elem) {
        var check = 0;
        var emailValue = elem.value;
        if (emailValue != null && !emailValue == "") {
            var emailArray = emailValue.split(",");
            for (i = 0; i < emailArray.length; i++) {
                var emailExp = /^[\w]([\w\-.+&'/]*)@([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,22}$/;
                if (!emailExp.test(emailArray[i].replace(/^\s+|\s+$/g, ''))) {
                    check = 1;
                }
            }
            if (check == 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
    function zf_ValidateLiveUrl(elem) {
    	var urlValue = elem.value;
		if(urlValue !== null && typeof(urlValue) !== "undefined") {
			urlValue = urlValue.replace(/^\s+|\s+$/g, '');
			if(urlValue !== "") {
      			var urlregex = new RegExp("^(((https|http|ftps|ftp)://[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*(\\.[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*)+(:\\d{1,5})?)|((w|W){3}(\\.[a-zA-Z\\d]+((_|-|@)[a-zA-Z\\d]+)*){2,}(:\\d{1,5})?)|([a-zA-Z\\d]+((_|-)[a-zA-Z\\d]+)*(\\.[a-zA-Z\\d]+((_|-)[a-zA-Z\\d]+)*)+(:\\d{1,5})?))(/[-\\w.?,:'/\\\\+=&;%$#@()!~]*)?$", "i"); // This regex is taken from LiveFieldsUtil.isValidWebSiteFieldURL() method. Changes: i) Add ^ at the beginning and $ at the end. ii) Remove ?i before https and adjust () around https. iii) Add "i" in the RegExp constructor. // No I18N
				return(urlregex.test(urlValue));
			}
        }
        return true;
    }
    function zf_ValidatePhone(inpElem){

        var ZFPhoneRegex = {
            PHONE_INTE_ALL_REG: /^[+]{0,1}[()0-9-. ]+$/,
            PHONE_INTE_NUMERIC_REG: /^[0-9]+$/,
            PHONE_INTE_CONT_CODE_ENABLED_REG: /^[(0-9-.][()0-9-. ]*$/,
            PHONE_USA_REG: /^[0-9]+$/,
            PHONE_CONT_CODE_REG: /^[+][0-9]{1,4}$/
        }
    	var phoneFormat = parseInt(inpElem.getAttribute("phoneFormat"));
    	var fieldInpVal = inpElem.value.replace(/^\s+|\s+$/g, '');
    	var toReturn = true ;
    	if( phoneFormat === 1 ){
    		if(inpElem.getAttribute("valType") == 'code'){
                var codeRexp = ZFPhoneRegex.PHONE_CONT_CODE_REG;
                if(fieldInpVal != "" && !codeRexp.test(fieldInpVal)){
		           return false;
				}
    		}else{
				var IRexp = ZFPhoneRegex.PHONE_INTE_ALL_REG;
				if(inpElem.getAttribute("phoneFormatType") == '2'){
					IRexp = ZFPhoneRegex.PHONE_INTE_NUMERIC_REG;
				}
	 			if (fieldInpVal != "" && !IRexp.test(fieldInpVal)) {
	 				toReturn = false;
	 				return toReturn;
	 			}
 		    }
 			return toReturn;
    	}else if( phoneFormat === 2 ){
    		var InpMaxlength = inpElem.getAttribute("maxlength");
    		var USARexp = ZFPhoneRegex.PHONE_USA_REG;
    		if  ( fieldInpVal != "" && USARexp.test(fieldInpVal) &&  fieldInpVal.length == InpMaxlength ) {
				toReturn = true;
			}else if( fieldInpVal == "" ){
				toReturn = true;
			}else{
				toReturn = false;
			}
			return toReturn;
    	}
    }

  function zf_ValidateSignature(objElem) {
  		var linkName = objElem.getAttribute("compname");
  		var canvasElem = document.getElementById("drawingCanvas-"+linkName);
  		var isValidSign = zf_IsSignaturePresent(objElem,linkName,canvasElem);
   		var hiddenSignInputElem = document.getElementById("hiddenSignInput-"+linkName);
		if(isValidSign){
			hiddenSignInputElem.value = canvasElem.toDataURL();
		}else{
			hiddenSignInputElem.value = "";// No I18N
		}
		return isValidSign;
  	}

  	function zf_MandatoryCheckSignature(objElem){
  		var linkName = objElem.getAttribute("compname");
  		var canvasElem = document.getElementById("drawingCanvas-"+linkName);
  		var isValid = zf_IsSignaturePresent(objElem,linkName,canvasElem);
		return isValid;
  	}

  	function zf_IsSignaturePresent(objElem,linkName,canvasElem){
   		var context = canvasElem.getContext('2d'); // No I18N
   		var canvasWidth = canvasElem.width;
   		var canvasHeight = canvasElem.height;
   		var canvasData = context.getImageData(0, 0, canvasWidth, canvasHeight);
   		var signLen = canvasData.data.length;
   		var flag = false;
   		for(var index =0; index< signLen; index++) {
   	     	if(!canvasData.data[index]) {
   	       		flag =  false;
   	     	}else if(canvasData.data[index]) {
   		   		flag = true;
   		   		break;
   	     	}
   		}
		return flag;
  	}

	function zf_FocusNext(elem,event) {
	 	if(event.keyCode == 9 || event.keyCode == 16){
	      return;
	    }
	    if(event.keyCode >=37 && event.keyCode <=40){
	       return;
	    }
	    var compname = elem.getAttribute("compname");
	    var inpElemName = elem.getAttribute("name");
	 	if (inpElemName == compname+"_countrycode") {
	 		if (elem.value.length == 3) {
	 			document.getElementsByName(compname+"_first")[0].focus();
	 		}
	 	} else if (inpElemName == compname+"_first" ) {
	 		if (elem.value.length == 3) {
	 			document.getElementsByName(compname+"_second")[0].focus();
	 		}
	 	}
	}
	function zf_ValidateMonthYearFormat(inpElem){
		var monthYearValue = inpElem.value.replace(/^\s+|\s+$/g, '');
		if( monthYearValue == "" ){
			return true;
		}else{
		   return (zf_MonthYearRegex.test(monthYearValue));
	   }
	}
	
	function zf_SetDateAndMonthRegexBasedOnDateFormate(dateFormat){
		
		var dateAndMonthRegexFormateArray = new Array();
		var dateFormatRegExp;
        var monthYearFormatRegExp;
		if(dateFormat === "dd-MMM-yyyy"){
			
    	     dateFormatRegExp = "^(0[1-9]|[12][0-9]|3[01])-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([12][0-9]{3})$";
    	     monthYearFormatRegExp = "^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-([12][0-9]{3})$";// No I18N
    	  
    	  }else if(dateFormat === "dd-MMMM-yyyy"){// No I18N
    	     dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-](January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";
    	     monthYearFormatRegExp = "^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";// No I18N
    	  
    	  }else if(dateFormat === "MMMM-dd-yyyy"){// No I18N
    	  	dateFormatRegExp = "^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](([0][1-9])|([1-2][0-9])|([3][0-1]))[-](?:(?:19|20)[0-9]{2})$";
    	    monthYearFormatRegExp ="^(January|February|March|April|May|June|July|August|September|October|November|December|JANUARY|FEBRUARY|MARCH|APRIL|MAY|JUNE|JULY|AUGUST|SEPTEMBER|OCTOBER|NOVEMBER|DECEMBER)[-](?:(?:19|20)[0-9]{2})$";// No I18N
    	  
    	  }else if(dateFormat === "dd/MM/yyyy"){// No I18N
    	  	dateFormatRegExp ="^(([0][1-9])|([1-2][0-9])|([3][0-1]))[\/]([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
    	    monthYearFormatRegExp ="^([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
    	  
    	  }else if(dateFormat === "dd-MM-yyyy"){// No I18N
    	  	dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[-]([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
    	    monthYearFormatRegExp = "^([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
    	  
    	  }else if(dateFormat === "MM/dd/yyyy"){// No I18N
    	  	dateFormatRegExp = "^([0][1-9]|1[012])[\/](([0][1-9])|([1-2][0-9])|([3][0-1]))[\/](?:(?:19|20)[0-9]{2})$";
    	    monthYearFormatRegExp = "^([0][1-9]|1[012])[\/](?:(?:19|20)[0-9]{2})$";
    	  
    	  }else if(dateFormat === "yyyy-MM-dd"){// No I18N
    	  	dateFormatRegExp = "^(?:(?:19|20)[0-9]{2})[-]([0][1-9]|1[012])[-](([0][1-9])|([1-2][0-9])|([3][0-1]))$";
    	    monthYearFormatRegExp = "^(?:(?:19|20)[0-9]{2})[-]([0][1-9]|1[012])$";
    	  
    	  }else if(dateFormat === "yyyy/MM/dd"){// No I18N
    	  	dateFormatRegExp = "^(?:(?:19|20)[0-9]{2})[\/]([0][1-9]|1[012])[\/](([0][1-9])|([1-2][0-9])|([3][0-1]))$";
    	    monthYearFormatRegExp = "^(?:(?:19|20)[0-9]{2})[\/]([0][1-9]|1[012])$";
    	  
    	  }else if(dateFormat === "dd.MM.yyyy"){// No I18N
    	  	dateFormatRegExp = "^(([0][1-9])|([1-2][0-9])|([3][0-1]))[.]([0][1-9]|1[012])[.](?:(?:19|20)[0-9]{2})$";
    	    monthYearFormatRegExp = "^([0][1-9]|1[012])[.](?:(?:19|20)[0-9]{2})$";
    	  
    	  }else if(dateFormat === "MM-dd-yyyy"){// No I18N
    	  	dateFormatRegExp = "^([0][1-9]|1[012])[-](([0][1-9])|([1-2][0-9])|([3][0-1]))[-](?:(?:19|20)[0-9]{2})$";
    	    monthYearFormatRegExp = "^([0][1-9]|1[012])[-](?:(?:19|20)[0-9]{2})$";
    	  }
    	  dateAndMonthRegexFormateArray.push(dateFormatRegExp);
    	  dateAndMonthRegexFormateArray.push(monthYearFormatRegExp);
    	  
    	  return dateAndMonthRegexFormateArray;
    	  
    	
    }
function zf_ValidateDateOnInput(inputElem) {
  inputElem.addEventListener('input', function(e) {
    let value = e.target.value;
    
    // Auto format as user types
    if(value.length === 2 && !value.includes('-')) {
      value += '-';
      e.target.value = value;
    }
    
    if(value.length === 6 && value.split('-').length === 2) {
      value += '-';
      e.target.value = value;
    }
    
    // Validate against regex pattern
    let isValid = zf_DateRegex.test(value);
    let errorElem = document.getElementById('Date_error');
    
    if(!isValid && value.length === 11) {
      errorElem.style.display = 'block';
    } else {
      errorElem.style.display = 'none'; 
    }
  });
}

// Initialize validation on date input
document.addEventListener('DOMContentLoaded', function() {
  let dateInput = document.querySelector('input[name="Date"]');
  if(dateInput) {
    zf_ValidateDateOnInput(dateInput);
  }
});

// Replace the existing zf_ValidatePhone function
function zf_ValidatePhone(inpElem){
    // Remove any non-numeric characters
    var phoneValue = inpElem.value.replace(/\D/g,'');
    
    // Check if empty (only for non-mandatory fields)
    if(phoneValue === '' && !inpElem.hasAttribute('required')) {
        return true;
    }
    
    // Check length between 10-13 digits
    if(phoneValue.length >= 10 && phoneValue.length <= 13) {
        // Check if starts with proper Indonesian format
        if(phoneValue.startsWith('08') || phoneValue.startsWith('62')) {
            return true;
        }
    }
    
    // Show specific error message
    var errorElem = document.getElementById(inpElem.getAttribute('name') + '_error');
    if(errorElem) {
        errorElem.textContent = "Masukkan nomor HP yang valid (10-13 digit)";
        errorElem.style.display = 'block';
    }
    
    return false;
}

// Add input event listeners to format phone numbers
document.addEventListener('DOMContentLoaded', function() {
    var phoneInputs = document.querySelectorAll('input[checktype="c7"]');
    
    phoneInputs.forEach(function(input) {
        input.addEventListener('input', function(e) {
            // Remove non-numeric characters
            var value = e.target.value.replace(/\D/g,'');
            
            // Limit to maxlength
            if(value.length > 13) {
                value = value.slice(0, 13);
            }
            
            // Format the number
            if(value.startsWith('62')) {
                // Keep the 62 prefix
                e.target.value = value;
            } else if(value.startsWith('0')) {
                // Keep the 0 prefix
                e.target.value = value;
            } else if(value.length > 0) {
                // Add 0 prefix if missing
                e.target.value = '0' + value;
            }
            
            // Validate on input
            var isValid = zf_ValidatePhone(e.target);
            var errorElem = document.getElementById(e.target.getAttribute('name') + '_error');
            if(errorElem) {
                errorElem.style.display = isValid ? 'none' : 'block';
            }
        });
    });
});

// Tambahkan fungsi ini di file validation.js
function formatPhoneNumber(value) {
    // Hapus semua karakter non-digit
    value = value.replace(/\D/g, '');
    
    // Jika dimulai dengan 62, pastikan tidak lebih dari 13 digit
    if (value.startsWith('62')) {
        value = value.slice(0, 13);
    } 
    // Jika dimulai dengan 0, pastikan tidak lebih dari 12 digit
    else if (value.startsWith('0')) {
        value = value.slice(0, 12);
    } 
    // Jika tidak dimulai dengan 0 atau 62, tambahkan 0
    else {
        value = '0' + value;
        value = value.slice(0, 12);
    }
    
    return value;
}

// Tambahkan event listener untuk input nomor HP
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.getElementById('phone-input');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let formattedNumber = formatPhoneNumber(e.target.value);
            e.target.value = formattedNumber;
            
            // Validasi panjang nomor
            const isValid = formattedNumber.length >= 10 && formattedNumber.length <= 13;
            const errorElem = document.getElementById('PhoneNumber_error');
            
            if (errorElem) {
                if (!isValid && formattedNumber.length > 0) {
                    errorElem.style.display = 'block';
                } else {
                    errorElem.style.display = 'none';
                }
            }
        });
    }
});
