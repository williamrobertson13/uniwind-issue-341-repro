import { Pressable, Text, View } from 'react-native';

import { copy1182 } from '../generated/copy/copy1182';
import { layout1182 } from '../generated/layouts/layout1182';
import { palette1182 } from '../generated/palettes/palette1182';

export function Screen1182() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1182.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1182.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1182.detail} / {palette1182.name}
			</Text>
		</View>
	);
}
