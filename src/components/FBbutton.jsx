import React, { useEffect } from 'react';
import { FaFacebook, FaFacebookF } from "react-icons/fa";
import { LiaFacebook } from "react-icons/lia";

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
          console.log(accessToken);
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
        config_id: import.meta.env.VITE_CONFIG_ID,
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
      className='' 
    >
      {/* <p className='text-base font-bold text-white'>Sign Up with Facebook</p> */}
      <button 
        type='button'
        onClick={launchWhatsAppSignup} 
        className='mr-2 flex items-center space-x-4 border border-[#1877F2]  cursor-pointer bg-white rounded-md p-2'
      > 
          <img src='facebook_2x.png' className='' />
          <span className='text-[#1877F2] font-semibold text-xl'>Login with Facebook</span>
      </button>
    </div>
  );
};

export default FBbutton;
