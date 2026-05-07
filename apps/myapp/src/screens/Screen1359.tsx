import { Pressable, Text, View } from 'react-native';

import { copy1359 } from '../generated/copy/copy1359';
import { layout1359 } from '../generated/layouts/layout1359';
import { palette1359 } from '../generated/palettes/palette1359';

export function Screen1359() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<View className={layout1359.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100">{copy1359.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1359.detail} / {palette1359.name}
			</Text>
		</View>
	);
}
