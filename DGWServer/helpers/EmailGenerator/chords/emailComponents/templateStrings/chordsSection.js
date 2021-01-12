



module.exports = (elements, type, level)=>{
  type = type ? type : "Chord"
  level = level ? level : "Beginner"
  const item1 = elements[0]
  const item2 = elements[1]
  const description = "1 = index finger, 2 = middle finger, 3 = ring finger, 4 = pinky finger"
  const descriptionList = '<ul><li>1 = index finger</li><li>2 = middle finger</li><li>3 = ring finger</li><li>4 = pinky finger</li></ul>'
  // const descip2 = 'Strings marked with an X should be silent or muted when played.  \nStrings marked with an O be played with no fret pressed.  \n'

  // console.log(chord1)
  // console.log(chord2.getImageUrl())

	return `
	<table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
		<tbody>
			<tr>
				<td class="esd-structure es-p20" esd-custom-block-id="8636" align="left">
					<!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
					<table class="es-left" cellspacing="0" cellpadding="0" align="left">
						<tbody>
							<tr>
								<td class="es-m-p20b esd-container-frame" width="270" align="left">
									<table width="100%" cellspacing="0" cellpadding="0">
										<tbody>
											<tr>
												<td class="esd-block-text es-p15t es-p10b" align="left">
													<h3>${item1.getFormattedName()}</h3>
												</td>
											</tr>
											<tr>
												<td class="esd-block-image" align="center">
													<a target="_blank" href="${item1.getImageUrl()}"><img class="adapt-img" src="${item1.getImageUrl()}" alt="${item1.getFormattedName()}" style="display: block;" width="270" title="${item1.getFormattedName()}"></a></td>
											</tr>
											<tr>
												<td class="esd-block-text es-m-txt-c es-p20b" align="left">
													<p style="color: #000000;">${description}</p>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
					<table class="es-right" cellspacing="0" cellpadding="0" align="right">
						<tbody>
							<tr>
								<td class="es-m-p20b esd-container-frame" width="270" align="left">
									<table width="100%" cellspacing="0" cellpadding="0">
										<tbody>
											<tr>
												<td class="esd-block-text es-p15t es-p10b" align="left">
													<h3>${item2.getFormattedName()}</h3>
												</td>
											</tr>
											<tr>
												<td class="esd-block-image" align="center">
													<a target="_blank" href="${item2.getImageUrl()}"><img class="adapt-img" src="${item2.getImageUrl()}" alt="${item2.getFormattedName()}" style="display: block;" width="270" title="${item2.getFormattedName()}"></a></td>
											</tr>
											<tr>
												<td class="esd-block-text es-m-txt-c es-p20b" align="left">
													<p style="color: #000000;">${description}</p>
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
	</table>
	`
}
















			// ============= OLD ==================
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
	   //                <td align="center" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:27px;color:#333333;"><strong>Beginner Chords</strong></p></td> 
	   //               </tr> 
	   //             </table></td> 
	   //           </tr> 
	   //         </table></td> 
	   //       </tr> 
	   //       <tr style="border-collapse:collapse;"> 
	   //        <td align="left" style="padding:20px;Margin:0;"> 
	   //         <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]--> 
	   //         <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> 
	   //           <tr style="border-collapse:collapse;"> 
	   //            <td class="es-m-p20b" width="270" align="left" style="padding:0;Margin:0;"> 
	   //             <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px;"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333;">${chord1.getFormattedName()}</h3></td> 
	   //               </tr> 

	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="center" style="padding:0;Margin:0;"><img class="adapt-img" src="${chord1.getImageUrl()}" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="270"></td> 
	   //               </tr> 
	   //             </table></td> 
	   //           </tr> 
	   //         </table> 
	   //         <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]--> 
	   //         <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> 
	   //           <tr style="border-collapse:collapse;"> 
	   //            <td class="es-m-p20b" width="270" align="left" style="padding:0;Margin:0;"> 
	   //             <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="left" style="padding:0;Margin:0;padding-bottom:10px;padding-top:15px;"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333;">${chord2.getFormattedName()}</h3></td> 
	   //               </tr> 

	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="center" style="padding:0;Margin:0;"><img class="adapt-img" src="${chord2.getImageUrl()}" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;" width="270"></td> 
	   //               </tr> 
	   //             </table></td> 
	   //           </tr> 
	   //         </table> 
	   //         <!--[if mso]></td></tr></table><![endif]--></td> 
	   //       </tr> 
	   //     </table></td> 
	   //   </tr> 
	   // </table> `