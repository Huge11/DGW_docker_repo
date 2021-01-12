content1Default = {
  'img': 'https://placebear.com/200/300',
  'title': 'Title 1',
  'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae interdum ligula. Pellentesque feugiat ligula ligula, in interdum dolor aliquet et. Aliquam vitae sem eget erat viverra malesuada.',
  'button': {'text': 'button', 'url': 'dailyguitarworkout.com'}
};
content2Default = {
  'img': 'https://placebear.com/200/300',
  'title': 'Title 2',
  'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae interdum ligula. Pellentesque feugiat ligula ligula, in interdum dolor aliquet et. Aliquam vitae sem eget erat viverra malesuada.',
  'button': {'text': 'button', 'url': 'dailyguitarworkout.com'}
};

module.exports = 
    function(content1 = content1Default, content2 = content2Default){
        return `
 <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
   <tr style="border-collapse:collapse;"> 
    <td align="center" style="padding:0;Margin:0;"> 
     <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;"> 
       <tr style="border-collapse:collapse;"> 
        <td align="left" style="padding:20px;Margin:0;"> 
         <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]--> 
         <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> 
           <tr style="border-collapse:collapse;"> 
            <td class="es-m-p20b" width="270" align="left" style="padding:0;Margin:0;"> 
             <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
               <tr style="border-collapse:collapse;"> 
                <td align="center" style="padding:0;Margin:0;"><img class="adapt-img" src="${content1.img}" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="270"></td> 
               </tr> 
               <tr style="border-collapse:collapse;"> 
                <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px;"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333;">${content1.title}</h3></td> 
               </tr> 
               <tr style="border-collapse:collapse;"> 
                <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:20px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#000000;">${content1.body}</p></td> 
               </tr> 
               <tr style="border-collapse:collapse;"> 
                <td align="left" style="padding:0;Margin:0;"><span class="es-button-border" style="border-style:solid;border-color:#808080;background:#F0F0F0;border-width:2px;display:inline-block;border-radius:0px;width:auto;"><a href="${content1.button.url}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:16px;color:#333333;border-style:solid;border-color:#F0F0F0;border-width:5px 30px 5px 30px;display:inline-block;background:#F0F0F0;border-radius:0px;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;"> ${content1.button.text} </a></span></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]--> 
         <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> 
           <tr style="border-collapse:collapse;"> 
            <td class="es-m-p20b" width="270" align="left" style="padding:0;Margin:0;"> 
             <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
               <tr style="border-collapse:collapse;"> 
                <td align="center" style="padding:0;Margin:0;"><img class="adapt-img" src="${content2.img}" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="270"></td> 
               </tr> 
               <tr style="border-collapse:collapse;"> 
                <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px;"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333;">${content2.title}</h3></td> 
               </tr> 
               <tr style="border-collapse:collapse;"> 
                <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-bottom:20px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#000000;">${content2.body}</p></td> 
               </tr> 
               <tr style="border-collapse:collapse;"> 
                <td align="left" style="padding:0;Margin:0;"><span class="es-button-border" style="border-style:solid;border-color:#808080;background:#F0F0F0 none repeat scroll 0% 0%;border-width:2px;display:inline-block;border-radius:0px;width:auto;"><a href="${content2.button.url}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:16px;color:#333333;border-style:solid;border-color:#F0F0F0;border-width:5px 30px 5px 30px;display:inline-block;background:#F0F0F0;border-radius:0px;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;"> ${content2.button.text} </a></span></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <!--[if mso]></td></tr></table><![endif]--></td> 
       </tr> 
     </table></td> 
   </tr> 
 </table> 
`
}
