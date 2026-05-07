import { Pressable, Text, View } from 'react-native';

import { copy73 } from '../generated/copy/copy73';
import { layout73 } from '../generated/layouts/layout73';
import { palette73 } from '../generated/palettes/palette73';

export function Screen73() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout73.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy73.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy73.detail} / {palette73.name}
			</Text>
		</View>
	);
}
