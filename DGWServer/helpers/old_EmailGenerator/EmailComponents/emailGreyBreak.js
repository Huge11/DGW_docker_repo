contentDefault = {advice: "Always use a metronome"}


module.exports = 
    function(content = contentDefault){
      // console.log(content)
        return `
 <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
   <tr style="border-collapse:collapse;"> 
    <td align="center" style="padding:0;Margin:0;"> 
     <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#31CB4B;" width="600" cellspacing="0" cellpadding="0" bgcolor="#31cb4b" align="center"> 
       <tr style="border-collapse:collapse;"> 
        <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px;background-color:#999999;" bgcolor="#999999" align="left"> 
         <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
           <tr style="border-collapse:collapse;"> 
            <td width="560" valign="top" align="center" style="padding:0;Margin:0;"> 
             <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
               <tr style="border-collapse:collapse;"> 
                <td align="center" style="padding:0;Margin:0;"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#FFFFFF;">Today's Guitar Workout</h2></td> 
               </tr> 
               <tr style="border-collapse:collapse;"> 
                <td align="center" style="padding:0;Margin:0;padding-top:5px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#FFFFFF;">${content.advice}</p></td> 
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
