contentDefault = {
  'title': "Help Us Improve",
  'footText': "Let us know if you have any feedback or suggestions for our daily emails!  We're always looking to improve with user feedback!",
  'socialMediaText': "Follow us to stay updated on Daily Guitar Workout news!",
  'unsubscribeLink': 'http://dailyguitarworkout.com/unsubscribe',
  'fbLink': "https://www.facebook.com/dailyguitarworkout/",
  'quoteBody': "Age is an issue of mind over matter. If you don't mind, it doesn't matter.",
  'quoteAuthor': "Mark Twain"
}

module.exports = 
    function(data = {}){
        const content = {...contentDefault,...data}

      const socialMedia = `
    <table class="es-content-body" style="background-color: rgb(255, 255, 255);" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
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
                                                <td class="esd-block-spacer es-p40b es-p40r es-p40l" align="center">
                                                    <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">
                                                        <tbody>
                                                            <tr>
                                                                <td style="border-bottom: 1px solid rgb(239, 239, 239); background: none; height: 1px; width: 100%; margin: 0px;"></td>
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
            <tr>
                <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                    <!--[if mso]><table width="560" cellpadding="0" 
                        cellspacing="0"><tr><td width="270" valign="top"><![endif]-->
                    <table class="es-left" cellspacing="0" cellpadding="0" align="left">
                        <tbody>
                            <tr>
                                <td class="es-m-p20b esd-container-frame" width="270" align="left">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td class="esd-block-text es-m-txt-c" align="left">
                                                    <p style="color: #333333;">${content.socialMediaText}</p>
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
                                <td class="esd-container-frame" width="270" align="left">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td class="esd-block-social es-p5t es-m-txt-c" align="right">
                                                    <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0">
                                                        <tbody>
                                                            <tr>
                                                                <td valign="top" align="center"><a target="_blank" href="${content.fbLink}"><img title="Facebook" src="https://eceppl.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png" alt="Fb" width="32"></a></td>
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
                    <hr>
                    <!--[if mso]></td></tr></table><![endif]-->
                </td>
            </tr>
        </tbody>
    </table>
      `

      const foot = `
    <table class="es-footer-body" style="background-color: rgb(128, 128, 128);" width="600" cellspacing="0" cellpadding="0" bgcolor="#808080" align="center">
        <tbody>
            <tr>
                <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                    <table width="100%" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td class="esd-container-frame" width="560" valign="top" align="center">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td class="esd-block-text" align="center">
                                                    <p>${content.title}</p>
                                                    <p>${content.footText}</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td align="center" class="esd-block-text">
                                                    <p>Login to <a target="_blank" href="https://dailyguitarworkout.com/usersettings">turn of emails</a> or <a target="_blank" href="https://dailyguitarworkout.com/emailpreferences">change your preferences</a></p>
                                                </td>
                                            </tr>    
                                            <tr>
                                                <hr>
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
        <table class="es-footer-body" style="background-color: rgb(255, 255, 255);" width="600" cellspacing="0" cellpadding="0" bgcolor="#808080" align="center">
        <tbody>
            <tr>
                <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left">
                    <table width="100%" cellspacing="0" cellpadding="0">
                        <tbody>
                            <tr>
                                <td class="esd-container-frame" width="560" valign="top" align="center">
                                    <table width="100%" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td align="center" class="esd-block-text">
                                                    <p style="color: #000000;>${content.quoteBody}</p>
                                                </td>
                                            </tr>                                            
                                            <tr>
                                                <td align="center" class="esd-block-text">
                                                    <p style="color: #oooooo;>${content.quoteAuthor}</p>
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
        return socialMedia+foot
}



// const socialMediaLinks = `
//                     <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"><img title="Facebook" src="images/stripoImages/facebook-logo-black.png" alt="Fb" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> 
//                     <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"><img title="Twitter" src="images/stripoImages/twitter-logo-black.png" alt="Tw" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> 
//                     <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"><img title="Instagram" src="images/stripoImages/instagram-logo-black.png" alt="Inst" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> 
//                     <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px;"><img title="Youtube" src="images/stripoImages/youtube-logo-black.png" alt="Yt" width="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"></td> 
// `