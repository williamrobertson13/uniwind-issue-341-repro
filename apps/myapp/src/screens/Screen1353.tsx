import { Pressable, Text, View } from 'react-native';

import { copy1353 } from '../generated/copy/copy1353';
import { layout1353 } from '../generated/layouts/layout1353';
import { palette1353 } from '../generated/palettes/palette1353';

export function Screen1353() {
	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<View className={layout1353.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400">{copy1353.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1353.detail} / {palette1353.name}
			</Text>
		</View>
	);
}
