const contentDefault = {
  'img': 'https://embedwistia-a.akamaihd.net/deliveries/5468afd69ae938335f944c079dd4220e3a854c4a.webp?image_crop_resized=1280x720',
  'title': 'Learn From GuitarTricks.com yo',
  'body': 'Click here on my affiliate link so that I can continue to eat food.',
  'link': 'https://www.guitartricks.com/?a_aid=5cc921699921e'  
}



module.exports = 
	function(content = contentDefault){
		return `           
	<table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
		<tbody>
			<tr>
				<td class="esd-structure es-p20" esd-custom-block-id="8614" align="left">
					<!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="180" valign="top"><![endif]-->
					<table class="es-left" cellspacing="0" cellpadding="0" align="left">
						<tbody>
							<tr>
								<td class="es-m-p0r es-m-p20b esd-container-frame" width="180" valign="top" align="center">
									<table width="100%" cellspacing="0" cellpadding="0">
										<tbody>
											<tr>
												<td class="esd-block-image" align="center">
													<a target="_blank" href="${content.link}"><img class="adapt-img" src="${content.img}" alt="${content.title}" style="display: block;" width="180" title="${content.title}"></a></td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<!--[if mso]></td><td width="20"></td><td width="360" valign="top"><![endif]-->
					<table cellspacing="0" cellpadding="0" align="right">
						<tbody>
							<tr>
								<td class="es-m-p20b esd-container-frame" width="360" align="left">
									<table width="100%" cellspacing="0" cellpadding="0">
										<tbody>
											<tr>
												<td class="esd-block-text es-p10t" align="left">
													<h3>${content.title}</h3>
												</td>
											</tr>
											<tr>
												<td class="esd-block-text es-p10t es-p10b es-m-txt-c" align="left">
													<p>${content.body}</p>
												</td>
											</tr>
											<tr>
												<td class="esd-block-text es-m-txt-c" align="left">
													<p><a href="${content.link}" target="_blank">Learn More +</a></p>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<!--[if mso]></td></tr></table><![endif]-->
				</td>
			</tr>
		</tbody>
	</table>`
}














			// ========== OLD ==============
//             `
//  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
//    <tr style="border-collapse:collapse;"> 
//     <td align="center" style="padding:0;Margin:0;"> 
//      <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;"> 
//        <tr style="border-collapse:collapse;"> 
//         <td align="left" style="padding:20px;Margin:0;"> 
//          <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="180" valign="top"><![endif]--> 
//          <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> 
//            <tr style="border-collapse:collapse;"> 
//             <td class="es-m-p0r es-m-p20b" width="180" valign="top" align="center" style="padding:0;Margin:0;"> 
//              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
//                <tr style="border-collapse:collapse;"> 
//                 <td align="center" style="padding:0;Margin:0;"><img class="adapt-img" src="${content.img}" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="180"></td> 
//                </tr> 
//              </table></td> 
//            </tr> 
//          </table> 
//          <!--[if mso]></td><td width="20"></td><td width="360" valign="top"><![endif]--> 
//          <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
//            <tr style="border-collapse:collapse;"> 
//             <td class="es-m-p20b" width="360" align="left" style="padding:0;Margin:0;"> 
//              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
//                <tr style="border-collapse:collapse;"> 
//                 <td align="left" style="padding:0;Margin:0;padding-top:10px;"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333;">${content.title}</h3></td> 
//                </tr> 
//                <tr style="border-collapse:collapse;"> 
//                 <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">${content.body}</p></td> 
//                </tr> 
//                <tr style="border-collapse:collapse;"> 
//                 <td class="es-m-txt-c" align="left" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;"><a href="${content.link}" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#333333;">Read More +</a></p></td> 
//                </tr> 
//              </table></td> 
//            </tr> 
//          </table> 
//          <!--[if mso]></td></tr></table><![endif]--></td> 
//        </tr> 
//      </table></td> 
//    </tr> 
//  </table> 
// `