import { Pressable, Text, View } from 'react-native';

import { copy325 } from '../generated/copy/copy325';
import { layout325 } from '../generated/layouts/layout325';
import { palette325 } from '../generated/palettes/palette325';

export function Screen325() {
	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<View className={layout325.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200">{copy325.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy325.detail} / {palette325.name}
			</Text>
		</View>
	);
}
