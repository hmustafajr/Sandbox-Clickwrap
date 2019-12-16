// identifies where on the web page the click wrap will render
    <div id="ds-clickwrap"></div>

// calls the DocuSign clickwrap JavaScript library
    <script src="https://demo.docusign.net/clickapi/sdk/latest/docusign-click.js"></script>

/* calls the DocuSign Clickwarp.render method that provides the parameters that identifies:
    - Your Account
    - Clickwrap to Render
    - Unique user information to accept the clickwrap
*/
    <script>docuSignClick.Clickwrap.render
  (
    {
      environment: 'https://demo.docusign.net', // Base path that generates the iFrame for the clickwrap
      accountId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // API Account ID GUID value
      clickwrapId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', // GUID value for the specific clickwrap
      clientUserId: 'UNIQUE_USER_ID'
/* Value that will be used to identify each user that acknowledges the agreement
    - The value specified can be anything your backend uses to track individual users.
        - Employee IDs, email addresses, surrogate key values, or any other valid identifier.
Because all other values in the JavaScript are the same for each user, the clientUserId value is the only way to differentiate between those who have accepted the clickwrap.
Using the combination of accountId, clickwrapId, and clientUserId, DocuSign is able to track which specific users have accepted each clickwrap agreement and alert each user if they attempt to accept a clickwrap agreement more than once.
*/

}
      ,'#ds-clickwrap');
    </script>
