import { Pressable, Text, View } from 'react-native';

import { copy671 } from '../generated/copy/copy671';
import { layout671 } from '../generated/layouts/layout671';
import { palette671 } from '../generated/palettes/palette671';

export function Screen671() {
	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-15 bg-rose-500 rounded-full" />
			<View className={layout671.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600">{copy671.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy671.detail} / {palette671.name}
			</Text>
		</View>
	);
}
