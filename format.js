/**
 * jQuery Phone Number Format Plugin
 * Author: Ruban S
 * Version: 1.0.0
 * Last Updated: 14th August 2023
 * Dependencies: jQuery
 */
!(function ($) {
    let maskList = [
        { iso: "SH", code: "+247", format: "####" },
        { iso: "SH", code: "+290", format: "####" },
        { iso: "SH", code: "+290", format: "####" },
        { iso: "NU", code: "+683", format: "####" },
        { iso: "TK", code: "+690", format: "####" },
        { iso: "FK", code: "+500", format: "#####" },
        { iso: "TO", code: "+676", format: "#####" },
        { iso: "SB", code: "+677", format: "#####" },
        { iso: "VU", code: "+678", format: "#####" },
        { iso: "TV", code: "+688", format: "2####" },
        { iso: "DE", code: "+49", format: "### ###" },
        { iso: "CK", code: "+682", format: "## ###" },
        { iso: "KI", code: "+686", format: "## ###" },
        { iso: "TV", code: "+688", format: "90####" },
        { iso: "MM", code: "+95", format: "### ###" },
        { iso: "FO", code: "+298", format: "### ###" },
        { iso: "AD", code: "+376", format: "### ###" },
        { iso: "BA", code: "+387", format: "## ####" },
        { iso: "PM", code: "+508", format: "## ####" },
        { iso: "SR", code: "+597", format: "### ###" },
        { iso: "NF", code: "+672", format: "1## ###" },
        { iso: "NF", code: "+672", format: "3## ###" },
        { iso: "WF", code: "+681", format: "## ####" },
        { iso: "WS", code: "+685", format: "## ####" },
        { iso: "NC", code: "+687", format: "## ####" },
        { iso: "KP", code: "+850", format: "### ###" },
        { iso: "MU", code: "+230", format: "### ####" },
        { iso: "ST", code: "+239", format: "## #####" },
        { iso: "GW", code: "+245", format: "# ######" },
        { iso: "IO", code: "+246", format: "### ####" },
        { iso: "ZW", code: "+263", format: "# ######" },
        { iso: "KM", code: "+269", format: "## #####" },
        { iso: "", code: "+297,", format: "### ####" },
        { iso: "GL", code: "+299", format: "## ## ##" },
        { iso: "IS", code: "+354", format: "### ####" },
        { iso: "EE", code: "+372", format: "### ####" },
        { iso: "BA", code: "+387", format: "## #####" },
        { iso: "DE", code: "+49", format: "### ## ##" },
        { iso: "BZ", code: "+501", format: "### ####" },
        { iso: "PA", code: "+507", format: "### ####" },
        { iso: "", code: "+592", format: "### ####" },
        { iso: "SR", code: "+597", format: "### ####" },
        { iso: "AN", code: "+599", format: "### ####" },
        { iso: "AN", code: "+599", format: "### ####" },
        { iso: "AN", code: "+599", format: "### ####" },
        { iso: "MY", code: "+60", format: "# ### ###" },
        { iso: "ID", code: "+62", format: "## ### ##" },
        { iso: "SG", code: "+65", format: "#### ####" },
        { iso: "TL", code: "+670", format: "### ####" },
        { iso: "BN", code: "+673", format: "### ####" },
        { iso: "NR", code: "+674", format: "### ####" },
        { iso: "SB", code: "+677", format: "### ####" },
        { iso: "VU", code: "+678", format: "## #####" },
        { iso: "FJ", code: "+679", format: "## #####" },
        { iso: "PW", code: "+680", format: "### ####" },
        { iso: "PF", code: "+689", format: "## ## ##" },
        { iso: "FM", code: "+691", format: "### ####" },
        { iso: "MH", code: "+692", format: "### ####" },
        { iso: "MM", code: "+95", format: "# ### ###" },
        { iso: "MV", code: "+960", format: "### ####" },
        { iso: "GM", code: "+220", format: "### ## ##" },
        { iso: "SL", code: "+232", format: "## ######" },
        { iso: "NG", code: "+234", format: "## ### ##" },
        { iso: "CM", code: "+237", format: "#### ####" },
        { iso: "CV", code: "+238", format: "### ## ##" },
        { iso: "SC", code: "+248", format: "# ### ###" },
        { iso: "SO", code: "+252", format: "# ### ###" },
        { iso: "SO", code: "+252", format: "# ### ###" },
        { iso: "MW", code: "+265", format: "1### ###" },
        { iso: "ER", code: "+291", format: "# ### ###" },
        { iso: "GI", code: "+350", format: "### #####" },
        { iso: "MT", code: "+356", format: "#### ####" },
        { iso: "EE", code: "+372", format: "#### ####" },
        { iso: "MD", code: "+373", format: "#### ####" },
        { iso: "SJ", code: "+47", format: "### ## ###" },
        { iso: "DE", code: "+49", format: "### ## ###" },
        { iso: "HN", code: "+504", format: "#### ####" },
        { iso: "NI", code: "+505", format: "#### ####" },
        { iso: "CR", code: "+506", format: "#### ####" },
        { iso: "MX", code: "+52", format: "## ## ####" },
        { iso: "CU", code: "+53", format: "# ### ####" },
        { iso: "AN", code: "+599", format: "9### ####" },
        { iso: "MY", code: "+60", format: "## ### ###" },
        { iso: "ID", code: "+62", format: "## ### ###" },
        { iso: "NZ", code: "+64", format: "## ### ###" },
        { iso: "TH", code: "+66", format: "## ### ###" },
        { iso: "TL", code: "+670", format: "77# #####" },
        { iso: "TL", code: "+670", format: "78# #####" },
        { iso: "KP", code: "+850", format: "#### ####" },
        { iso: "HK", code: "+852", format: "#### ####" },
        { iso: "MO", code: "+853", format: "#### ####" },
        { iso: "TW", code: "+886", format: "#### ####" },
        { iso: "MM", code: "+95", format: "## ### ###" },
        { iso: "LB", code: "+961", format: "# ### ###" },
        { iso: "KW", code: "+965", format: "#### ####" },
        { iso: "YE", code: "+967", format: "# ### ###" },
        { iso: "BH", code: "+973", format: "#### ####" },
        { iso: "QA", code: "+974", format: "#### ####" },
        { iso: "BT", code: "+975", format: "# ### ###" },
        { iso: "US", code: "+1", format: "### ### ####" },
        { iso: "US", code: "+1", format: "242 ### ####" },
        { iso: "US", code: "+1", format: "246 ### ####" },
        { iso: "US", code: "+1", format: "264 ### ####" },
        { iso: "US", code: "+1", format: "268 ### ####" },
        { iso: "US", code: "+1", format: "284 ### ####" },
        { iso: "US", code: "+1", format: "340 ### ####" },
        { iso: "US", code: "+1", format: "345 ### ####" },
        { iso: "US", code: "+1", format: "441 ### ####" },
        { iso: "US", code: "+1", format: "473### ####" },
        { iso: "US", code: "+1", format: "649 ### ####" },
        { iso: "US", code: "+1", format: "664 ### ####" },
        { iso: "US", code: "+1", format: "670 ### ####" },
        { iso: "US", code: "+1", format: "671 ### ####" },
        { iso: "US", code: "+1", format: "684 ### ####" },
        { iso: "US", code: "+1", format: "721 ### ####" },
        { iso: "US", code: "+1", format: "758 ### ####" },
        { iso: "US", code: "+1", format: "767 ### ####" },
        { iso: "US", code: "+1", format: "784 ### ####" },
        { iso: "US", code: "+1", format: "809 ### ####" },
        { iso: "US", code: "+1", format: "829 ### ####" },
        { iso: "US", code: "+1", format: "849 ### ####" },
        { iso: "US", code: "+1", format: "868 ### ####" },
        { iso: "US", code: "+1", format: "869 ### ####" },
        { iso: "US", code: "+1", format: "876 ### ####" },
        { iso: "TN", code: "+216", format: "## ### ###" },
        { iso: "LY", code: "+218", format: "## ### ###" },
        { iso: "MR", code: "+222", format: "## ## ####" },
        { iso: "ML", code: "+223", format: "## ## ####" },
        { iso: "GN", code: "+224", format: "## ### ###" },
        { iso: "CI", code: "+225", format: "## ### ###" },
        { iso: "BF", code: "+226", format: "## ## ####" },
        { iso: "NE", code: "+227", format: "## ## ####" },
        { iso: "TG", code: "+228", format: "## ### ###" },
        { iso: "BJ", code: "+229", format: "## ## ####" },
        { iso: "LR", code: "+231", format: "## ### ###" },
        { iso: "NG", code: "+234", format: "## ### ###" },
        { iso: "CF", code: "+236", format: "## ## ####" },
        { iso: "GA", code: "+241", format: "# ## ## ##" },
        { iso: "SO", code: "+252", format: "## ### ###" },
        { iso: "KE", code: "+254", format: "### ######" },
        { iso: "BI", code: "+257", format: "## ## ####" },
        { iso: "MZ", code: "+258", format: "## ### ###" },
        { iso: "RE", code: "+262", format: "##### ####" },
        { iso: "LS", code: "+266", format: "# ### ####" },
        { iso: "BW", code: "+267", format: "## ### ###" },
        { iso: "SZ", code: "+268", format: "## ## ####" },
        { iso: "ZA", code: "+27", format: "## ### ####" },
        { iso: "NL", code: "+31", format: "## ### ####" },
        { iso: "BE", code: "+32", format: "### ### ###" },
        { iso: "FR", code: "+33", format: "### ### ###" },
        { iso: "ES", code: "+34", format: "### ### ###" },
        { iso: "CY", code: "+357", format: "## ### ###" },
        { iso: "HU", code: "+36", format: "### ### ###" },
        { iso: "LT", code: "+370", format: "### ## ###" },
        { iso: "LV", code: "+371", format: "## ### ###" },
        { iso: "AM", code: "+374", format: "## ### ###" },
        { iso: "MC", code: "+377", format: "## ### ###" },
        { iso: "ME", code: "+382", format: "## ### ###" },
        { iso: "HR", code: "+385", format: "## ### ###" },
        { iso: "SI", code: "+386", format: "## ### ###" },
        { iso: "MK", code: "+389", format: "## ### ###" },
        { iso: "IT", code: "+39", format: "6 698 #####" },
        { iso: "RO", code: "+40", format: "## ### ####" },
        { iso: "CH", code: "+41", format: "## ### ####" },
        { iso: "DK", code: "+45", format: "## ## ## ##" },
        { iso: "SE", code: "+46", format: "## ### ####" },
        { iso: "PL", code: "+48", format: "### ### ###" },
        { iso: "DE", code: "+49", format: "### ## ####" },
        { iso: "GT", code: "+502", format: "# ### ####" },
        { iso: "SV", code: "+503", format: "## ## ####" },
        { iso: "HT", code: "+509", format: "## ## ####" },
        { iso: "PE", code: "+51", format: "### ### ###" },
        { iso: "CL", code: "+56", format: "# #### ####" },
        { iso: "BO", code: "+591", format: "# ### ####" },
        { iso: "EC", code: "+593", format: "# ### ####" },
        { iso: "GF", code: "+594", format: "##### ####" },
        { iso: "MY", code: "+60", format: "## ### ####" },
        { iso: "MY", code: "+60", format: "### ### ###" },
        { iso: "CC", code: "+61", format: "# #### ####" },
        { iso: "ID", code: "+62", format: "## ### ####" },
        { iso: "ID", code: "+62", format: "8## ### ###" },
        { iso: "NZ", code: "+64", format: "### ### ###" },
        { iso: "TH", code: "+66", format: "## ### ####" },
        { iso: "PG", code: "+675", format: "### ## ###" },
        { iso: "JP", code: "+81", format: "### ### ###" },
        { iso: "KR", code: "+82", format: "## ### ####" },
        { iso: "VN", code: "+84", format: "## #### ###" },
        { iso: "KP", code: "+850", format: "## ### ###" },
        { iso: "KH", code: "+855", format: "## ### ###" },
        { iso: "LA", code: "+856", format: "## ### ###" },
        { iso: "BD", code: "+880", format: "## ### ###" },
        { iso: "AF", code: "+93", format: "## ### ####" },
        { iso: "LK", code: "+94", format: "## ### ####" },
        { iso: "LB", code: "+961", format: "## ### ###" },
        { iso: "SA", code: "+966", format: "# ### ####" },
        { iso: "YE", code: "+967", format: "## ### ###" },
        { iso: "OM", code: "+968", format: "## ### ###" },
        { iso: "AE", code: "+971", format: "# ### ####" },
        { iso: "IL", code: "+972", format: "# ### ####" },
        { iso: "BT", code: "+975", format: "17 ### ###" },
        { iso: "MN", code: "+976", format: "## ## ####" },
        { iso: "NP", code: "+977", format: "## ### ###" },
        { iso: "TM", code: "+993", format: "# ### ####" },
        { iso: "EG", code: "+20", format: "### ### ####" },
        { iso: "SS", code: "+211", format: "## ### ####" },
        { iso: "MA", code: "+212", format: "## #### ###" },
        { iso: "DZ", code: "+213", format: "## ### ####" },
        { iso: "LY", code: "+218", format: "21 ### ####" },
        { iso: "SN", code: "+221", format: "## ### ####" },
        { iso: "GH", code: "+233", format: "### ### ###" },
        { iso: "TD", code: "+235", format: "## ## ## ##" },
        { iso: "GQ", code: "+240", format: "## ### ####" },
        { iso: "CG", code: "+242", format: "## ### ####" },
        { iso: "CD", code: "+243", format: "### ### ###" },
        { iso: "AO", code: "+244", format: "### ### ###" },
        { iso: "SD", code: "+249", format: "## ### ####" },
        { iso: "RW", code: "+250", format: "### ### ###" },
        { iso: "ET", code: "+251", format: "## ### ####" },
        { iso: "DJ", code: "+253", format: "## ## ## ##" },
        { iso: "TZ", code: "+255", format: "## ### ####" },
        { iso: "UG", code: "+256", format: "### ### ###" },
        { iso: "ZM", code: "+260", format: "## ### ####" },
        { iso: "MG", code: "+261", format: "## ## #####" },
        { iso: "NA", code: "+264", format: "## ### ####" },
        { iso: "MW", code: "+265", format: "# #### ####" },
        { iso: "GR", code: "+30", format: "### ### ####" },
        { iso: "PT", code: "+351", format: "## ### ####" },
        { iso: "LU", code: "+352", format: "### ### ###" },
        { iso: "IE", code: "+353", format: "### ### ###" },
        { iso: "AL", code: "+355", format: "### ### ###" },
        { iso: "BG", code: "+359", format: "### ### ###" },
        { iso: "MC", code: "+377", format: "### ### ###" },
        { iso: "SM", code: "+378", format: "#### ######" },
        { iso: "RS", code: "+381", format: "## ### ####" },
        { iso: "IT", code: "+39", format: "### #### ###" },
        { iso: "CZ", code: "+420", format: "### ### ###" },
        { iso: "SK", code: "+421", format: "### ### ###" },
        { iso: "AT", code: "+43", format: "### ### ####" },
        { iso: "GB", code: "+44", format: "## #### ####" },
        { iso: "DE", code: "+49", format: "### ### ####" },
        { iso: "MX", code: "+52", format: "### ### ####" },
        { iso: "AR", code: "+54", format: "### ### ####" },
        { iso: "BR", code: "+55", format: "## #### ####" },
        { iso: "BR", code: "+55", format: "## 7### ####" },
        { iso: "CO", code: "+57", format: "### ### ####" },
        { iso: "VE", code: "+58", format: "### ### ####" },
        { iso: "MF", code: "+590", format: "### ### ###" },
        { iso: "EC", code: "+593", format: "## ### ####" },
        { iso: "PY", code: "+595", format: "### ### ###" },
        { iso: "UY", code: "+598", format: "# ### ## ##" },
        { iso: "ID", code: "+62", format: "8## ### ####" },
        { iso: "PH", code: "+63", format: "### ### ####" },
        { iso: "NZ", code: "+64", format: "### ### ####" },
        { iso: "RU", code: "+7", format: "### ### ## ##" },
        { iso: "RU", code: "+7", format: "6## ### ## ##" },
        { iso: "RU", code: "+7", format: "7## ### ## ##" },
        { iso: "JP", code: "+81", format: "## #### ####" },
        { iso: "VN", code: "+84", format: "### #### ###" },
        { iso: "CN", code: "+86", format: "### #### ###" },
        { iso: "TW", code: "+886", format: "# #### ####" },
        { iso: "TR", code: "+90", format: "### ### ####" },
        { iso: "IN", code: "+91", format: "#### ### ###" },
        { iso: "PK", code: "+92", format: "### ### ####" },
        { iso: "JO", code: "+962", format: "# #### ####" },
        { iso: "SY", code: "+963", format: "## #### ###" },
        { iso: "SA", code: "+966", format: "5 #### ####" },
        { iso: "YE", code: "+967", format: "### ### ###" },
        { iso: "PS", code: "+970", format: "## ### ####" },
        { iso: "AE", code: "+971", format: "5# ### ####" },
        { iso: "IL", code: "+972", format: "5# ### ####" },
        { iso: "IR", code: "+98", format: "### ### ####" },
        { iso: "TJ", code: "+992", format: "## ### ####" },
        { iso: "GE", code: "+995", format: "### ### ###" },
        { iso: "KG", code: "+996", format: "### ### ###" },
        { iso: "UZ", code: "+998", format: "## ### ####" },
        { iso: "NG", code: "+234", format: "### ### ####" },
        { iso: "NG", code: "+234", format: "### ### ####" },
        { iso: "BY", code: "+375", format: "## ### ## ##" },
        { iso: "UA", code: "+380", format: "## ### ## ##" },
        { iso: "LI", code: "+423", format: "### ### ####" },
        { iso: "DE", code: "+49", format: "#### ### ####" },
        { iso: "BR", code: "+55", format: "## 9#### ####" },
        { iso: "MQ", code: "+596", format: "### ## ## ##" },
        { iso: "KP", code: "+850", format: "### #### ###" },
        { iso: "KP", code: "+850", format: "191 ### ####" },
        { iso: "LA", code: "+856", format: "20## ### ###" },
        { iso: "CN", code: "+86", format: "### #### ####" },
        { iso: "IQ", code: "+964", format: "### ### ####" },
        { iso: "AZ", code: "+994", format: "## ### ## ##" },
        { iso: "FI", code: "+358", format: "### ### ## ##" },
        { iso: "ID", code: "+62", format: "8## ### ## ###" },
        { iso: "CN", code: "+86", format: "## ##### #####" },
        { iso: "KP", code: "+850", format: "#### #############" },
    ];
    $.fn.maskedFormat = function(options) {
        options = options || {};
        const defaultMatrix = '###############';
    
        function determineMask(iso, phoneCode) {
            if (iso) {
                return maskList.find(mask => mask.iso === iso);
            } else if (phoneCode) {
                let normalizedPhoneCode = phoneCode.startsWith('+') ? phoneCode : '+' + phoneCode;
                return maskList.find(mask => mask.code === normalizedPhoneCode);
            }
            return null;
        }
             
    
        function applyMask(inputElement, forceFormat = false) {
            let regexToRemove = options.phoneCode ? /[\s#()-]/g : /[\s#+()-]/g;  // Adjusted regex pattern
            const phone = inputElement.value.replace(regexToRemove, '');
            let matrix;
            let prefix = "";
            
            const currentMask = determineMask(options.iso, options.phoneCode);
            if (currentMask) {
                matrix = currentMask.format;
                prefix = currentMask.code + " ";
            } else {
                matrix = defaultMatrix;
            }
        
            let i = 0;
            const cleanValue = phone.replace(/\D/g, '');
        
            const formattedNumber = matrix.replace(/./g, char => {
                return /[#\d]/.test(char) && i < cleanValue.length ? cleanValue.charAt(i++) : i >= cleanValue.length ? '' : char;
            }).trim();
        
            // If the options.prependCode is set to true, prepend the code
            if (options.prependCode) {
                inputElement.value = `${prefix}${formattedNumber}`;
            } else {
                inputElement.value = formattedNumber;
            }
        }
        
    
        return this.each(function() {
            const $inputElement = $(this);
    
            $inputElement.on('focus', function() {
                if (this.value.length <= 1) { 
                    applyMask(this);
                }
            });
    
            $inputElement.on('input', function() {
                applyMask(this);
            });
    
            $inputElement.on('blur', function() {
                applyMask(this, true); // force format on blur
            });
        });
    };  
})(jQuery);