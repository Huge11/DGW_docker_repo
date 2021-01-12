contentDefault1 = {
  songName: "Mr. Washington",
  artist: "Nahko Bear",
  videoUrl: "https://www.youtube.com/watch?v=Wd1CHFfym1s",
  imageUrl: 'https://i.ytimg.com/vi/Wd1CHFfym1s/maxresdefault.jpg',
  altText: "Me and Mr. Washington [official music video]"
}

contentDefault2 = {
  songName: "Mr. Washington",
  artist: "Nahko Bear",
  videoUrl: "https://www.youtube.com/watch?v=Wd1CHFfym1s",
  imageUrl: 'https://i.ytimg.com/vi/Wd1CHFfym1s/maxresdefault.jpg',
  altText: "Me and Mr. Washington [official music video]"
}


module.exports = (video1 = contentDefault1, video2 = contentDefault2)=>{
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
													<h4 style="font-size: 18px;"><strong>Beginner</strong></h4>
												</td>
											</tr>
											<tr>
												<td align="center" class="esd-block-video">
													<a target="_blank" href="${video1.videoUrl}"><img class="adapt-img esdev-stretch-width" src="https://eceppl.stripocdn.email/content/guids/videoImgGuid/images/31231570760420376.png" alt="${video1.altText}" width="270" title="${video1.altText}" esdev-video-origin="https://eceppl.stripocdn.email/content/guids/videoImgGuid/images/25641570760416878"></a></td>
											</tr>
											<tr>
												<td align="center" class="esd-block-text">
													<p>${video1.songName} - ${video1.artist}</p>
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
													<h4 style="font-size: 18px;"><b>Intermediate</b></h4>
												</td>
											</tr>
											<tr>
												<td align="center" class="esd-block-video">
													<a target="_blank" href="${video1.videoUrl}"><img class="adapt-img esdev-stretch-width" src="https://eceppl.stripocdn.email/content/guids/videoImgGuid/images/61221570760437010.png" alt="${video1.altText}" width="270" title="${video1.altText}" esdev-video-origin="https://eceppl.stripocdn.email/content/guids/videoImgGuid/images/47861570760434516"></a></td>
											</tr>
											<tr>
												<td align="center" class="esd-block-text">
													<p>${video2.songName} - ${video2.artist}</p>
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
	</table>

`
}






















// ============== OLD =====================
	   // <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
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
	   //                <td align="center" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333;"><strong>Beginner</strong></p></td> 
	   //               </tr> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="center" style="padding:0;Margin:0;"><a target="_blank" href="${video1.videoUrl}" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#333333;"><img class="adapt-img" src="${video1.imageUrl}" alt="Me and Mr. Washington [official music video]" width="270" title="Me and Mr. Washington [official music video]" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a></td> 
	   //               </tr> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="center" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">${video1.songName} - ${video1.songArtist}</p></td> 
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
	   //                <td align="center" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:16px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:24px;color:#333333;"><b>Intermediate</b></p></td> 
	   //               </tr> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="center" style="padding:0;Margin:0;"><a target="_blank" href="${video2.videoUrl}" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:14px;text-decoration:underline;color:#333333;"><img class="adapt-img" src="${video2.imageUrl}" alt="Me and Mr. Washington [official music video]" width="270" title="Me and Mr. Washington [official music video]" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></a></td> 
	   //               </tr> 
	   //               <tr style="border-collapse:collapse;"> 
	   //                <td align="center" style="padding:0;Margin:0;"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:14px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#333333;">${video2.songName} - ${video2.songArtist}</p></td> 
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
	   //     </table></td> 
	   //   </tr> 
	   // </table> 