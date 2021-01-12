dataDefault = { 
  eventurl: 'https://calendar.songfacts.com/september/28/6223/',
  year: '1991',
  caturl: 'https://calendar.songfacts.com/category/radio/',
  category: 'Radio',
  data:
   `Thanks to a proliferation of "New Country" radio stations and more accurate reporting, country music goes mainstream as <a href="https://www.songfacts.com/songs/garth-brooks" target="_blank">Garth Brooks</a>' <b>Ropin' the Wind</b> becomes the first country album to debut at #1 on the Billboard 200 chart.`,
  title: 'Garth Brooks #1 As Country Goes Mainstream',
  imgurl: 'https://img.songfacts.com/calendar/6223_410.jpg' 
}


module.exports = (data = dataDefault)=>{ 
  return `
	<table class="es-content-body" style="background-color: rgb(153, 153, 153);" width="600" cellspacing="0" cellpadding="0" bgcolor="#999999" align="center">
		<tbody>
			<tr>
				<td class="esd-structure" style="background-color: rgb(153, 153, 153); background-position: left top;" bgcolor="#999999" align="left">
					<!--[if mso]><table width="600" cellpadding="0" cellspacing="0"><tr><td width="300" valign="top"><![endif]-->
					<table class="es-left" cellspacing="0" cellpadding="0" align="left">
						<tbody>
							<tr>
								<td class="esd-container-frame" width="300" align="left">
									<table width="100%" cellspacing="0" cellpadding="0">
										<tbody>
											<tr>
												<td class="esd-block-text es-p30t es-p25r es-p25l" align="left">
													<h2 style="color: #ffffff; font-size: 26px;">${data.title}</h2>
												</td>
											</tr>
											<tr>
												<td class="esd-block-html esdev-disable-select">
													<table>
														<tbody>
															<tr>
																<td align="left" class="esd-block-text">
																	<p style="font-size: 16px; font-family: 'comic sans ms', 'marker felt-thin', arial, sans-serif;"><strong><span style="font-size:22px;">&nbsp;<span style="font-size:16px;">${data.year} - </span></span></strong><span style="font-size:22px;"><span style="font-size:16px;">${data.data}</span></span></p>
																</td>
															</tr>
														</tbody>
													</table>
												</td>
											</tr>
											<tr>
												<td class="esd-block-button es-p10t es-p10b es-p25r es-p25l" align="left">
													<span class="es-button-border"><a href="${data.eventUrl}" class="es-button" target="_blank">Read More</a></span></td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<!--[if mso]></td><td width="0"></td><td width="300" valign="top"><![endif]-->
					<table class="es-right" cellspacing="0" cellpadding="0" align="right">
						<tbody>
							<tr>
								<td class="esd-container-frame" width="300" align="left">
									<table width="100%" cellspacing="0" cellpadding="0">
										<tbody>
											<tr>
												<td class="esd-block-image" align="center">
													<a target="_blank" href="${data.imgurl}"><img class="adapt-img" src="${data.imgurl}" alt="${data.title}" style="display: block;" width="300" title="${data.title}"></a></td>
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