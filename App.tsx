import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { Uniwind } from "uniwind";

import { Screen1 } from './src/screens/Screen1';
import { Screen2 } from './src/screens/Screen2';
import { Screen3 } from './src/screens/Screen3';
import { Screen4 } from './src/screens/Screen4';
import { Screen5 } from './src/screens/Screen5';
import { Screen6 } from './src/screens/Screen6';
import { Screen7 } from './src/screens/Screen7';
import { Screen8 } from './src/screens/Screen8';
import { Screen9 } from './src/screens/Screen9';
import { Screen10 } from './src/screens/Screen10';
import { Screen11 } from './src/screens/Screen11';
import { Screen12 } from './src/screens/Screen12';
import { Screen13 } from './src/screens/Screen13';
import { Screen14 } from './src/screens/Screen14';
import { Screen15 } from './src/screens/Screen15';
import { Screen16 } from './src/screens/Screen16';
import { Screen17 } from './src/screens/Screen17';
import { Screen18 } from './src/screens/Screen18';
import { Screen19 } from './src/screens/Screen19';
import { Screen20 } from './src/screens/Screen20';
import { Screen21 } from './src/screens/Screen21';
import { Screen22 } from './src/screens/Screen22';
import { Screen23 } from './src/screens/Screen23';
import { Screen24 } from './src/screens/Screen24';
import { Screen25 } from './src/screens/Screen25';
import { Screen26 } from './src/screens/Screen26';
import { Screen27 } from './src/screens/Screen27';
import { Screen28 } from './src/screens/Screen28';
import { Screen29 } from './src/screens/Screen29';
import { Screen30 } from './src/screens/Screen30';
import { Screen31 } from './src/screens/Screen31';
import { Screen32 } from './src/screens/Screen32';
import { Screen33 } from './src/screens/Screen33';
import { Screen34 } from './src/screens/Screen34';
import { Screen35 } from './src/screens/Screen35';
import { Screen36 } from './src/screens/Screen36';
import { Screen37 } from './src/screens/Screen37';
import { Screen38 } from './src/screens/Screen38';
import { Screen39 } from './src/screens/Screen39';
import { Screen40 } from './src/screens/Screen40';
import { Screen41 } from './src/screens/Screen41';
import { Screen42 } from './src/screens/Screen42';
import { Screen43 } from './src/screens/Screen43';
import { Screen44 } from './src/screens/Screen44';
import { Screen45 } from './src/screens/Screen45';
import { Screen46 } from './src/screens/Screen46';
import { Screen47 } from './src/screens/Screen47';
import { Screen48 } from './src/screens/Screen48';
import { Screen49 } from './src/screens/Screen49';
import { Screen50 } from './src/screens/Screen50';
import { Screen51 } from './src/screens/Screen51';
import { Screen52 } from './src/screens/Screen52';
import { Screen53 } from './src/screens/Screen53';
import { Screen54 } from './src/screens/Screen54';
import { Screen55 } from './src/screens/Screen55';
import { Screen56 } from './src/screens/Screen56';
import { Screen57 } from './src/screens/Screen57';
import { Screen58 } from './src/screens/Screen58';
import { Screen59 } from './src/screens/Screen59';
import { Screen60 } from './src/screens/Screen60';
import { Screen61 } from './src/screens/Screen61';
import { Screen62 } from './src/screens/Screen62';
import { Screen63 } from './src/screens/Screen63';
import { Screen64 } from './src/screens/Screen64';
import { Screen65 } from './src/screens/Screen65';
import { Screen66 } from './src/screens/Screen66';
import { Screen67 } from './src/screens/Screen67';
import { Screen68 } from './src/screens/Screen68';
import { Screen69 } from './src/screens/Screen69';
import { Screen70 } from './src/screens/Screen70';
import { Screen71 } from './src/screens/Screen71';
import { Screen72 } from './src/screens/Screen72';
import { Screen73 } from './src/screens/Screen73';
import { Screen74 } from './src/screens/Screen74';
import { Screen75 } from './src/screens/Screen75';
import { Screen76 } from './src/screens/Screen76';
import { Screen77 } from './src/screens/Screen77';
import { Screen78 } from './src/screens/Screen78';
import { Screen79 } from './src/screens/Screen79';
import { Screen80 } from './src/screens/Screen80';
import { Screen81 } from './src/screens/Screen81';
import { Screen82 } from './src/screens/Screen82';
import { Screen83 } from './src/screens/Screen83';
import { Screen84 } from './src/screens/Screen84';
import { Screen85 } from './src/screens/Screen85';
import { Screen86 } from './src/screens/Screen86';
import { Screen87 } from './src/screens/Screen87';
import { Screen88 } from './src/screens/Screen88';
import { Screen89 } from './src/screens/Screen89';
import { Screen90 } from './src/screens/Screen90';
import { Screen91 } from './src/screens/Screen91';
import { Screen92 } from './src/screens/Screen92';
import { Screen93 } from './src/screens/Screen93';
import { Screen94 } from './src/screens/Screen94';
import { Screen95 } from './src/screens/Screen95';
import { Screen96 } from './src/screens/Screen96';
import { Screen97 } from './src/screens/Screen97';
import { Screen98 } from './src/screens/Screen98';
import { Screen99 } from './src/screens/Screen99';
import { Screen100 } from './src/screens/Screen100';

const screens = [Screen1, Screen2, Screen3, Screen4, Screen5, Screen6, Screen7, Screen8, Screen9, Screen10, Screen11, Screen12, Screen13, Screen14, Screen15, Screen16, Screen17, Screen18, Screen19, Screen20, Screen21, Screen22, Screen23, Screen24, Screen25, Screen26, Screen27, Screen28, Screen29, Screen30, Screen31, Screen32, Screen33, Screen34, Screen35, Screen36, Screen37, Screen38, Screen39, Screen40, Screen41, Screen42, Screen43, Screen44, Screen45, Screen46, Screen47, Screen48, Screen49, Screen50, Screen51, Screen52, Screen53, Screen54, Screen55, Screen56, Screen57, Screen58, Screen59, Screen60, Screen61, Screen62, Screen63, Screen64, Screen65, Screen66, Screen67, Screen68, Screen69, Screen70, Screen71, Screen72, Screen73, Screen74, Screen75, Screen76, Screen77, Screen78, Screen79, Screen80, Screen81, Screen82, Screen83, Screen84, Screen85, Screen86, Screen87, Screen88, Screen89, Screen90, Screen91, Screen92, Screen93, Screen94, Screen95, Screen96, Screen97, Screen98, Screen99, Screen100];

export default function App() {
	return (
		<Uniwind>
			<ScrollView className="flex-1 bg-white p-4">
				<Text className="text-2xl font-bold text-black">uniwind#341 repro</Text>
				{screens.map((Screen, i) => <Screen key={i} />)}
				<StatusBar style="auto" />
			</ScrollView>
		</Uniwind>
	);
}
