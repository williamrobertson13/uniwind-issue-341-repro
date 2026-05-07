import { Pressable, Text, View } from 'react-native';

import { copy1014 } from '../generated/copy/copy1014';
import { layout1014 } from '../generated/layouts/layout1014';
import { palette1014 } from '../generated/palettes/palette1014';

export function Screen1014() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-10 bg-blue-700 rounded-full" />
			<View className={layout1014.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700">{copy1014.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1014.detail} / {palette1014.name}
			</Text>
		</View>
	);
}
