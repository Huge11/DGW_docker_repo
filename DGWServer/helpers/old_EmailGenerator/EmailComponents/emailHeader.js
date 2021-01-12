defaultData = {
 'imgUrl': 'https://placebear.com/350/225',
 'links': [{'name': "name", 'address': "dailyguitarworkout.com"}, {'name': 'name', 'address': 'dailyguitarworkout.com'}, {'name': 'name', 'address': 'dailyguitarworkout.com'}]
}

     const getHeaderLinks = (data)=>{
      const items = data.links;
      let links = '';
      items.forEach((item, index)=>{
       links = links + `<td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0;" id="esd-menu-id-${index}" width="25.00%" bgcolor="#f0f0f0" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:none;display:block;color:#333333;" href="${item.address}">${item.name}</a></td>`
      })
      return links
     }


module.exports = 
    function(data = defaultData){

     headerLinks = getHeaderLinks(data)

     // check there are links or else fallback on template
     // headerLinks == '' ? headerLinks = '<td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0;" id="esd-menu-id-0" width="25.00%" bgcolor="#f0f0f0" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:none;display:block;color:#333333;" href="https://viewstripo.email/">Service1</a></td>                     <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0;" id="esd-menu-id-1" esdev-border-color="#000000" width="25.00%" bgcolor="#f0f0f0" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:none;display:block;color:#333333;" href="https://viewstripo.email/">Service2</a></td>                     <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0;" id="esd-menu-id-2" esdev-border-color="#000000" width="25.00%" bgcolor="#f0f0f0" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:none;display:block;color:#333333;" href="https://viewstripo.email/">Service3</a></td>                     <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:10px;padding-bottom:10px;border:0;" id="esd-menu-id-3" esdev-border-color="#000000" width="25.00%" bgcolor="#f0f0f0" align="center"><a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:none;display:block;color:#333333;" href="https://viewstripo.email/">Service4</a></td>'

        return `
 <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top;"> 
   <tr style="border-collapse:collapse;"> 
    <td class="es-adaptive" align="center" style="padding:0;Margin:0;"> 
     <table class="es-header-body" width="600" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;"> 
       <tr style="border-collapse:collapse;"> 
        <td style="Margin:0;padding-top:15px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#FFFFFF;" bgcolor="#ffffff" align="left"> 
         <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="174" valign="top"><![endif]--> 
         <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> 
           <tr style="border-collapse:collapse;"> 
            <td class="es-m-p0r" width="174" valign="top" align="center" style="padding:0;Margin:0;"> 
             <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
               <tr style="border-collapse:collapse;"> 
                <td class="es-m-p0l es-m-txt-c" align="left" style="padding:0;Margin:0;"><a href="https://viewstripo.email/" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#333333;"><img src=${data.imgUrl} alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="118"></a></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <!--[if mso]></td><td width="20"></td><td width="366" valign="top"><![endif]--> 
         <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
           <tr style="border-collapse:collapse;"> 
            <td width="366" align="left" style="padding:0;Margin:0;"> 
             <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;border-left:2px solid #808080;border-right:2px solid #808080;border-top:2px solid #808080;border-bottom:2px solid #808080;" width="100%" cellspacing="0" cellpadding="0"> 
               <tr style="border-collapse:collapse;"> 
                <td style="padding:0;Margin:0;"> 
                 <table class="es-menu" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                   <tr class="links" style="border-collapse:collapse;"> 
                    ${headerLinks}
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
`
}
