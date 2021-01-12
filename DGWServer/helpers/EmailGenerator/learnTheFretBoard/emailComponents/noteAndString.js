const Random = require('../../../MusicElementClasses/Random.js')

  let findDefault = {
	'item1': {'note': Random.getAnyRandomNoteName(), 'string': Random.getRandomString()},
	'item2': {'note': Random.getAnyRandomNoteName(), 'string': Random.getRandomString()}
  }
  let identifyDefault = {
	'item1': {'fret': Random.getRandomFret(), 'string': Random.getRandomString()},
	'item2': {'fret': Random.getRandomFret(), 'string': Random.getRandomString()}
  }



module.exports = (find = findDefault, identify = identifyDefault)=>{
  return `            
	<table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
		<tbody>
			<tr>
				<td class="es-p20t es-p20r es-p20l esd-structure" align="left">
					<!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
					<table cellpadding="0" cellspacing="0" class="es-left" align="left">
						<tbody>
							<tr>
								<td width="270" class="es-m-p20b esd-container-frame" align="left">
									<table cellpadding="0" cellspacing="0" width="100%">
										<tbody>
											<tr>
												<td align="center" class="esd-block-text">
													<h4 style="font-size: 18px;"><strong>Find...</strong></h4>
												</td>
											</tr>
											<tr>
												<td align="center" class="esd-block-text">
													<p>The <strong>${find.item1.note} </strong>note - on the <strong>${find.item1.string}th</strong> string</p>
												</td>
											</tr>
											<tr>
												<td align="center" class="esd-block-text">
													<p>The <strong>${find.item2.note}</strong> note - on <strong>${find.item2.string}nd</strong> string</p>
												</td>
											</tr>
											<tr>
												<td align="center" class="esd-block-spacer es-p20">
													<table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
														<tbody>
															<tr>
																<td style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;"></td>
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
					<!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]-->
					<table cellpadding="0" cellspacing="0" class="es-right" align="right">
						<tbody>
							<tr>
								<td width="270" align="left" class="esd-container-frame">
									<table cellpadding="0" cellspacing="0" width="100%">
										<tbody>
											<tr>
												<td align="center" class="esd-block-text">
													<h4 style="font-size: 18px;"><strong>What is the Name of...</strong></h4>
												</td>
											</tr>
											<tr>
												<td align="center" class="esd-block-text">
													<p>The <strong>${identify.item1.fret}th</strong> fret - on the <strong>${identify.item1.string}th</strong> string</p>
												</td>
											</tr>
											<tr>
												<td align="center" class="esd-block-text">
													<p>The <strong>${identify.item2.fret}th</strong> fret - on the <strong>${identify.item2.string}rd</strong> string</p>
												</td>
											</tr>
											<tr>
												<td align="center" class="esd-block-spacer es-p20">
													<table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0">
														<tbody>
															<tr>
																<td style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;"></td>
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
					<!--[if mso]></td></tr></table><![endif]-->
				</td>
			</tr>
		</tbody>
	</table>`
	 }




	 










			// ================ OLD =================
	   //      `<table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
	   //   <tr style="border-collapse:collapse;"> 
	   //    <td align="center" style="padding:0;Margin:0;"> 
	   //     <table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;"> 

	   //       <tr style="border-collapse:collapse;"> 
	   //        <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;"> 
	   //         <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]--> 
	   //         <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left;"> 
	   //           <tr style="border-collapse:collapse;"> 
	   //            <td width="270" class="es-m-p20b" align="left" style="padding:0;Margin:0;"> 
	   //             <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="left" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333;text-align:center;"><strong>Find...</strong></p></td> 
	   //               </tr> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="left" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;text-align:center;">The ${Find.item1.note} note - on the ${Find.item1.string}th string</p></td> 
	   //               </tr> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="left" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;text-align:center;">The ${Find.item2.note} note - on ${Find.item2.string}nd string</p></td> 
	   //               </tr> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="center" style="padding:20px;Margin:0;"> 
	   //                 <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
	   //                   <tr style="border-collapse:collapse;"> 
	   //                    <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px;"></td> 
	   //                   </tr> 
	   //                 </table></td> 
	   //               </tr> 
	   //             </table></td> 
	   //           </tr> 
	   //         </table> 
	   //         <!--[if mso]></td><td width="20"></td><td width="270" valign="top"><![endif]--> 
	   //         <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right;"> 
	   //           <tr style="border-collapse:collapse;"> 
	   //            <td width="270" align="left" style="padding:0;Margin:0;"> 
	   //             <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="left" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333;text-align:center;"><strong>What is the Name of...</strong></p></td> 
	   //               </tr> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="left" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;text-align:center;">The ${Identify.item1.fret}th fret - on the ${Identify.item1.string}th string</p></td> 
	   //               </tr> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="left" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;text-align:center;">The ${Identify.item2.fret}th fret - on the ${Identify.item2.string}rd string</p></td> 
	   //               </tr> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="center" style="padding:20px;Margin:0;"> 
	   //                 <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
	   //                   <tr style="border-collapse:collapse;"> 
	   //                    <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px;"></td> 
	   //                   </tr> 
	   //                 </table></td> 
	   //               </tr> 
	   //             </table></td> 
	   //           </tr> 
	   //         </table> 
	   //         <!--[if mso]></td></tr></table><![endif]--></td> 
	   //       </tr> 
	   //       <tr style="border-collapse:collapse;"> 
	   //        <td align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:20px;padding-right:20px;"> 
	   //         <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
	   //           <tr style="border-collapse:collapse;"> 
	   //            <td width="560" align="center" valign="top" style="padding:0;Margin:0;"> 
	   //             <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="left" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;text-align:center;"><strong>Hint:&nbsp;</strong>You can remember the names of the open strings with this phrase:&nbsp;</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;text-align:center;"><strong>E</strong>ddie&nbsp;<strong>A</strong>te&nbsp;<strong>D</strong>ynamite,&nbsp;<strong>G</strong>ood&nbsp;<strong>B</strong>ye&nbsp;<strong>E</strong>ddie</p></td> 
	   //               </tr> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="center" style="padding:20px;Margin:0;"> 
	   //                 <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
	   //                   <tr style="border-collapse:collapse;"> 
	   //                    <td style="padding:0;Margin:0px 0px 0px 0px;border-bottom:1px solid #CCCCCC;background:none;height:1px;width:100%;margin:0px;"></td> 
	   //                   </tr> 
	   //                 </table></td> 
	   //               </tr> 
	   //             </table></td> 
	   //           </tr> 
	   //         </table></td> 
	   //       </tr> 
	   //     </table></td> 
	   //   </tr> 
	   // </table> `