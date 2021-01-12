// const css = require('./emailCssString.js')

module.exports = 
    function(body, css){
        return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>Daily Guitar Workout</title>
  <!--[if (mso 16)]>
  <style type="text/css">
  a {text-decoration: none;}
  </style>
  <![endif]-->
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
  <!--[if !mso]><!-- -->
  <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i" rel="stylesheet">
  ${css}
  <!--<![endif]-->
</head>

<body>
  <div class="es-wrapper-color">
    <!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color="#f6f6f6"></v:fill>
      </v:background>
    <![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0">
      <tbody>
        <tr>
          <td class="esd-email-paddings" valign="top">
                  ${body}  
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div style="position: absolute; left: -9999px; top: -9999px; margin: 0px;"></div>
  <div style="position: absolute; left: -9999px; top: -9999px; margin: 0px; padding: 0px; border: 0px none; width: 1px;"></div>
</body>

</html>

          `
        }













          //               </td>                              
          //      </tr> 
          //    </table> 
          //   </div> 
          //   <div style="position:absolute;left:-9999px;top:-9999px;margin:0px;"></div> 
          //   <div style="position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px none;width:1px;"></div>  
          //  </body>
          // </html>