contentDefault = {advice: "Always use a metronome"}


module.exports = 
	function(content = contentDefault){
	  // console.log(content)
		return `
	<table class="es-content-body" style="background-color: rgb(49, 203, 75);" width="600" cellspacing="0" cellpadding="0" bgcolor="#31cb4b" align="center">
		<tbody>
			<tr>
				<td class="esd-structure es-p30t es-p30b es-p20r es-p20l" style="background-color: rgb(153, 153, 153);" bgcolor="#999999" align="left">
					<table width="100%" cellspacing="0" cellpadding="0">
						<tbody>
							<tr>
								<td class="esd-container-frame" width="560" valign="top" align="center">
									<table width="100%" cellspacing="0" cellpadding="0">
										<tbody>
											<tr>
												<td class="esd-block-text" align="center">
													<h2 style="color: #ffffff; font-size: 28px;"><strong>Today's Guitar Workout</strong></h2>
												</td>
											</tr>
											<tr>
												<td class="esd-block-text es-p5t" align="center">
													<p style="color: #ffffff;">${content.advice}</p>
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






// ================= OLD ====================
// `           <table class="es-content" cellspacing="0" cellpadding="0" align="center">
//               <tbody>
//                 <tr>
//                   <td class="esd-stripe" esd-custom-block-id="8612" align="center">
//                     <table class="es-content-body" style="background-color: rgb(49, 203, 75);" width="600" cellspacing="0" cellpadding="0" bgcolor="#31cb4b" align="center">
//                       <tbody>
//                         <tr>
//                           <td class="esd-structure es-p30t es-p30b es-p20r es-p20l" style="background-color: rgb(153, 153, 153);" bgcolor="#999999" align="left">
//                             <table width="100%" cellspacing="0" cellpadding="0">
//                               <tbody>
//                                 <tr>
//                                   <td class="esd-container-frame" width="560" valign="top" align="center">
//                                     <table width="100%" cellspacing="0" cellpadding="0">
//                                       <tbody>
//                                         <tr>
//                                           <td class="esd-block-text" align="center">
//                                             <h2 style="color: #ffffff;">Today's Guitar Workout</h2>
//                                           </td>
//                                         </tr>
//                                         <tr>
//                                           <td class="esd-block-text es-p5t" align="center">
//                                             <p style="color: #ffffff;">${content.advice}</p>
//                                           </td>
//                                         </tr>
//                                       </tbody>
//                                     </table>
//                                   </td>
//                                 </tr>
//                               </tbody>
//                             </table>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>`