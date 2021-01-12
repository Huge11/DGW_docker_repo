dataDefault = { 
  eventurl: 'https://calendar.songfacts.com/september/28/6223/',
  year: '1991',
  caturl: 'https://calendar.songfacts.com/category/radio/',
  category: 'Radio',
  data:
   `Thanks to a proliferation of "New Country" radio stations and more accurate reporting, country music goes mainstream as <a href="https://www.songfacts.com/songs/garth-brooks" target="_blank">Garth Brooks</a>' <b>Ropin' the Wind</b> becomes the first country album to debut at #1 on the Billboard 200 chart.`,
  title: 'Garth Brooks #1 As Country Goes Mainstream',
  imgurl: 'https://img.songfacts.com/calendar/6223_410.jpg' 
}


module.exports = (data = dataDefault)=>{ 
  return `
 <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
   <tr style="border-collapse:collapse;"> 
    <td align="center" style="padding:0;Margin:0;"> 
     <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#999999;" width="600" cellspacing="0" cellpadding="0" bgcolor="#999999" align="center"> 
       <tr style="border-collapse:collapse;"> 
        <td style="padding:0;Margin:0;background-color:#999999;background-position:left top;" bgcolor="#999999" align="left"> 
         <!--[if mso]><table width="600" cellpadding="0" cellspacing="0"><tr><td width="300" valign="top"><![endif]--> 
         <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> 
           <tr style="border-collapse:collapse;"> 
            <td width="300" align="left" style="padding:0;Margin:0;"> 
             <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
               <tr style="border-collapse:collapse;"> 
                <td align="left" style="padding:0;Margin:0;padding-left:25px;padding-right:25px;padding-top:30px;"><h2 style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:26px;font-style:normal;font-weight:normal;color:#FFFFFF;">${data.title}</h2></td> 
               </tr> 
               <tr style="border-collapse:collapse;"> 
                <td style="padding:0;Margin:0;"> 
                 <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
                   <tr style="border-collapse:collapse;"> 
                    <td align="left" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:'comic sans ms', 'marker felt-thin', arial, sans-serif;line-height:24px;color:#333333;"><strong><span style="font-size:22px;">&nbsp;${data.year}</span></strong><em><span style="font-family:'comic sans ms', 'marker felt-thin', arial, sans-serif;"><span style="font-size:16px;"><a href="https://www.songfacts.com/songs/jimi-hendrix" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'comic sans ms', 'marker felt-thin', arial, sans-serif;font-size:16px;text-decoration:underline;color:#333333;">${data.data} </em></p></td> 
                   </tr> 
                 </table></td> 
               </tr> 
               <tr style="border-collapse:collapse;"> 
                <td align="left" style="Margin:0;padding-top:10px;padding-bottom:10px;padding-left:25px;padding-right:25px;"><span class="es-button-border" style="border-style:solid;border-color:#808080;background:#F0F0F0;border-width:2px;display:inline-block;border-radius:0px;width:auto;"><a href="${data.eventurl}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:16px;color:#333333;border-style:solid;border-color:#F0F0F0;border-width:5px 30px 5px 30px;display:inline-block;background:#F0F0F0;border-radius:0px;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;"> Read More </a></span></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <!--[if mso]></td><td width="0"></td><td width="300" valign="top"><![endif]--> 
         <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> 
           <tr style="border-collapse:collapse;"> 
            <td width="300" align="left" style="padding:0;Margin:0;"> 
             <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
               <tr style="border-collapse:collapse;"> 
                <td align="center" style="padding:0;Margin:0;"><img class="adapt-img" src="${data.imgurl}" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="300"></td> 
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