import React, { useEffect } from 'react';
import { FaFacebook } from "react-icons/fa";

const FBbutton = () => {
  useEffect(() => {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: 'your-facebook-app-id',
        cookie: true,
        xfbml: true,
        version: 'v19.0',
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const launchWhatsAppSignup = () => {
    window.FB.login(
      function (response) {
        if (response.authResponse) {
          const code = response.authResponse.code;
          // The returned code must be transmitted to your backend
          // Perform a server-to-server call from there to Facebook servers for an access token
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      },
      {
        config_id: '<CONFIG_ID>',
        response_type: 'code',
        override_default_response_type: true,
        extras: {
          setup: {
            // Prefilled data can go here
          },
        },
      }
    );
  };

  return (
    <div>
        <button 
            className='border border-gray-300 rounded-full p-2 flex items-center hover:bg-[#F6FAFD]' 
            onClick={launchWhatsAppSignup}
        >
            <span className='mr-2'><FaFacebook className='h-5 w-5 text-blue-500' /></span>
            <span className='text-sm'>Sign Up With Facebook</span>
        </button>
    </div>
  );
};

export default FBbutton;
