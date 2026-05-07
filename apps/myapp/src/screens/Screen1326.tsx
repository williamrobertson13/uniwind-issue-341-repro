import { Pressable, Text, View } from 'react-native';

import { copy1326 } from '../generated/copy/copy1326';
import { layout1326 } from '../generated/layouts/layout1326';
import { palette1326 } from '../generated/palettes/palette1326';

export function Screen1326() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1326.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1326.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1326.detail} / {palette1326.name}
			</Text>
		</View>
	);
}
