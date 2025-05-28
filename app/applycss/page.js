// // app/page.jsx
// 'use client';

// import CustomButton from './components/CustomButton';
// import CustomBox from './components/CustomBox';

// export default function Home() {
//   return (
//     <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-8">
//       <CustomButton onClick={() => alert('Clicked!')}>Click Me</CustomButton>
      
//       <CustomBox>
//         This is a box with a custom green background color.
//       </CustomBox>
//     </main>
//   );
// }
'use client';

import CustomButton from './components/CustomButton';
import CustomBox from './components/CustomBox';
// import PinkGoldBox from './components/PinkGoldBox';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-8 bg-gray-100">
      <CustomButton onClick={() => alert('Clicked!')}>Click Me</CustomButton>
      
      <CustomBox>
        This is a box with a custom green background color.
      </CustomBox>

       {/* <PinkGoldBox>
        Hover me! I'm pink — but turn gold on hover.
      </PinkGoldBox>  */}
    </main>
  );
}
