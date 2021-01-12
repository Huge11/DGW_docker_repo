module.exports = (level)=>{
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
													<h4 style="font-size: 20px;">${level}</h4>
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