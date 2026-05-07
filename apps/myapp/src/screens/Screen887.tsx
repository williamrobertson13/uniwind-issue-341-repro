import { Pressable, Text, View } from 'react-native';

import { copy887 } from '../generated/copy/copy887';
import { layout887 } from '../generated/layouts/layout887';
import { palette887 } from '../generated/palettes/palette887';

export function Screen887() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout887.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy887.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy887.detail} / {palette887.name}
			</Text>
		</View>
	);
}
