import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import tw from 'twrnc';

const Whitelogo = () => {

    return (
        <View style={tw`w-auto h-auto`}>
            <Svg viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M57.168 57.7382V48.4748C57.1697 48.2821 57.2206 48.093 57.3159 47.9254C57.4113 47.7578 57.5479 47.6173 57.7129 47.5172C57.8778 47.417 58.0656 47.3606 58.2585 47.3532C58.4514 47.3459 58.643 47.3878 58.8152 47.475L68.0926 52.1867C68.2807 52.2808 68.4389 52.4254 68.5495 52.6041C68.66 52.7829 68.7186 52.9889 68.7186 53.199C68.7186 53.4091 68.66 53.6151 68.5495 53.7939C68.4389 53.9727 68.2807 54.1172 68.0926 54.2113L58.8002 58.7555C58.6273 58.8407 58.4356 58.8803 58.2431 58.8707C58.0506 58.8612 57.8638 58.8026 57.7003 58.7007C57.5368 58.5988 57.4021 58.4569 57.309 58.2885C57.2158 58.12 57.1673 57.9306 57.168 57.7382V57.7382Z" fill="white"/>
            <Path d="M91.826 22.2786H27.8828V88.6268H91.826V22.2786Z" fill="white"/>
            <Path d="M46.5289 88.6224C49.4728 88.6224 51.8585 86.1478 51.8585 83.0934C51.8585 80.0389 49.4728 77.5643 46.5289 77.5643C43.5849 77.5643 41.1992 80.0389 41.1992 83.0934C41.1992 86.1478 43.5849 88.6224 46.5289 88.6224Z" fill="white"/>
            <Path d="M73.1734 88.6224C76.1148 88.6224 78.5005 86.1478 78.5005 83.0934C78.5005 80.0389 76.1148 77.5643 73.1734 77.5643C70.2319 77.5643 67.8438 80.0389 67.8438 83.0934C67.8438 86.1478 70.2294 88.6224 73.1734 88.6224Z" fill="white"/>
            <Path d="M89.1185 38.9137C88.2045 37.9993 87.1149 37.2787 85.9152 36.7951C84.7154 36.3114 83.4302 36.0747 82.1366 36.0992H42.9466L42.2457 30.4002C42.0006 28.182 40.9667 26.1253 39.3318 24.6037C37.7317 23.1153 35.6282 22.2843 33.4414 22.2766H31.8843C31.3555 22.2783 30.8325 22.3868 30.3468 22.5956C29.8611 22.8043 29.4227 23.109 29.058 23.4914C28.2999 24.2796 27.8773 25.3306 27.8789 26.4234C27.8753 27.5151 28.2952 28.5659 29.0505 29.3554C29.4157 29.7391 29.8552 30.0446 30.3424 30.2535C30.8295 30.4623 31.3541 30.57 31.8843 30.5701H33.4464C33.6672 30.5758 33.8775 30.6651 34.0347 30.8201C34.1963 30.9755 34.2959 31.1842 34.315 31.4075L38.3204 63.9167C38.5623 66.1367 39.5957 68.1958 41.2318 69.7182C42.8307 71.2085 44.9349 72.0398 47.1222 72.0453H74.0783C77.3045 72.0344 80.4322 70.9341 82.9527 68.9233C85.5306 66.8745 87.375 64.0473 88.2097 60.8648L91.5292 48.337C91.9725 46.6845 91.9837 44.946 91.5617 43.2879C91.1428 41.6422 90.3005 40.1344 89.1185 38.9137V38.9137ZM80.5019 58.6602C80.1206 60.1059 79.2821 61.3902 78.1112 62.322C76.9663 63.238 75.5454 63.7417 74.0783 63.7518H47.1097C46.8888 63.7464 46.6784 63.657 46.5214 63.5018C46.3609 63.3448 46.2623 63.1355 46.2435 62.9119L43.9655 44.3902H82.5372C82.7431 44.3901 82.9463 44.4381 83.1304 44.5302C83.3171 44.625 83.4791 44.7619 83.6036 44.9301C83.729 45.1018 83.8146 45.2992 83.854 45.5081C83.8934 45.7169 83.8857 45.9319 83.8314 46.1374L80.5019 58.6602Z" fill="white"/>
            <Path d="M56.781 113.39C88.1403 113.39 113.562 88.0067 113.562 56.6949C113.562 25.3832 88.1403 0 56.781 0C25.4217 0 0 25.3832 0 56.6949C0 88.0067 25.4217 113.39 56.781 113.39Z" fill="white"/>
            <Path d="M54.207 58.7241V49.8788C54.2086 49.6947 54.2573 49.5141 54.3483 49.3541C54.4394 49.1941 54.5698 49.0599 54.7274 48.9643C54.8849 48.8687 55.0642 48.8148 55.2484 48.8078C55.4326 48.8008 55.6155 48.8408 55.7799 48.9241L64.6411 53.4231C64.82 53.5143 64.9701 53.6535 65.0744 53.825C65.1787 53.9965 65.2332 54.1935 65.2317 54.3942C65.2302 54.5948 65.1728 54.7911 65.066 54.961C64.9591 55.131 64.807 55.2679 64.6267 55.3564L55.768 59.6955C55.6028 59.7767 55.4196 59.8145 55.2357 59.8053C55.0518 59.7961 54.8734 59.7402 54.7171 59.643C54.5609 59.5458 54.432 59.4104 54.3428 59.2496C54.2535 59.0888 54.2068 58.9079 54.207 58.7241V58.7241Z" fill="#BC2020"/>
            <Path d="M44.0555 88.2257C46.8666 88.2257 49.1446 85.8628 49.1446 82.9462C49.1446 80.0295 46.8666 77.6666 44.0555 77.6666C41.2444 77.6666 38.9688 80.0295 38.9688 82.9462C38.9688 85.8628 41.2468 88.2257 44.0555 88.2257Z" fill="#BC2020"/>
            <Path d="M69.4969 88.2257C72.308 88.2257 74.586 85.8628 74.586 82.9462C74.586 80.0295 72.308 77.6666 69.4969 77.6666C66.6858 77.6666 64.4102 80.0295 64.4102 82.9462C64.4102 85.8628 66.6882 88.2257 69.4969 88.2257Z" fill="#BC2020"/>
            <Path d="M84.7198 40.7576C83.8473 39.8842 82.807 39.1959 81.6613 38.7341C80.5156 38.2722 79.2883 38.0464 78.053 38.0701H40.6315L39.9622 32.6283C39.7282 30.5103 38.7409 28.5463 37.1797 27.0934C35.6525 25.6728 33.6449 24.8793 31.5576 24.8713H30.0636C29.5586 24.873 29.0592 24.9765 28.5954 25.1759C28.1316 25.3752 27.713 25.6662 27.3648 26.0313C26.6444 26.7857 26.2436 27.7887 26.2461 28.831V28.831C26.2436 29.8733 26.6444 30.8763 27.3648 31.6307C27.7127 31.9962 28.1312 32.2875 28.5951 32.4868C29.059 32.6862 29.5585 32.7896 30.0636 32.7906H31.5576C31.7676 32.7961 31.9677 32.8815 32.1169 33.0293C32.2712 33.1777 32.3664 33.377 32.3846 33.5902L36.2092 64.6325C36.4413 66.752 37.4278 68.7178 38.9893 70.1721C40.5163 71.5948 42.5254 72.3885 44.6139 72.3942H70.3584C73.439 72.3864 76.4263 71.3383 78.8347 69.4203C81.2955 67.4632 83.0564 64.7639 83.8545 61.7254L87.0241 49.7629C87.4459 48.1846 87.4558 46.5248 87.0528 44.9416C86.6539 43.3677 85.8496 41.9253 84.7198 40.7576V40.7576ZM76.4921 59.6131C76.128 60.993 75.3284 62.2191 74.2117 63.1097C73.1173 63.984 71.7599 64.4649 70.3584 64.4749H44.6067C44.3965 64.4697 44.1964 64.3843 44.0473 64.2363C43.8934 64.0866 43.7984 63.8867 43.7796 63.673L41.6044 45.9871H78.4379C78.6346 45.987 78.8285 46.0328 79.0044 46.1207C79.1826 46.2113 79.3373 46.342 79.4562 46.5026C79.576 46.6665 79.6576 46.8551 79.6953 47.0545C79.7329 47.2539 79.7255 47.4592 79.6737 47.6554L76.4921 59.6131Z" fill="#BC2020"/>
            </Svg>
        </View>
    );
}

export default Whitelogo