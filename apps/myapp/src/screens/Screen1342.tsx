import { Pressable, Text, View } from 'react-native';

import { copy1342 } from '../generated/copy/copy1342';
import { layout1342 } from '../generated/layouts/layout1342';
import { palette1342 } from '../generated/palettes/palette1342';

export function Screen1342() {
	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<View className={layout1342.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy1342.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1342.detail} / {palette1342.name}
			</Text>
		</View>
	);
}
