// bannerImg

module.exports = function(bannerImg = "https://placebear.com/200/300"){
  return `           
    <table class="es-content" cellspacing="0" cellpadding="0" align="center">
      <tbody>
        <tr></tr>
        <tr>
          <td class="esd-stripe" esd-custom-block-id="8590" align="center">
            <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
              <tbody>
                <tr>
                  <td class="esd-structure" align="left">
                    <table width="100%" cellspacing="0" cellpadding="0">
                      <tbody>
                        <tr>
                          <td class="esd-container-frame" width="600" valign="top" align="center">
                            <table width="100%" cellspacing="0" cellpadding="0">
                              <tbody>
                                <tr>
                                  <td class="esd-block-banner" style="position: relative;" align="center" esdev-config="h2"><a target="_blank"><img class="adapt-img esdev-stretch-width esdev-banner-rendered" src="${bannerImg}" alt title width="100%" style="display: block;"></a></td>
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
    </table>`
}

























// ================= OLD ===============
// `
//  <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;"> 
//    <tr style="border-collapse:collapse;"></tr> 
//    <tr style="border-collapse:collapse;"> 
//     <td align="center" style="padding:0;Margin:0;"> 
//      <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;"> 
//        <tr style="border-collapse:collapse;"> 
//         <td align="left" style="padding:0;Margin:0;"> 
//          <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
//            <tr style="border-collapse:collapse;"> 
//             <td width="600" valign="top" align="center" style="padding:0;Margin:0;"> 
//              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;"> 
//                <tr style="border-collapse:collapse;"> 
//                 <td style="padding:0;Margin:0;position:relative;" align="center"><img class="adapt-img" src="${bannerImg}" alt title width="100%" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> 
//                </tr> 
//              </table></td> 
//            </tr> 
//          </table></td> 
//        </tr> 
//      </table></td> 
//    </tr> 
//  </table> 
// `