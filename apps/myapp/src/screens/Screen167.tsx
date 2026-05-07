import { Pressable, Text, View } from 'react-native';

import { copy167 } from '../generated/copy/copy167';
import { layout167 } from '../generated/layouts/layout167';
import { palette167 } from '../generated/palettes/palette167';

export function Screen167() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout167.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy167.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy167.detail} / {palette167.name}
			</Text>
		</View>
	);
}
