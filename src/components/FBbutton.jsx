import React, { useEffect } from 'react';
import { FaFacebook } from "react-icons/fa";

const FBbutton = () => {

  useEffect(() => {
    // Load the Facebook SDK asynchronously
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '277762014973347',
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
          const accessToken = response.authResponse.accessToken;
          //Use this token to call the debug_token API and get the shared WABA's ID
          window.FB.api(
            '/me',
            'GET',
            {"fields":"id,name"},
            function(response) {
              console.log(response);
            }
          );
        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      },
      {
        config_id: process.env.NEXT_PUBLIC_CONFIG_ID,
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
    <div 
      className='flex flex-col items-center space-y-2' 
    >
      <p className='text-base font-bold text-white'>Sign Up with Facebook</p>
      <button 
        type='button'
        onClick={launchWhatsAppSignup} 
        className='mr-2 hover:scale-110 transform transition duration-500 cursor-pointer'
      >
        <FaFacebook className='h-12 w-12 text-blue-800 bg-white rounded-full' />
      </button>
    </div>
  );
};

export default FBbutton;
