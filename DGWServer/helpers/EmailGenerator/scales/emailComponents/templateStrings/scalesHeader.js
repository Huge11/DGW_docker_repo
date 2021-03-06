
contentDefault = {
	reason: "To improve your speed"
}

module.exports = (content = contentDefault)=>{
	return `           
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
													<h3 style="font-size: 22px;"><strong>Practice Your Scales!</strong></h3>
												</td>
											</tr>
											<tr>
												<td align="center" class="esd-block-text">
													<p>Practicing your scales is one of the most important parts of your daily practice.&nbsp; We're going to send you a new reason every day to keep you improving.</p>
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
	</table>` 


}




//  ============ OLD =====================
//   `       <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
//          <tr style="border-collapse:collapse;"> 
//           <td align="center" style="padding:0;Margin:0;"> 
//            <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;"> 
//              <tr style="border-collapse:collapse;"> 
//               <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;"> 
//                <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
//                  <tr style="border-collapse:collapse;"> 
//                   <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> 
//                    <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
//                      <tr style="border-collapse:collapse;"> 
//                       <td align="center" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;color:#333333;"><strong>Practice Your Scales!</strong></p></td> 
//                      </tr> 
//                      <tr style="border-collapse:collapse;"> 
//                       <td align="center" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">Practicing scales can sometimes feel like a chore or busy work&nbsp;when you're learning the guitar, but there are countless reasons why practicing your scales is one of the most important parts of your daily practice.&nbsp; So many reasons, that I'm going to give you a new reason every day!</p></td> 
//                      </tr> 
//                      <tr style="border-collapse:collapse;"> 
//                       <td align="left" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;text-align:center;"><strong>Today's Reason: ${content.reason}</strong></p></td> 
//                      </tr> 
//                    </table></td> 
//                  </tr> 
//                </table></td> 
//              </tr> 
//            </table></td> 
//          </tr> 
//        </table> 
// `