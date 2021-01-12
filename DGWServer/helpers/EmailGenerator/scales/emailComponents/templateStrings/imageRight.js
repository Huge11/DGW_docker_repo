



module.exports = (content, type, level)=>{
	level = level ? level : "Beginner"
	type = type ? type : "Scales"
	let typeSingular = type.charAt(type.length -1) == "s" ? type.slice(0,-1) : type
	const descriptionList = '<ul><li>1 = index finger</li><li>2 = middle finger</li><li>3 = ring finger</li><li>4 = pinky finger</li></ul>'
	const description = `First find the root note(red).  Then play the ${typeSingular} slowly, starting and ending on the root note.`

	return `
	<table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600">
		<tbody>
			<tr>
				<td class="esd-structure es-p20t es-p20r es-p20l" align="left">
					<!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="180" valign="top"><![endif]-->
					<table cellpadding="0" cellspacing="0" class="es-left" align="left">
						<tbody>
							<tr>
								<td width="180" class="es-m-p0r es-m-p20b esd-container-frame" valign="top" align="center">
									<table cellpadding="0" cellspacing="0" width="100%">
										<tbody>
											<tr>
												<td class="esd-block-text es-p30t es-p5r es-p25l" align="left">
													<h5 style="color: #333333; font-size: 18px;">${content.getFormattedName()}</h5>
												</td>
											</tr>
											<tr>
												<td class="esd-block-text es-p10t es-p10b es-p5r es-p25l" align="left">
													<p style="color: #333333;">${description}</p>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<!--[if mso]></td><td width="20"></td><td width="360" valign="top"><![endif]-->
					<table cellpadding="0" cellspacing="0" align="right">
						<tbody>
							<tr>
								<td width="360" align="left" class="esd-container-frame">
									<table cellpadding="0" cellspacing="0" width="100%">
										<tbody>
											<tr>
												<td class="esd-block-image" align="center">
													<a target="_blank" href="${content.getImageUrl()}"><img class="adapt-img" src="${content.getImageUrl()}" alt="${content.getFormattedName()}" style="display: block;" width="360" title="${content.getFormattedName()}">
													</a></td>
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