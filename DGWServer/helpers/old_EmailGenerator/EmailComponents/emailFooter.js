contentDefault = {
  'title': "Help Us Improve",
  'bottom': "Let us know if you have any feedback or suggestions for our daily emails!  We're always looking to improve with user feedback!",
  'footText': "You can reply right to this email, we're always looking to improve",
  'unsubscribeLink': 'http://dailyguitarworkout.com/unsubscribe'
}

module.exports = 
    function(content = contentDefault){
        return `
 <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
   <tr style="border-collapse:collapse;"> 
    <td align="center" style="padding:0;Margin:0;"> 
     <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
       <tr style="border-collapse:collapse;"> 
        <td align="left" style="padding:0;Margin:0;"> 
         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
           <tr style="border-collapse:collapse;"> 
            <td width="600" valign="top" align="center" style="padding:0;Margin:0;"> 
             <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
               <tr style="border-collapse:collapse;"> 
                <td align="center" style="padding:0;Margin:0;padding-bottom:40px;padding-left:40px;padding-right:40px;"> 
                 <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                   <tr style="border-collapse:collapse;"> 
                    <td style="padding:0;Margin:0px;border-bottom:1px solid #EFEFEF;background:none;height:1px;width:100%;margin:0px;"></td> 
                   </tr> 
                 </table></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table></td> 
       </tr> 
       <tr style="border-collapse:collapse;"> 
        <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;"> 
         <!--[if mso]><table width="560" cellpadding="0" 
                  cellspacing="0"><tr><td width="270" valign="top"><![endif]--> 
         <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> 
           <tr style="border-collapse:collapse;"> 
            <td class="es-m-p20b" width="270" align="left" style="padding:0;Margin:0;"> 
             <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
               <tr style="border-collapse:collapse;"> 
                <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">${content.footText} </p></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]--> 
         <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> 
           <tr style="border-collapse:collapse;"> 
            <td width="270" align="left" style="padding:0;Margin:0;"> 
             <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
               <tr style="border-collapse:collapse;"> 
                <td class="es-m-txt-c" align="right" style="padding:0;Margin:0;padding-top:5px;"> 
                 <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                   <tr style="border-collapse:collapse;"> 
                    <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"><img title="Facebook" src="images/stripoImages/facebook-logo-black.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> 
                    <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"><img title="Twitter" src="images/stripoImages/twitter-logo-black.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> 
                    <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"><img title="Instagram" src="images/stripoImages/instagram-logo-black.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> 
                    <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"><img title="Youtube" src="images/stripoImages/youtube-logo-black.png" alt="Yt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> 
                   </tr> 
                 </table></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <!--[if mso]></td></tr></table><![endif]--></td> 
       </tr> 
     </table></td> 
   </tr> 
 </table> 
 <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
   <tr style="border-collapse:collapse;"></tr> 
   <tr style="border-collapse:collapse;"> 
    <td align="center" style="padding:0;Margin:0;"> 
     <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#808080;" width="600" cellspacing="0" cellpadding="0" bgcolor="#808080" align="center"> 
       <tr style="border-collapse:collapse;"> 
        <td align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;"> 
         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
           <tr style="border-collapse:collapse;"> 
            <td width="560" valign="top" align="center" style="padding:0;Margin:0;"> 
             <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
               <tr style="border-collapse:collapse;"> 
                <td align="center" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#FFFFFF;">${content.title}<br></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#FFFFFF;">${content.bottom}<br></p><small><a href="${content.unsubscribeLink}">click here to unsubscribe</a></small></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table></td> 
       </tr> 
     </table></td> 
   </tr> 
 </table> 

 `
}