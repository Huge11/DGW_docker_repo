quoteDefault = {'name': "Jimi Hendrix", 'body': "I used to live in a room full of mirrors; all I could see was me. I take my spirit and I crash my mirrors, now the whole world is here for me to see."}

module.exports = 
    function(quote = quoteDefault){
      // console.log(quote)
        return `
 <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
   <tr style="border-collapse:collapse;"> 
    <td align="center" style="padding:0;Margin:0;"> 
     <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;"> 
       <tr style="border-collapse:collapse;"> 
        <td align="left" style="padding:20px;Margin:0;background-position:left top;"> 
         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
           <tr style="border-collapse:collapse;"> 
            <td width="560" valign="top" align="center" style="padding:0;Margin:0;"> 
             <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
               <tr style="border-collapse:collapse;"> 
                <td align="center" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">Daily Quote by...</p></td> 
               </tr> 
               <tr style="border-collapse:collapse;"> 
                <td align="center" style="padding:0;Margin:0;"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#333333;">${quote.name}</h2></td> 
               </tr> 
               <tr style="border-collapse:collapse;"> 
                <td class="es-m-txt-c" align="center" style="padding:0;Margin:0;padding-top:10px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:lora, georgia, 'times new roman', serif;line-height:21px;color:#000000;"><em>${quote.body}</em></p></td> 
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
