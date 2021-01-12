contentDefault = {
	reason: "To improve your musical vocabulary"
}


module.exports = (content = contentDefault)=>{
	return `
     <table cellpadding="0" cellspacing="0" class="es-content" align="center">
        <tbody>
          <tr>
            <td class="esd-stripe" align="center">
              <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
                <tbody>
                  <tr>
                    <td class="es-p20t es-p20r es-p20l esd-structure" align="left">
                      <table cellpadding="0" cellspacing="0" width="100%">
                        <tbody>
                          <tr>
                            <td width="560" class="esd-container-frame" align="center" valign="top">
                              <table cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                  <tr>
                                    <td align="center" class="esd-block-text">
                                      <h3 style="font-size: 22px;"><strong>Learn + Work-With New Chords!</strong></h3>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="center" class="esd-block-text">
                                      <p>One of the most common barriers that beginners face when they first pick up the guitar is the overwhelming number of chords to learn.&nbsp; We'll send you some new chords every day to play around with, and soon we'll show you songs to play them with!</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="left" class="esd-block-text">
                                      <p style="text-align: center;"><strong>Today's Reason: ${content.reason}</strong></p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      `
}











            //  ============= OLD ================
       //      `
       // <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
       //   <tr style="border-collapse:collapse;"> 
       //    <td align="center" style="padding:0;Margin:0;"> 
       //     <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;"> 
       //       <tr style="border-collapse:collapse;"> 
       //        <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;"> 
       //         <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
       //           <tr style="border-collapse:collapse;"> 
       //            <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> 
       //             <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
       //               <tr style="border-collapse:collapse;"> 
       //                <td align="center" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;color:#333333;"><strong>Learn + Work-With New Chords!</strong></p></td> 
       //               </tr> 
       //               <tr style="border-collapse:collapse;"> 
       //                <td align="center" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">One of the most common barriers that beginners face when they first pick up the guitar is the overwhelming number of chords to learn.&nbsp; We'll send you some new chords every day to play around with, and soon we'll show you songs to play them with!</p></td> 
       //               </tr> 
       //               <tr style="border-collapse:collapse;"> 
       //                <td align="left" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;text-align:center;"><strong>Today's Reason: ${content.reason}</strong></p></td> 
       //               </tr> 
       //             </table></td> 
       //           </tr> 
       //         </table></td> 
       //       </tr> 
       //     </table></td> 
       //   </tr> 
       // </table> `